import React,{ useState} from 'react'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  
 //The useHistory() hook has been deprecated and replaced by the useNavigate() hook in React v6. 
 let navigate = useNavigate();

  const [credentials,setCredentials] = useState({name:"",email:"",password:""});
  const onChange = (e)=>{
    setCredentials({...credentials,[e.target.name]: e.target.value}); 
}

  const handleSumbit = async(e)=>{
    e.preventDefault();
    const response = await fetch(`http://localhost:3001/api/authe/loginAUser`, {
        method: "POST", 
        headers: {
          "Content-Type": "application/json"
          
        },
        body: JSON.stringify({email: credentials.email, password: credentials.password})
        
       
      });
      const json = await response.json();
      console.log(json);
      if(json.success){
        localStorage.setItem('token', json.authtoken);
        console.log(json.authtoken);
        navigate("/");
      }


  }
  return (
    <>
    <div className='container'>
    <form onSubmit={handleSumbit}>
    
   <div className="form-group">
     <label htmlFor="email">Email address</label>
     <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={credentials.email}  onChange={onChange} placeholder="Enter email"/>
     <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
   </div>
   <div className="form-group">
     <label htmlFor="password" >Password</label>
     <input type="password" className="form-control" id="password" name="password" onChange={onChange} value={credentials.password} placeholder="Enter your Password"/>
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

export default Login
