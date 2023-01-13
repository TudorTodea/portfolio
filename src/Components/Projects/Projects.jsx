import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Projects.css'
import MorseVideo from '../../assets/img/morseApp.mp4'
import MovieVideo from '../../assets/img/movieApp.mp4'
import CommunityVideo from '../../assets/img/communityApp.mp4'
import HexGameVideo from '../../assets/img/hexGame.mp4'
import ModernDesignsVideo from '../../assets/img/ModernDesigns.mp4'


const Projects = () => {

    const projects = [
        {
          title: "Morse Code App",
          description: "Morse Translator/Morse Game",
          videoUrl: MorseVideo,
          gitHubLink:`https://github.com/TudorTodea/Morse-Text-Translator`
        },

        {
          title: "Movie App",
          description: "Movie rating/review app",
          videoUrl: MovieVideo,
          gitHubLink:`https://github.com/TudorTodea/MERN-Movie-Rating-app---BA-Thesis`
          
        }, 

        {
          title: "Community App",
          description: "Forum like community app",
          videoUrl: CommunityVideo,
          gitHubLink:`https://github.com/TudorTodea/community-app`
          
        },
        {
          title: "Guess Hex Color Game",
          description: "Guess the color representation of the color in hex",
          videoUrl: HexGameVideo,
          gitHubLink:`https://github.com/TudorTodea/Hex-color-guesser-game-ReactJs`
        }, 
        {
          title: "Modern Designs",
          description: "Design & Development",
          videoUrl: ModernDesignsVideo,
          gitHubLink:`https://github.com/TudorTodea/figma-s-webpage-design`
        }, 

      ];

  return (
    <section className='project' id="projects">
    <Container>
      <Row>
        <Col>
        <h2>
          Projects
          </h2>
          <Row >
                  {
                    projects.map((project,index)=>{
                      return(
                        <Col key={index} sm={6} md={4}>
      <div className='proj-imgbx'>
        <a href={project.gitHubLink}>
        <video loop={true} autoPlay="autoplay" id="vid" muted width='100%' height="auto">
                        <source src={project.videoUrl} type="video/mp4" />
                    </video>
        <div className='proj-txtx'>
        <h4>{project.title}</h4>
        <span>{project.description}</span>
        </div>
        </a>
      </div>
    </Col>
                      )
                    })
                  }
                 <div className='boxMore'>
                  <a  href='https://github.com/TudorTodea/'>+ MORE</a>
                  </div>
                </Row>
          </Col>
          </Row>
          </Container>
          </section>
  )
}

export default Projects