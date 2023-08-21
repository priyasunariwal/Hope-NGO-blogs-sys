import React, { useState } from 'react'
import BlogContext from './BlogContext';
const BlogStates = (props) => {
 
 const oblogInitial = [];
 const [oblog,setOblog] = useState(oblogInitial);
//  const host = "http://localhost:3001"
 

 const getBlog = async ()=>{

  const response = await fetch('http://localhost:3001/api/blogs/getyourblogs',{
    method: "GET",
    headers: {
      "auth-token": localStorage.getItem('token'),
       "Content-Type": "application/json"
    }
  
  });

  const json = await response.json();
  console.log(json);
  setOblog(json);
 }


const getAll = async()=>{
  
  const response = await fetch('http://localhost:3001/api/blogs/getallblogs',{
    method: "GET",
    headers: {
      
       "Content-Type": "application/json"
    }
  
  });
  const json = await response.json();
  console.log(json);
  setOblog(json);

}





 const addOblog = async(title,textbody)=>{
    
  const response = await fetch('http://localhost:3001/api/blogs/addblog',{
    method: "POST",
    headers: {
      "auth-token": localStorage.getItem('token'),
       "Content-Type": "application/json"
    },
    body: JSON.stringify({title,textbody}),
  });

  const json = await response.json();
  console.log(json);

  const newoblog = {
   "_id" : "64bba86a6cba8e94b1b6bdba",
   "AUser": "64bba404f69206056fca50d8",
   "title": title,
   "textbody":textbody,
   "date": "2023-07-22T09:59:06.154+00:00",
   "__v": 0
  }
  setOblog(oblog.concat(newoblog));
 }
 
 
 
    return (
    <BlogContext.Provider value = {{oblog, addOblog, getBlog, getAll}}>
      {props.children}
    </BlogContext.Provider>
  )
}

export default BlogStates;
