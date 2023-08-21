const express = require('express')
//The express.Router() function is used to create a new router object. This function is used when you want to create a new router object in your program to handle requests. 
const router = express.Router();
const fetchAUser = require('../middleware/fetchAUser');
const blog = require('../models/blog');


//route1: add new blog for specific user using POST "api/blogs/addblog"
router.post('/addblog',fetchAUser,async(req,res)=>{
   
   try{
    const {title,textbody} = req.body;

    const nblog = new blog({
    title,textbody,AUser: req.AUsers.id 
})

 const savedBlog = await nblog.save();

 res.json(savedBlog);
}catch(error){

    console.error(error.message);
    res.status(500).send("internal server erorr occured");
    
}

})

router.get('/getyourblogs',fetchAUser,async(req,res)=>{

    const nblog = await blog.find({AUser: req.AUsers.id});
    res.json(nblog);

}) 

router.get('/getallblogs',async(req,res)=>{
    const nblog = await blog.find();
    res.json(nblog);

})

module.exports = router 