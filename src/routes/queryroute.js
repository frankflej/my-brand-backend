import express from 'express'
import queryController from '../controllers/queryController.js'

const router=express.Router()

router.get('/',queryController.allQuery)
router.post('/',queryController.createQuery)

export default router;