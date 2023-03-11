import express from 'express'
import blogController from '../controllers/blogController.js'
import commentController from '../controllers/commentContoller.js'
import extractToken from '../middleware/extratoken.js'
import verifyAdmin from '../middleware/verifyAdmin.js'
const router= express.Router()

router.post('/',verifyAdmin, blogController.createBlog)
router.get('/',blogController.getblogs)
router.put('/:id',verifyAdmin,blogController.updateblog)
router.delete('/:id',verifyAdmin,blogController.deleteBlog)
router.put('/:id',blogController.getOne)
router.post('/:id/comments',extractToken ,commentController)


export default router
