import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideos } from '../services/allAPI'

function View({serverResponse}) {
  const [allVideos,setAllVideos] = useState([])
  const [deleteStatus, setDeleteStatus] = useState(false)

  const getAllUploadedVideos = async ()=>{
    //make api call
    const {data} = await getAllVideos()
   setAllVideos(data);
  } 

  useEffect(()=>{
    setDeleteStatus(false)
    getAllUploadedVideos()
  },[serverResponse, deleteStatus])
  console.log(allVideos);
  return (
 
 <Row>
 {
  allVideos?.length>0?
  allVideos?.map(video=>(
    <Col sm={12} md={6} lg={4} xl={3} >
  <VideoCard displayData = {video} setDeleteStatus = {setDeleteStatus}/>
  </Col>

  ))
  
  :<p className='fw-bolder mt-3 fs-5 text-danger'>Nothing to display!!!</p>
  }

 </Row>

  )
}

export default View