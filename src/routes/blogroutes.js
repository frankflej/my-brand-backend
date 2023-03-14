import express from 'express'
import blogController from '../controllers/blogController.js'
import commentController from '../controllers/commentContoller.js'
import likeController from '../controllers/likeController.js'
import extractToken from '../middleware/extratoken.js'
import verifyAdmin from '../middleware/verifyAdmin.js'
const router= express.Router()

router.post('/',verifyAdmin, blogController.createBlog)
router.get('/',blogController.getblogs)
router.put('/:id',verifyAdmin,blogController.updateblog)
router.delete('/:id',verifyAdmin,blogController.deleteBlog)
router.get('/:id',blogController.getOne)
router.post('/:id/comments',extractToken ,commentController)
router.put('/:id/like',extractToken,blogController.updatelike)


export default router
