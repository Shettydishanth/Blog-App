const express = require('express')
const { getAllBlogsController, createBlogController,userBlogController, updateBlogController, getBlogByIdController, deleteBlogController } = require('../controllers/blogController')

const router = express.Router()

//to get all routes get post put and mathala undu !!!!
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
//get user blog
router.get('/user-blog/:id',userBlogController)

module.exports = router