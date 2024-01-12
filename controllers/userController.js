const userModel = require('../models/userModel')
exports.registerController =async(req,res) => {
     try{
       const {username,email,password} =req.body
       if(!username ||!email || !password){
        return res.status(400).send({
            sucess:false,
            message:'please fill all fields'
        })
       }

const exisitingUser = await userModel.findOne({email})
if(exisitingUser){
    return res.status(401).send({
        sucess:false,
        message:'user already exists'
    })
}

const user = new userModel({username,email,password })
await user.save()
return res.status(201).send({
    sucess:true,
    message:'New User Created',
    user ,
})
     }
     catch(error){
        console.log(error)
        return res.status(500).send({
            message:'Error in register call back',
            sucess:false,
            error
        })
     }
};
 
//to get all users 
exports.getAllUsers = async (req,res) => {
    try{
        const users = await userModel.find({});
        return res.status(200).send({
            userCount:users.length,
            success: true,
            message:"all users data",
            users,
        });

    }catch(error){
        console.log(error)
        return res.status(500).send({
            sucess:false,
            message:'error in get all users',
            error
        })
        
    }
};



exports.loginController = () => {};
