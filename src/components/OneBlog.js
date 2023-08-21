import React from 'react'

const OneBlog = (props) => {
 
  const {blo} = props;
 
  return(
   <>
  <div className=''>
  <div className="card border-success mb-3" style={{maxWidth: '18rem'}}>
  <div className="card-header bg-transparent border-success">Header</div>
  <div className="card-body text-success"> 
    <h5 className="card-title">{blo.title}</h5>
    <p className="card-text"> {blo.textbody}</p>
  </div>
  <div className="card-footer bg-transparent border-success">Footer</div>
</div>
      
    </div>
    </>
  )
}

export default OneBlog
