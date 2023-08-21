import React from 'react';
// import Typical from 'react-typical';
// import { useTypingEff } from "./hooks/typingeff";
// import AOS from 'aos';
import 'aos/dist/aos.css'

const Home = ()=>{
  // const text = useTypingEff("hello world",400);
   
  // useEffect(()=>{
  //   AOS.init({duration:2000});
  // }, []);
  
  
  return (     
      <>
      <div className="allthings" style={{backgroundColor:'#CFD8DC',bottom:'0px'}}>
      <div className="container" style={{marginBottom:'40px',display:'flex'}}>
       <div className="texti" style={{marginTop:'35px',width:'800px'}} > 
         <p style={{textAlign:'left',fontSize:'50px',fontFamily:'monospace'}}> welcome onboard,ride to connect with animals through the way of souls.</p>
          </div>
          <div className="imagezz" style={{marginTop:'35px'}} >
     {/* 1st image */}
      <div className="container" data-aos = "fade-right"  >   
        <img alt=""src="images/cute.jpg" style={{
        
        float:'right',
        width:'250px',
        height: '250px',
        borderRadius:'80%',
        objectFit:'cover',
        boxShadow: '1px 1px 10px 0px red'

        

      }} />  </div>
        {/* 2nd image */}
          <div className="container"   >   
        <img alt=""src="images/elephant.avif" style={{
        
        float:'right',
        width:'250px',
        height: '250px',
        borderRadius:'80%',
        objectFit:'cover',
       
        boxShadow: '1px 1px 10px 0px red'
     

      }} />  </div>
      <br></br>
      <br></br>
        {/* 3rd image */}
          <div className="container" data-aos = "fade-left"   >   
        <img alt=""src="images/dogkitten.webp" style={{
        
        float:'right',
        width:'250px',
        height: '250px',
        borderRadius:'80%',
        objectFit:'cover',
        boxShadow: '1px 1px 10px 0px red'
     

      }} />  </div>

        </div>
      </div>
   
      <div className='mainy row' style={{display:'flex',alignItems:'center',margin:'60px',clear: 'both' }} >
      
        <div className='container'  style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        <div className="card" style={{
      marginTop:'60px',
      width:'650px',
      border:'none',
      alignItems:'center',
      borderRadius: '5px'}}>
  <img alt=""src="images/wild.jpeg" className="card-img-top"  style={{ width: '650px',
  height: '500px',objectFit:'cover'}} />
    
  <div className="card-body" style={{backgroundColor:'#CFD8DC'}}>
    <h4 className="card-text" data-aos = "fade-right">what comes in your mind when you hear wild animals?</h4>
    <p>share with us your wonderful thoughts!</p>
    <button type="button" className="btn btn-outline-danger">Click here to share</button>
     <p>Here's a glimpse of what we think!</p>
     <h6 data-aos = "fade-right">They are wild not really because they are dangerous but by their habitat wild jungles!</h6>
  </div>
  </div>

  </div>
  
  <div className='container' style={{display:'flex',alignItems:'center',justifyContent:'center'}}  >
  <div className="card" style={{
         margin:'60px',
         width:'650px',
      border:'none',
      borderRadius: '5px'}} >
  <img alt=""src="images/dog.jpeg" className="card-img-top" style={{ width: '650px',
  height: '500px',objectFit:'cover',backgroundColor:'#CFD8DC'}}  />
  <div className="card-body" style={{backgroundColor:'#CFD8DC'}}>
    <h5 className="card-text" data-aos = "fade-left">SUPER MOTHER?</h5>
    <p>yes you heard it right!</p>
    <p style={{fontSize:'bold'}}>On the streets with no shelter surving for own life while saving her childrens.</p>
    <h4 data-aos = "fade-left">little she knows,what are the chances for her babies surviving without proper basic needs.</h4>
  </div>
   </div>
   </div>
   
      </div >
      
      <div className="card" style={{top: '150px',margin:'30px'}}>
  <div className="card-header">
    Quote
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>A well-known quote, contained in a blockquote element.</p>
      <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
</div>

      </>
    );

}
export default Home