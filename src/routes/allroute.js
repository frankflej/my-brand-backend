import express  from "express";
import blogroute from './blogroutes.js'
import signuproute from './signuproute.js'
import loginroute from './loginroute.js'
import queryroute from './queryroutes.js'
import commentroute from './commentroute.js'

const router= express.Router();

router.use('/blog',blogroute)
router.use('/signup',signuproute)
router.use('/login',loginroute)
router.use('/query',queryroute)
router.use('/comment',commentroute)

export default router;