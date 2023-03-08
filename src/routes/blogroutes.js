import express from 'express'
import blogController from '../controllers/blogController.js'
import verifyAdmin from '../middleware/verifyAdmin.js'
const router= express.Router()

router.post('/',verifyAdmin, blogController.createBlog)
router.get('/',blogController.getblogs)
router.put('/:id',verifyAdmin,blogController.updateblog)
router.delete('/:id',verifyAdmin,blogController.deleteBlog)
router.get('/:id',blogController.getOne)


export default router
