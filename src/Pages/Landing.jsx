import React from 'react'
import {Row, Col, Card} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
function Landing() {
  const navigateByUrl =useNavigate()

  const navigate =()=>{
    navigateByUrl('/home')
  }

  return (
<>

<Row className='mt-5 mb-5 align-items-center  justify-content-between'>
  <Col></Col>
  <Col lg={4}>
    <h4 className='mb-3'> Welcome to <span className='text-warning'>Media Player</span></h4>
    <p style={{textAlign:'justify'}}> Lorem, ipsum dolor sit amet consectetur 
    adipisicing elit. Est, atque maiores esse autem aliquam perferendis debitis
     quam exercitationem quasi fugit ipsa id ad officia sed, at unde necessitatibus rem! Inventore?</p>
    <div onClick={navigate} className='btn btn-primary mt-3 fw-bold'>Get Started</div>
  </Col>
  <Col></Col>
  <Col className='ps-5' lg={6}>
    <img className='img-fluid ms-5 ps-5 ' src="https://i.pinimg.com/originals/e6/58/e8/e658e8998f13909eae69aa262214f667.gif" alt="Landing" />
  </Col>
</Row>
<div className='container mt-5 mb-5 d-flex justify-content-center align-items-center flex-column'>
  <h3>Features</h3>
  <div className='cards mt-3 d-flex justify-content-between align-items-center w-100 '>
  <Card className='p-3' style={{ width: '22rem', }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://i.pinimg.com/originals/ec/8d/da/ec8dda885688ef35203135cc247e2259.gif" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
    <Card className='p-3  ms-5' style={{ width: '22rem', }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://i.gifer.com/origin/4d/4df0a6453ab542634821b4a8fd6b8fb0_w200.gif" />
      <Card.Body>
        <Card.Title>Categorise Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
    <Card className='p-3 ms-5 ' style={{ width: '22rem', }}>
      <Card.Img height={'300px'} width={'300px'} variant="top" src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c9523d52738303.591b0e94363f1.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      
      </Card.Body>
    </Card>
  </div>
</div>

<div className='container mt-5 mb-5 d-flex justify-content-between w-100 border ps-5 border-secondary rounded align-items-center'>
  <div className='content w-50'>
<h3 className='text-warning mb-5'>Simple, Fast and Powerfull</h3>

<h6 className='mt-4'><span className='fs-5 fw-bolder mt-2'>Play Everything</span>: Lorem ipsum dolor sit, amet
 consectetur adipisicing elit. 
Tenetur illum vel velit soluta, laborum quidem architecto veniam accusantium exercitationem excepturi. 
 </h6>
 <h6 className='mt-4'><span className='fs-5 fw-bolder mt-2'>Play Everything</span>: Lorem ipsum dolor sit, amet
  consectetur adipisicing elit. 
  
 </h6>
 <h6 className='mt-4'><span className='fs-5 fw-bolder mt-2'>Play Everything</span>: Lorem ipsum dolor
  sit, amet consectetur adipisicing elit. Tenetur illum vel velit soluta, laborum quidem 
  architecto veniam accusantium exercitationem excepturi. 
 </h6>
  </div>
  <div className='video  ms-5 '>
  <iframe width="489" height="257" src="https://www.youtube.com/embed/Po3jStA673E" title="LEO - Official Trailer | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</div>
</> 
 )
}

export default Landing