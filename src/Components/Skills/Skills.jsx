import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import reactImg from '../../assets//img/react.svg'
import JSImg from '../../assets//img/logo-javascript.svg'
import NodeImg from '../../assets//img/nodejs-logo.svg'
import MongoImg from '../../assets//img/mongodb-logo.svg'
import BootstrapImg from '../../assets//img/bootstrap-logo.svg'
import MaterialUiImg from '../../assets//img/material-ui-logo.svg'
import HtmlImg from '../../assets//img/html-logo.svg'
import CssImg from '../../assets//img/css-logo.svg'
import GitImg from '../../assets//img/git-logo.svg'
import TrackVisibility from 'react-on-screen';
import './Skills.css'
const Skills = () => {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
  return (
    <section className="skill" id="skills">
          <TrackVisibility once offset={300} >
                 {({isVisible})=>
                  <div className={isVisible ? "animate__animated animate__fadeIn":"animate__animated animate__fadeOut"}>
        <div className='container'>
        <div className="col-12">
                <div className="skill-bx wow zoomIn">
                    <h2>Skills</h2>
                    <p>This is the stack I currently work with</p>
   
        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                        <div className="item">
                            <img src={reactImg}alt="React Image"/>
                            <h5 >React</h5>
                        </div>
                        <div className="item">
                        <img src={JSImg}alt="JS Image"/>
                            <h5>JavaScript</h5>
                        </div>
                        <div className="item">
                        <img src={NodeImg}alt="Node Image"/>
                            <h5>Node JS</h5>
                        </div>
                        <div className="item">
                        <img src={MongoImg}alt="MongoDB Image"/>
                            <h5>MongoDB</h5>
                        </div>
                        <div className="item">
                        <img src={BootstrapImg}alt="Bootstrap Image"/>
                            <h5>Bootstrap</h5>
                        </div>
                        <div className="item ">
                        <img src={MaterialUiImg} alt="MUI Image"/>
                            <h5 >Material UI</h5>
                        </div>
                        <div className="item ">
                        <img src={HtmlImg} alt="HTML Image"/>
                            <h5 >HTML5</h5>
                        </div>
                        <div className="item ">
                        <img src={CssImg} alt="CSS Image"/>
                            <h5 >CSS3</h5>
                        </div>
                        <div className="item ">
                        <img src={GitImg} alt="Git Image"/>
                            <h5 >Git</h5>
                        </div>
                       
                    </Carousel>
                    </div>
    
    </div>
  </div>
  </div>}</TrackVisibility>
  </section>
  )
}

export default Skills