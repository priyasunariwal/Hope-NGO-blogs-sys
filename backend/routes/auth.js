const express = require('express')
//The express.Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests. 
const router = express.Router();

const JWT_SECRET = 'againpriyaisbtich'  //first install npm i jsonwebtoken   
//jwt is used for safe client server communication
var jwt = require('jsonwebtoken');

//first install  npm install bcrypt
const bcrypt = require('bcryptjs');


const AUsers = require('../models/adoptedUsers');

//ROUTE1 : create ausers "/api/authe/createausers"

router.post('/createAUser',async (req,res)=>{
    // let ausers = await ausers.findOne({email: req.body.email});
    //   res.send("helllooooooo");
    let success = false;
    const salt = await bcrypt.genSalt(10) //generates salt 
    const secPass = await bcrypt.hash(req.body.password,salt);
    
    try{
    let checkEmail = await AUsers.findOne({email: req.body.email});
      if(checkEmail){
         return res.status(400).json({error:"Sorry user already exists"})

      }

    let ausers = await AUsers.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
     })
     
     const data  = {
      ausers:{
         id: ausers.id 
      }
     }


     const authtoken = jwt.sign(data, JWT_SECRET); //yeh ek token banayega with format HEADER:ALGORITHM & TOKEN TYPE,PAYLOAD:DATA,VERIFY SIGNATURE see on website if not understood
   //   console.log(authtoken); //token dekhna hai toh karlo yeh
   //   res.send(ausers); //abh yeh ausers ko nhi bhejhke authkone bhejte hai as response
   
   success = true;
   res.status(200).json({success,authtoken});
}catch(error){
   console.error(error.message);
   res.status(500).send("some error occured");
}

})


//ROUTE2: login ausers  "/api/authe/loginausers"
router.post('/loginAUser',async(req,res)=>{

   const {email,password} = req.body;
   let success = false;
 try{
  let ausers = await AUsers.findOne({email});
  if(!ausers){
   return res.status(400).json({error:"please try with correct email"});
  } 
  const passwordCompare = await bcrypt.compare(password,ausers.password)
  if(!passwordCompare){
   return res.status(400).json({error:"please try with correct password"});
  } 
  const data = {
   ausers: {
      id:   ausers.id
   }
  }
  const authtoken = jwt.sign(data,JWT_SECRET); 
  success=true;
  res.status(200).json({success,authtoken});
}catch(error){
   res.status(500).send("some error occured");
}

})


module.exports = router
