import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Appbar.css'
import logo from '../../assets/img/tudor-logo.png'
import { FiGithub,FiLinkedin,FiInstagram } from "react-icons/fi";
const Appbar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll)
        }
    }, [])
  return (
    <Navbar   expand="lg" className={scrolled ? "scrolled" : ""}>
    <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="Logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === "home" ? "active navbar-link" : 'navbar-link'} onClick={() =>setActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#about" className={activeLink === "about" ? "active navbar-link" : 'navbar-link'} onClick={() => setActiveLink('about')}>About</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === "skills" ? "active navbar-link" : 'navbar-link'} onClick={() => setActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === "projects" ? "active navbar-link" : 'navbar-link'} onClick={() => setActiveLink('projects')}>Projects</Nav.Link>

            </Nav>
            <span className='navbar-text'>
                <div className='social-icon'>
                    <a href="https://github.com/TudorTodea" ><FiGithub className='icon'  size={22}/></a>
                    <a href="https://www.linkedin.com/in/tudor-todea-18b033245/"><FiLinkedin  className='icon' size={22}/></a>
                    <a href="https://www.instagram.com/todeatudor1/"><FiInstagram  className='icon' size={22}/></a>
                </div>
                <button  onClick={() => console.log("connect")}><a style={{ textDecoration:'none'}} href='#connect'>Get in touch</a></button>
            </span>
        </Navbar.Collapse>
    </Container>
</Navbar>
  )
}

export default Appbar