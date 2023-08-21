import React from "react";  

const Donate = ()=>{
 return(

    <>
    <html style={{backgroundColor:'#CFD8DC',height:'100%'}} >
    <div className="contain" >
    <h2 style={{textAlign:'center'}}>Donate for~</h2>
      <div className="donate row" style={{display:'flex'}}>
      
    
      <div className="card mb-3" style={{margin:'60px',width:'80%',border:'none',borderRadius:'7px',backgroundColor:'#CFD8DC'}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img alt=""src="images/hospital.jpeg" className="img-fluid rounded-start" style={{objectFit:'cover'}}/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Hospital</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">No act of kindness, no matter how small, is ever wasted</small></p>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3" style={{margin:'60px',width:'80%',border:'none',borderRadius:'7px',backgroundColor:'#CFD8DC'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img alt=""src="images/sanctuary.jpg" class="img-fluid rounded-start" style={{objectFit:'cover'}}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Sanctuary</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">No act of kindness, no matter how small, is ever wasted</small></p>
      </div>
    </div>
  </div>
</div>
<div class="card mb-3" style={{margin:'60px',width:'80%',border:'none',borderRadius:'7px',backgroundColor:'#CFD8DC'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img alt=""src="images/ambulance.webp" class="img-fluid rounded-start"  style={{objectFit:'cover'}}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Ambulance</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">No act of kindness, no matter how small, is ever wasted</small></p>
      </div>
    </div>
  </div>
</div>

<div class="card mb-3" style={{margin:'60px',width:'80%',border:'none',borderRadius:'7px',backgroundColor:'#CFD8DC'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img alt=""src="images/family.jpg" class="img-fluid rounded-start" style={{width:'100%',objectFit:'cover'}}/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Help families to get their pet's treatment done!</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p class="card-text"><small class="text-muted">No act of kindness, no matter how small, is ever wasted</small></p>
      </div>
    </div>
  </div>
</div>
    
</div>

    
    <div className="payment" style={{display:'flex',alignContent:'center',marginBottom:'40px'}}>
   
    <div className="card" style={{width: '600px',marginRight:'20px',marginLeft:'110px',marginTop:'60px',height:'550px',backgroundImage:'url(images/flagF.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'center center',border:'none',borderRadius:'7px'}}>
  <div className="card-body" style={{width:'90%'}}>
   
    <h4 className="card-title">Payment-INDIA</h4>
    <h6 className="card-subtitle mb-2 text-muted"><h5>Remember!</h5> Every peny of your valuable money and things is a basic needs treat for animals!</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h6>Payment by upi & Netbanking</h6>
    <p>details</p>
    <p>For helpers who can only donate using Cash!</p>
    <p>Here our shelter loactions and contact numbers who travel often around below mentioned locations.</p>
    <p style={{textAlign:'end'}}>Keep Smiling </p>
  </div>
</div>
<div className="card" style={{width: '600px',marginLeft:'40px',marginTop:'60px',height:'550px',backgroundImage:'url(images/world3.jpg)',backgroundRepeat:'no-repeat',backgroundSize:'cover',border:'none',borderRadius:'7px'}}>
  <div className="card-body"  style={{width:'78%'}}>
    <h4 className="card-title">Payment-INTERNATIONAL</h4>
    <h6 className="card-subtitle mb-2 text-muted"><h5>Remember!</h5> Every peny of your valuable money and things is a basic needs treat for animals!</h6>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <h6>Let's go with our traditional method!</h6>
    <p>Bank details~</p>
    <p style={{textAlign:'end'}}>Keep Smiling </p>
  </div>
</div>

    </div>
    </div>
    </html>
    </>
 );  



}


export default Donate