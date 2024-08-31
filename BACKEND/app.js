
//pw-admin123

const express=require("express");
const mongoose=require("mongoose");
const router = require("../BACKEND/Routes/NurseRoutes")
const app =express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());
app.use("/nurses",router);


mongoose.connect("mongodb+srv://admin:admin123@cluster.ugqok.mongodb.net/")
.then(()=>  console.log("connect to the mongoDB"))
.then(()=>{
    app.listen(5000);
})
.catch((err)=> console.log((err)));
