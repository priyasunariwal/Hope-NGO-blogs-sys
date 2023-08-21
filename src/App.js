
import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/footer';
import Adopt from './components/Adopt';
import About from './components/About';
import Join from './components/Join';
import Donate from './components/Donate';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


import Login from './components/Login';
import Signup from './components/Signup';
import OwnBlogs from './components/OwnBlogs';
import BlogStates from './context/BlogStates';
import AllBlogs from './components/AllBlogs';

function App() {
 
  return (
    <>
    <div style={{backgroundColor:'#CFD8DC'}}>
   
    <Router> 
    <Navbar/>
      <Routes>
    
       <Route path="/" element = {<Home/>}>  </Route>
       <Route path="/Adopt" element = {<Adopt/>} >  </Route>
       <Route path="/blogs" element = {<BlogStates><AllBlogs/></BlogStates>} >  </Route>
       <Route path="/Join" element = {<Join/>} >  </Route>
       <Route path="/Donate" element = {<Donate/>}> </Route>
       <Route  path="/About"element = {<About/>} ></Route>
       <Route  path="/login"element = {<Login/>} ></Route>
       <Route  path="/signup"element = {<Signup/>} ></Route>
       <Route  path="/ownblogs"element = {<BlogStates><OwnBlogs /></BlogStates>} ></Route>
     
      </Routes>
      <Footer/>
    </Router>

  
    </div>
    </>
  );
}

export default App;








