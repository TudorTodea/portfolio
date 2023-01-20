import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './About.css'
import AboutMeImg from '../../assets/img/about_me.svg'
import TrackVisibility from 'react-on-screen'
const About = () => {
  return (
    <section className='about' id="about">
    <Container>
      <Row>
        <Col sm={12} md={6}>
        <TrackVisibility once offset={200} >
                    {({isVisible})=>
                     <div className={isVisible ? "animate__animated animate__fadeInDown":"animate__animated animate__fadeOutDown"}>
        <img className='aboutImg' src={AboutMeImg} alt="aboutMe"/>
        </div>}</TrackVisibility>
          </Col>
          <Col sm={12} md={6}>
          <TrackVisibility once  >
                    {({isVisible})=>
                     <div className={isVisible ? "animate__animated animate__fadeInDown":"animate__animated animate__fadeOutDown"}>
          <div className='tagline text-align-center '>
                    About Me</div>
                    </div>}</TrackVisibility>
                    <TrackVisibility once  >
                    {({isVisible})=>
                     <div className={isVisible ? "animate__animated animate__fadeInUp":"animate__animated animate__fadeOutDown"}>
                    <p>
        I specialize in building full-stack applications with ReactJS and Node JS.
        I’m passionate about learning new technologies and understand there is more than one way to accomplish a task.
        Although I am most proficient in building  applications using Javascript,React, NodeJS,MongoDB,Bootstrap and Material-UI,
        I am a quick learner and can pick up new tech stacks as needed.
        I believe that being a great developer is not using one specific language, but choosing the best tool for the job.</p>
            <br/>
        <p>I graduated from university in 2022 with a Computer Science Degree, I have 5 months work experience as a fullstack developer working with tools like React and Node JS .
            I am currently looking for work as a frontend/backend or fullstack developer </p>
</div>}</TrackVisibility>
          </Col>
          </Row>
          </Container>
          </section>
  )
}

export default About