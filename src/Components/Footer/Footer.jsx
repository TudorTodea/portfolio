import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FiGithub,FiLinkedin,FiInstagram } from "react-icons/fi";
import logo from '../../assets/img/tudor-logo.png'
import './Footer.css'
const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Row className='align-items-center'>
                <Col className='mt-4' sm={6}>
                    <img src={logo} alt="Logo"/>
                    <p>EMAIL: tudortodea1415@gmail.com</p>
                </Col>
                <Col sm={6} className="text-center text-sm-end">
                <div className='social-icon mt-2'>
                <a href="https://github.com/TudorTodea" ><FiGithub className='icon'  size={22}/></a>
                    <a href="https://www.linkedin.com/in/tudor-todea-18b033245/"><FiLinkedin  className='icon' size={22}/></a>
                    <a href="https://www.instagram.com/todeatudor1/"><FiInstagram  className='icon' size={22}/></a>
                </div>
                <p>CopyRight 2022. All rights reserved</p>
                </Col>
                </Row>
            </Container>
        </footer>
      )
}

export default Footer