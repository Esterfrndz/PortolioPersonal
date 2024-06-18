import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Quicly from "../assets/img/Quickly.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import anime from "../assets/img/anime.png";
import parkingProject from "../assets/img/parkingProject.png";
import igameApi from "../assets/img/igameApi.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  //PROYECTOS WEB

  const webProjects = [ 
    {
      title: "Buscar Anime",
      description: "HTML | CSS | JS",
      imgUrl: anime,
      link:"https://buscador-anime-theta.vercel.app/"
    },
    {
      title: "Parking",
      description: "HTML | CSS | JS",
      imgUrl: parkingProject,
      link:"https://parking-alpha-three.vercel.app/"
    },
   
    

    
  ];

  //PROYECTOS API

  const apiProjects = [
    // Agrega tus proyectos de API aquí
    {
      title: "iGame",
      description: "Node.js | Express | Mongodb",
      imgUrl: igameApi,
      link: "https://github.com/Esterfrndz/igame-api"
    },
    
  ];

  //PROYECTOS MOBILE

  const mobileProjects = [
    {
      title: "Delivery App",
      description: "Flutter",
      imgUrl: Quicly,
      link: "https://github.com/Esterfrndz/quick_drop/"
    }
  ];



  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <d className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Cuento con proyectos desarrollados tanto con react, angular o incluso flutter. Este portfolio personal será un espacio perfecto para poder compartirlos!</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">WEB</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">API</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">MOBILE</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          webProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">

                    <Row>
                        {
                          apiProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      
                    <Row>
                        {
                          mobileProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>

                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </d>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
