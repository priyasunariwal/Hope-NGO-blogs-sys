import React, { useContext, useEffect } from 'react'
import BlogContext from '../context/BlogContext'
import { useNavigate } from 'react-router-dom';
import OneBlog from './OneBlog';

const YourBlogs = (props) => {
 
  const context = useContext(BlogContext);
  const {oblog, getBlog} = context;

   let navigate = useNavigate();
   
   useEffect(()=>{
     
    if(localStorage.getItem('token')){
      getBlog();
    }else{
      navigate("/loginAUser");
    }
      // eslint-disable-next-line
   },[]);

  return (
      <>
      <div className="">
      <div className="row my-3">
      <h1>Your Blogs</h1>
      <div className='container mx-3' style={{margin:'50px'}}>
     
      {oblog.length===0 && "No Blogs added yet! Wait no more to inspire the unexpected person! "}
      {oblog.map((blo)=>{
        return <OneBlog key={blo._id} blo={blo}/>
      })}  
    
      </div>
      </div>
      </div>
      </>
  )
}

export default YourBlogs
