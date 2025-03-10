const express = require("express")
const app = express()
const  mongoose = require("mongoose");
const signup_data = require('./models/signup.js');
const cors = require('cors');
const signup = require("./models/signup.js");
const { findById } = require("./models/signup.js");

const dbUrl = "mongodb://localhost:27017/Foods"
async function main() {
     await mongoose.connect(dbUrl);
   }
   
   main()
     .then(() => {
       console.log("connected to DB");
     })
     .catch((err) => {
       console.log(err);
     });

const corsOptions = {
  origin :  "http://localhost:5173/signup" , 
  methods : "GET . POST , PUT , DELETE , PATCH , HEAD",
  credentials : true,
};

app.use(cors(corsOptions));

app.use(express.json())

// app.get("/signup" , ( req , res) => {
//   res.send("Form server");
// })
app.post("/signup" , async ( req , res) => {
  const {name , email , password} = req.body;
  const newItem =  await signup({name , email , password});
  await newItem.save();
  res.json(newItem);
})

app.get("/signup", async (res, req) =>{
  const sig  = await  signup.find({})
  res.status(200).json({message: 'successfully '} , sig);
})
app.get("/signup/:id" , async(res,req) => {
   const {id} = req.params;
   const data = await findById(id);
   res.json(data);
})
app.listen(3000 , () => {
     console.log("app is running");
})