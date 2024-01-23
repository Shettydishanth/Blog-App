const { response } = require('express');
const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')
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
//encypted password broo
const hashedPassword = await bcrypt.hash(password,10)

//to save new userr
const user = new userModel({username,email,password:hashedPassword });
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



exports.loginController = async (req,res) => {
    try{
        const {email,password} = req.body
        //validation
        if(!email || !password){
            return res.status(401).send({
                sucess:false,
                message:'Please provide email or password'
            })
        }
        const user = await userModel.findOne({email})
        if(!user){
            return res.status(200).send({
                sucess:false,
                message:'email is not registered'
            }) 
        }
        //password
        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch){
            return response.status(401).send({
                sucess:false,
                message:'Invalid username or password'
            })

        }
        return res.status(200).send({
            sucess:true,
            message:'login sucessfully',
            user
        })

    }catch (error){
        console.log(error)
        return res.status(500).send({
            sucess:false,
            message:'Error in Login Callback',
            error
        })
    }
};
