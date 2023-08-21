import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
 
   const [credentials,setCredentials] = useState({name:"",email:"",password:"",cpassword:""});

   let navigate = useNavigate();

  const handleSumbit = async (e)=>{
    e.preventDefault();
    const {name,email,password} = credentials;
  const response = await fetch(`http://localhost:3001/api/authe/createAUser`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    
    headers: {
      "Content-Type": "application/json",
      
    },
   
    body: JSON.stringify({name,email,password}), // body data type must match "Content-Type" header
  });

  const json = await response.json(); //do chiz recieve karega success variable and authtoken
  console.log(json);
  if(json.success){
    localStorage.setItem('token',json.authtoken);
    navigate("/");

  }
  
  }
 
  const onChange = (e)=>{
       setCredentials({...credentials,[e.target.name]: e.target.value}); 
  }
 
 
 
  return (
   <>
   <div className='container'>
   <form onSubmit={handleSumbit}>
   <div className="form-group">
    <label htmlFor="name">Name</label>
    <input type="text" className="form-control" id="name" name="name" onChange={onChange}  placeholder="Enter your Name"/>
  </div>
  <div className="form-group">
    <label htmlFor="email">Email address</label>
    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp"  onChange={onChange} placeholder="Enter email"/>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="password" >Password</label>
    <input type="password" className="form-control" id="password" name="password" onChange={onChange}  placeholder="Enter your Password"/>
  </div>
  <div className="form-group">
    <label htmlFor="cpassword" >Password</label>
    <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange}  placeholder="Confirm Password"/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="check" name="check"/>
    <label className="form-check-label" htmlFor="check">I agree with the terms and conditions.</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>

    </>
  )
}

export default Signup
