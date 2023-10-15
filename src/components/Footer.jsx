import React from 'react'
import {Link} from 'react-router-dom';
function Footer() {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column' style={{width:'100%',height:'300px'}}> 
<div className='footer-content d-flex justify-content-evenly w-100 flex-wrap'>
    <div style={{width:'400px',}} className="website">
   <h4> <i className="fa-solid fa-cloud-arrow-up"></i>Media Player</h4>
<h6>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</h6>
<h6>Code licensed MIT, docs CC BY 3.0.</h6>
<p>Currently v5.3.2.</p>
    </div>
    
    <div className="links d-flex flex-column">
        <h4>Links</h4>
        <Link to={'/'} style={{textDecoration:'none',color:'white',}}>Landing Page</Link>
        <Link to={'/home'} style={{textDecoration:'none',color:'white',}}>Home</Link>
        <Link to={'/watch-history'} style={{textDecoration:'none',color:'white',}}> Watch History</Link>
        
    </div>

    <div className="guides d-flex flex-column">
        <h4>Guides</h4>
        <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white',}}>React</Link>
        <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white',}}>React bootstrap</Link>
        <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white',}}> Routing </Link>
    </div>

    <div className="contact d-flex flex-column">
        <h4>Contact Us</h4>
      <div className='d-flex'>  <input className='form-control' placeholder='Enter your Email' />
      <div className='btn btn-primary ms-3'><i class="fa-solid fa-arrow-right fa-beat"></i></div>
      </div>
     <div className='icons  mt-3 d-flex justify-content-evenly fs-4'>
            
            <Link to={'https://getbootstrap.com/'} style={{textDecoration:'none',color:'white',}}><i class="fa-brands fa-linkedin-in"></i></Link>
            <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white',}}><i class="fa-brands fa-twitter"></i></Link>
            <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white',}}> <i class="fa-brands fa-facebook"></i> </Link>
            <Link to={'https://react-bootstrap.github.io/'} style={{textDecoration:'none',color:'white',}}><i class="fa-solid fa-envelope"></i> </Link>

     </div>
    </div>

</div>
<p>Copyright © 2023 Media Player. Built with React.</p>
    </div>
  )
}

export default Footer