const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
// const colors = require("colors");
const dotenv = require("dotenv");
const {connectDB} = require("./config/db");

dotenv.config();


const userRoutes = require('./routes/userRoutes.js')

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// app.get("/", (req, res) => {
//   res.status(200).send({
//     message: "Node Server",
//   });
// });
app.use('/api/v1/user',userRoutes);
app.get("/",(req,res)=>{
  res.json({msg:"Hello from me  Dishanth"})
})
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server  running on  ${process.env.DEV_MODE} port no ${PORT}`);
});
//http://localhost:3000/api/v1/user/all-users
//13