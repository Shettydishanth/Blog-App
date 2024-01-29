const blogModel = require ('../models/blogModel')

//to get all blogs

exports.getAllBlogsController = async( req,res) =>{
    try{
        const blogs = await blogModel.find({})
        if(!blogs){
            return res.status(200).send({
                sucess:false,
                message:'NO BLOGS FOUND'
            });
        }
         return res.status(200).send({
            sucess: true,
            BlogCount:blogs.length,
            message:"ALL BLOGS LISTS",
            blogs,
         });
    } catch (error) {
        console.log(error)
        return res.status(500).send({
            sucess:false,
            message:'Error while getting Blogs',
            error,
        });

    }
}

//create blog
exports.createBlogController =  async(req,res) => {
    try{
        const {title,description,image} = req.body 
        //validation
        if(!title || !description || !image){
            return res.status(400).send({
                sucess:false,
                message:'Please Provide All Fields'
            })
        }
        const newBlog = new blogModel({title,description,image})
        await newBlog.save();
        return res.status(201).send({
            sucess:true,
            message:"Blog Created!!",
            newBlog,
        });

    }catch(error){
        console.log(error)
        return res.status(400).send({
            sucess:false,
            message:'Error while creating blog',
            error
        })
    }
}

//update
exports.updateBlogController = async (req,res) => {
    try{
        const {id} =req.params
        const {title,description,image} = req.body
        const blog = await blogModel.findByIdAndUpdate(id,{...req.body},{new:true})
        return res.status(200).send({
            sucess:true,
            message:'Blog Updated',
            blog,
        })
    }catch(error){
        console.log(error)
        return res.status(400).send({
            sucess:false,
            message:'Error while updating blog',
            error
        })
    }
};

//single
exports.getBlogByIdController = async(req,res) => {
    try{
        const{id} = req.params
        const blog = await blogModel.findById(id)
        if(!blog){
            return res.status(404).send({
                sucess:false,
                message:'blog not found with this is'
            })
        }
        return res.stats(200).send({
            sucess: true,
            message:"fetch single blog",
            blog,
        });

    }catch(error){
        console.log(error)
        return res.status(400).send({
            sucess:false,
            message:'error while getting single blog',
            error
        })
    }
}

//delelte
exports.deleteBlogController = () => {}