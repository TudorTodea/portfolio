import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import './Hero.css'
import heroImg from "../../assets/img/try2.svg"
import TrackVisibility from 'react-on-screen';
const Hero = () => {
  return (
    <section className='hero' id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7} >
              
                <TrackVisibility once >
                    {({isVisible})=>
                     <div className={isVisible ? "animate__animated animate__fadeInDown":"animate__animated animate__fadeOutDown"}>
                    <span className='tagline text-align-center '>
                    Welcome to my Portfolio</span>
                    </div>
                }</TrackVisibility>
                    <TrackVisibility once >
                    {({isVisible})=>
                  <div className={isVisible ? "animate__animated animate__fadeInLeft":"animate__animated animate__fadeOutLeft"}>
                    <h1>{`Hi I'm Tudor, Web Developer `}</h1>
                    <button onClick={()=>console.log('connect')}><a style={{ textDecoration:'none',color:"#fff" }} href='#connect'>Contact Me  <ArrowRightCircle size={25}/></a></button>
                    </div>}
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                <TrackVisibility once >
                 {({isVisible})=>
                  <div className={isVisible ? "animate__animated animate__fadeInRight":"animate__animated animate__fadeOutRight"}>
                    <img src={heroImg} alt='Hero Image'/>
                    </div>}
                    </TrackVisibility>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Hero