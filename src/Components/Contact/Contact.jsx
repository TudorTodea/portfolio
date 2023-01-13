import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Contact.css'
import ContactSvg from '../../assets/img/contact.svg'
import TrackVisibility from 'react-on-screen';
const Contact = () => {
    const formInitialDetails={
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        message:''
    }
    const [formDetails,setFormDetails]=useState(formInitialDetails)
    const [buttonText, setButtonText]=useState('Send');
    const [status, setStatus]=useState({});
    
    const onFormUpdate=(category,value)=>{
        setFormDetails({...formDetails,[category]:value})
    }

    const handleSubmit=()=>{

    }

  return (
    <section className='contact' id="connect">
    <Container>
        <Row className="align-items-center">
        
        <Col md={6}>
        <TrackVisibility once offset={300} >
                    {({isVisible})=>
                     <div className={isVisible ? "animate__animated animate__fadeInUp":"animate__animated animate__fadeOutUp"}>
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
                    <Row className={isVisible ? "animate__animated animate__fadeInRight":"animate__animated animate__fadeOutRight"}>
                        <Col sm={6} className="px-1">
                      
                            <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={(e)=>onFormUpdate('firstName',e.target.value)}/>
                        </Col>
                        <Col sm={6} className="px-1">
                        <input type='text' value={formDetails.lastName} placeholder='Last Name' onChange={(e)=>onFormUpdate('lastName',e.target.value)}/>
                        </Col>
                        <Col sm={6} className="px-1">
                        <input type='email' value={formDetails.email} placeholder='Email Address' onChange={(e)=>onFormUpdate('email',e.target.value)}/>
                        </Col>
                        <Col sm={6} className="px-1">
                        <input type='tel' value={formDetails.phone} placeholder='Phone No.' onChange={(e)=>onFormUpdate('phone',e.target.value)}/>
                        </Col>
                        <Col>
                        <textarea row="6" value={formDetails.message} placeholder="Message"onChange={(e)=>onFormUpdate('message',e.target.value)}/>
                        <TrackVisibility once offset={30} >
                    {({isVisible})=>
                     <div className={isVisible ? "animate__animated animate__fadeInUp":"animate__animated animate__fadeOutUp"}>
                        <button type="submit"><span>{buttonText}</span></button>
                        </div>}</TrackVisibility>
                        </Col>
                        {
                            status.message&&
                            <Col>
                            <p className={status.success===false?"danger":"success"}>{status.message}</p>
                            </Col>
                            
                        }

                    </Row>}</TrackVisibility>
                </form>
            </Col>
        </Row>
    </Container>
</section>
  )
}

export default Contact