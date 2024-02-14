import React,{useState} from 'react';
import {useNavigate} from 'react-router-dom'
import {Box,Typography,TextField,Button} from '@mui/material';
import axios from 'axios'
const Register = () => {
  const navigate = useNavigate();

  const [inputs , setInputs] = useState({
    name:'',
    email:'',
    password:''
  })

 const handleChange = (e) =>{
    setInputs(prevState => ({
      ...prevState,
      [e.target.name]:e.target.value
    }));
 };

 const handleSubmit = async (e) =>{
  e.preventDefault();
 try {
  const {data} =await axios.post("http://localhost:8000/api/v1/user/register",{
   username:inputs.name,
    email:inputs.email,
    password:inputs.password,
  })
  if(data.sucess) {
    alert("user  registered sucessfully ");
    navigate('/login');
  }
 } catch(error){
  console.log(error);
 }
 };
 
  return (
    <>
    <form onSubmit={handleSubmit}>
      <Box maxWidth={450}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        justifyContent={"center"}
        margin="auto"
        marginTop={8}
        boxShadow="10px 10px 20px pink"
        padding={7}
        borderRadius={5}

       >
        <Typography  padding={3} textAlign="center"> 
         REGISTRATION
         </Typography> 
        <TextField  placeholder='name'
        value={inputs.name}
        onChange={handleChange}
        name="name"
        margin="normal"
        type={"text"}
        required
        />

        <TextField  placeholder='email'
         value={inputs.email}
        name="email"
        margin="normal"
        type={"email"}
        required
        onChange={handleChange}
        />

       <TextField 
        placeholder='password'
        value={inputs.password}
        name="password"
        margin="normal"
        type={"password"}
        required  
        onChange={handleChange}
        />
        <Button
        type="submit"
        sx={{borderRadius:3,marginTop:3}}
        variant="contained"
        color="primary"
        > Submit</Button>
        <Button onClick={()=> navigate("/login")} sx={{borderRadius:3,marginTop:3}}
        > Already registered?please login </Button>

      </Box>
      </form>
    </>
  )
}

export default Register
