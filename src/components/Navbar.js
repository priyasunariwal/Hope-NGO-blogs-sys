import React from 'react'
import {Link, useNavigate}  from "react-router-dom";
import { useLocation } from 'react-router-dom';
const Navbar = ()=> {

  let location = useLocation();
  let navigate = useNavigate();
  const handleLogOut = ()=>{
    localStorage.removeItem('token');
     navigate('/login');
  }

  return (
  <>
   <div>
   <nav className="navbar navbar-expand-lg bg-body-success" style={{height:'70px',backgroundColor:'#CFD8DC',border:'',borderRadius:'5px'}}>
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link`}  aria-current="page" to="/" style={{color:`${location.pathname==="/"?'black':'#EF6C00'}`,fontSize:'25px'}} >Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About" style={{color:`${location.pathname==="/About"?'black':'#EF6C00'}`
,fontSize:'25px'}}>About us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Adopt" style={{color:`${location.pathname==="/Adopt"?'black':'#EF6C00'}`
,fontSize:'25px'}}>Adopt!</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Donate"style={{color:`${location.pathname==="/Donate"?'black':'#EF6C00'}`
,fontSize:'25px'}}>Donate!</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blogs"style={{color:`${location.pathname==="/blogs"?'black':'#EF6C00'}`
,fontSize:'25px'}}>Blogs!</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/Join" style={{color:`${location.pathname==="/Join"?'black':'#EF6C00'}`
,fontSize:'25px'}}>Join us!</Link>
        </li>
        
        
       {!localStorage.getItem('token')? <h6 className="okay">login/signup to add your own blogs!</h6>:<li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/ownblogs" style={{color:`${location.pathname==="/ownblogs"?'black':'#EF6C00'}`
,fontSize:'25px'}}>add blogs!</Link>
        </li>}

      </ul>
     
      <Link role="button" className="btn btn-dark" to="/login" style={{margin:'10px'}} >LogIn</Link>
      <Link className="btn btn-dark mx-1" to="/signup" role="button">SignUp</Link>
      <button type="button" className="btn btn-dark" style={{margin:'10px'}} onClick={handleLogOut} >LogOut</button>
    </div>
  </div>
</nav>
   </div>
   </>
)

}
export default Navbar
