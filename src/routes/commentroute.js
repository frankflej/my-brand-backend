import express from 'express'

import commentController from '../controllers/commentContoller.js'

const router= express.Router()

router.put('/:id&:pid',commentController)

export default router;