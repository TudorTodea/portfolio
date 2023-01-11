import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import './Hero.css'
import heroImg from "../../assets/img/try2.svg"
const Hero = () => {
  return (
    <section className='hero' id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7} >
                    <span className='tagline text-align-center '>
                    Welcome to my Portfolio</span>
                    <h1>{`Hi I'm Tudor, Web Developer `}</h1>
                    <button onClick={()=>console.log('connect')}>Contact Me  <ArrowRightCircle size={25}/></button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={heroImg} alt='Hero Image'/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Hero