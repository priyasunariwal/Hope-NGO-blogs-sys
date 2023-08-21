import React,{useContext, useEffect} from 'react'
import BlogContext from '../context/BlogContext'
import OneBlog from './OneBlog';

const AllBlogs = (props) => {
    const context = useContext(BlogContext);
    const {oblog, getAll} = context;
      useEffect(()=>{
        getAll();
      },[]) 

  return (
    <>
    <h2>Loads of compassion and lively love ALERT! </h2>
    <div className='container ' style={{display:'flex'}}>
     
      {oblog.map((blo)=>{
          return <OneBlog key={blo._id} blo={blo}/>
      })}
    </div>
    </>
  )
}

export default AllBlogs
