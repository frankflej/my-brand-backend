import express from "express";
import passport from "passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import User from "../model/User.js";
import bcrypt from "bcrypt";
import getCookie from "../utils/cookieSet.js";

const router =express.Router();

dotenv.config();
const secret=process.env.secret;
const passportAuth=async (res,req,next) => {

    const {email,password} =req.body;
    const foundUser= await User.findOne({email});
    
        passport.serializeUser((foundUser , done)=>{
            done(null,foundUser.id)
        })
        passport.deserializeUser((id,done)=>{
            if(foundUser){
                done(null,foundUser)
            }
            else{
                done(null,false)
            }
        })

        // token creation

        const token = jwt.sign({ id: foundUser._id }, secret, {expiresIn: "1d"});

        res.cookie('token',token, {
            httpOnly: true,
            maxAge: 1000 * 60 * 60 * 24 // 1 day
        });

        const opts = {
            secretOrKey: process.env.user_secret,
            jwtFromRequest: getCookie(res)
        };

        console.log(opts, req.body);
      
        passport.use(
          new Strategy(opts, async (email, password, done) => {
  
              try {
  
                if (foundUser) {
                    return done(null, foundUser);
                }
                else {
                    return done(null, false);
                }
                  
              } catch (error) {
                return done(error, false);
              }
  
          })
        );
  
        router.post("/", passport.authenticate("jwt", { session: false }), (req, res) => {
          res.status(200).json({
              message: "User logged in successfully",
              token: token,
          });
        });
}
export default passportAuth;