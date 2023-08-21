// AddBlog.js
import React, { useContext, useState } from 'react';
import BlogContext from '../context/BlogContext'; // Assuming this is the correct path to BlogContext

const AddBlog = () => {
  const context = useContext(BlogContext); // Using useContext to get the BlogContext
  const { addOblog } = context; // Destructuring the context to get oblog and addOblog

  const [nblog, setNblog] = useState({ title: '', textbody: '' });

  const handleAdd = async (e) => {
    e.preventDefault();
  
  
    try{

   await addOblog(nblog.title, nblog.textbody);
    setNblog({ title: '', textbody: ''});
  }catch(error){ console.error(error.message)
  }
  };

  const onChange = (e) => {
    setNblog({ ...nblog, [e.target.name]: e.target.value });
  }

  return (
    <>
      <div className='container'>
        <form>
          <div className="form-group">
            <label htmlFor="title">title</label>
            <input type="text" name='title' className="form-control" id="title" aria-describedby="emailHelp" value={nblog.title} onChange={onChange} placeholder="Enter title" />

          </div>
          <div className="form-group">
            <label htmlFor="textbody">textbody</label>
            <input type="text" name='textbody' className="form-control" id="textbody" aria-describedby="emailHelp"  value={nblog.textbody} onChange={onChange}  placeholder="Enter title" />

          </div>
          
          <br />
          <button type="submit" className="btn btn-primary" onClick={handleAdd}>Ready to inspire?Submit here</button>
        </form>
      </div>
    </>
  );
}

export default AddBlog;
