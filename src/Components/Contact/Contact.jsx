import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Contact.css'
import ContactSvg from '../../assets/img/contact.svg'
import TrackVisibility from 'react-on-screen';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
    const toastOptions={
        position:"bottom-right",
        autoClose:8000,
        pauseOnHover:true,
        draggable:true,
        theme:"dark"
      }
    const formInitialDetails={
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:''
    }
    const [formDetails,setFormDetails]=useState(formInitialDetails)
    
    const onFormUpdate=(category,value)=>{
        setFormDetails({...formDetails,[category]:value})
    }

    const handleSubmit=async(e)=>{
e.preventDefault();
        try {

            const resp = await axios.post('https://portfolio-api-781l.onrender.com/api/form', formDetails);
            toast.success('The Message was succesfully sent!', toastOptions)
            setFormDetails(formInitialDetails);
        } catch (err) {
            toast.error(err, toastOptions)
        }
    }

  return (
    <section className='contact' id="connect">
    <Container>
        <Row className="align-items-center">
        
        <Col md={6}>
        <TrackVisibility once offset={300} >
                    {({isVisible})=>
                     <div className={isVisible ? "animate__animated animate__fadeInUp":"animate__animated animate__fadeOutDown"}>
                    <img src={ContactSvg} alt='Contact Me'/>
                    </div>}
                    </TrackVisibility>
                </Col>
            <Col md={6}>
            <TrackVisibility once  >
                    {({isVisible})=>
                     <div className={isVisible ? "animate__animated animate__fadeInDown":"animate__animated animate__fadeOutDown"}>
                <h2>Get In Touch</h2>
                </div>}</TrackVisibility>
                <form onSubmit={handleSubmit}>
                <TrackVisibility once offset={200} >
                    {({isVisible})=>
                    <Row className={isVisible ? "animate__animated animate__fadeInLeft":"animate__animated animate__fadeOutRight"}>
                        <Col sm={6} className="px-1">
                      
                            <input type='text' value={formDetails.firstName} required placeholder='First Name' onChange={(e)=>onFormUpdate('firstName',e.target.value)}/>
                        </Col>
                        <Col sm={6} className="px-1">
                        <input type='text' value={formDetails.lastName} required placeholder='Last Name' onChange={(e)=>onFormUpdate('lastName',e.target.value)}/>
                        </Col>
                        <Col sm={6} className="px-1">
                        <input type='email' value={formDetails.email} required placeholder='Email Address' onChange={(e)=>onFormUpdate('email',e.target.value)}/>
                        </Col>
                        <Col sm={6} className="px-1">
                        <input type='tel' value={formDetails.phone} placeholder='Phone No.(optional)' onChange={(e)=>onFormUpdate('phone',e.target.value)}/>
                        </Col>
                        <Col>
                        <textarea row="6" value={formDetails.message} required placeholder="Message"onChange={(e)=>onFormUpdate('message',e.target.value)}/>
                        <TrackVisibility once offset={450} >
                    {({isVisible})=>
                     <div className={isVisible ? "animate__animated animate__fadeInUp":"animate__animated animate__fadeOutUp"}>
                        <button type="submit"><span>Send</span></button>
                        </div>}</TrackVisibility>
                        </Col>
                    </Row>}</TrackVisibility>
                </form>
            </Col>
        </Row>
        <ToastContainer/>
    </Container>
</section>
  )
}

export default Contact