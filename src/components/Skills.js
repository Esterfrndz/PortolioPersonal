import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Container,Col,Row} from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png";
//Front Logos
import jsLogo from "../assets/img/jsLogo.png";
import angularLogo from "../assets/img/angularLogo.png";
import reactLogo from "../assets/img/reactLogo.png";
import typescriptLogo from"../assets/img/typescriptLogo.png";
import sassLogo from "../assets/img/sassLogo.png";
import bootstrapLogo from "../assets/img/bootstrapLogo.png";
//Backend Logo
import phpLogo from "../assets/img/phpLogo.png"
//Mobile Logo
import kotlinLogo from"../assets/img/kotlinLogo.png";
import flutterLogo from"../assets/img/flutterLogo.png";
//Tools
import githubLogo from "../assets/img/github.png";
import gitLogo from "../assets/img/gitLogo.png";
import visualLogo from "../assets/img/visualLogo.png";
import xamppLogo from "../assets/img/xamppLogo.png";
import wordpressLogo from "../assets/img/wordpressLogo.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <br></br>
              <p>
                Aunque en mis skills aparezcan lenguajes de backend o desarollo móvil, como ya he dicho, quiero especializarme en la parte frontend del desarrollo web, pero sin dejar de aprender todo lo que ofrece el mundo del desarrollo.
              </p>
            
              <h5><strong>Frontend</strong></h5>
              <br></br>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={jsLogo} alt="" />
                  <h5>Javascript</h5>
                </div>

                <div className="item">
                  <img src={angularLogo} alt="" />
                  <h5>Angular</h5>
                </div>

                <div className="item">
                  <img src={reactLogo} alt="" />
                  <h5>React</h5>
                </div>   
                <div className="item">
                  <img src={typescriptLogo} alt="" />
                  <h5>Typescript</h5>
                </div>
                <div className="item">
                  <img src={sassLogo} alt="" />
                  <h5>Sass</h5>
                </div>
                <div className="item">
                  <img src={bootstrapLogo} alt="" />
                  <h5>Bootstrap</h5>
                </div>


              </Carousel>
              <br></br>
              <br></br>
              <br></br>

              {/* BACKEND */}

              <h5><strong>Backend</strong></h5>
              <br></br>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={phpLogo} alt="" />
                  <h5>PHP</h5>
                </div>

            
              </Carousel>
              <br></br>
              <br></br>
              <br></br>

              {/* MOBILE DEVELOPMENT */}

              <h5><strong>Mobile Development</strong></h5>
              <br></br>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={kotlinLogo} alt="" />
                  <h5>Kotlin</h5>
                </div>

                <div className="item">
                  <img src={flutterLogo} alt="" />
                  <h5>Flutter</h5>
                </div>

                
              </Carousel>
              <br></br>
              <br></br>
              <br></br>

              {/* TOOLS */}

              <h5><strong>Tools</strong></h5>
              <br></br>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={githubLogo} alt="" />
                  <h5>Github</h5>
                </div>

                <div className="item">
                  <img src={gitLogo} alt="" />
                  <h5>Git</h5>
                </div>

                <div className="item">
                  <img src={visualLogo} alt="" />
                  <h5>Visual Studio Code</h5>
                </div>

                <div className="item">
                  <img src={xamppLogo} alt="" />
                  <h5>Xampp</h5>
                </div>

                <div className="item">
                  <img src={wordpressLogo} alt="" />
                  <h5>Wordpress</h5>
                </div>
              </Carousel>


            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left"src= {colorSharp}/>
    </section>
  );
};
