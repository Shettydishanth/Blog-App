const express = require('express')
const { getAllBlogsController, createBlogController, updateBlogController, getBlogByIdController, deleteBlogController } = require('../controllers/blogController')

const router = express.Router()

//to get all routes get post put !!!!
//get
router.get('/all-blog',getAllBlogsController)

//post
router.post('/create-blog',createBlogController)

//put
router.put('/update-blog/:id',updateBlogController)

//gett
router.get('/get-blog/:id',getBlogByIdController)

//delete
router.delete('/delete-blog/:id', deleteBlogController)

module.exports = router