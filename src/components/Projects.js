import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Quicly from "../assets/img/Quickly.png";
import game from "../assets/img/game.png";
import web from "../assets/img/web.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import anime from "../assets/img/anime.png";
import parkingProject from "../assets/img/parkingProject.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Projects = () => {

  const projects = [ 
    {
      title: "Buscar Anime",
      description: "HTML/CSS/JS",
      imgUrl: anime,
      link:"https://buscador-anime-theta.vercel.app/"
    },
    
    {
      title: "Web Shop",
      description: "HTML/CSS",
      imgUrl: web,
      link:"https://github.com/Esterfrndz/WebShop"
    },

    {
      title: "Parking",
      description: "HTML,CSS,JS",
      imgUrl: parkingProject,
      link:"https://parking-alpha-three.vercel.app/"
    },

    {
      title: "Game",
      description: "Javascript",
      imgUrl: game,
      link:"https://piedra-papel-tijera-two.vercel.app/"
    },
   
    {
      title: "Delivery App",
      description: "Flutter",
      imgUrl: Quicly,
      link:"https://github.com/Esterfrndz/quick_drop/"
    },

    
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
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
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
