import loginController from "../controllers/loginController.js";
import express from 'express'

const router= express.Router()

router.post('/',loginController)

export default router