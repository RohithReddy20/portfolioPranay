import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/pet.png";
import projImg2 from "../assets/img/tiny.png";
import projImg3 from "../assets/img/job.png";
import projImg4 from "../assets/img/bakery.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Paw feet",
      description: "Paw Feet Pet Adoption app is a mobile app that helps pet owners find homes for their pets",
      imgUrl: projImg1,
    },
    {
      title: "Tiny Owl",
      description: "Tiny Owl food delivery app is a food delivery app that delivers food to your door.",
      imgUrl: projImg2,
    },
    {
      title: "Job Portal App",
      description: "Job Portal app is a job portal that helps job seekers find employment opportunities",
      imgUrl: projImg3,
    },
    {
      title: "Bakery App",
      description: "Bakery app is a bakery app that allows customers to order food and desserts as well as make reservations",
      imgUrl: projImg4,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Some of the projects I've worked on recently. They include Paw Feet Pet Adoption App (which allows pet lovers to find shelter for a pet in need), Job Portal App (which helps job seekers find jobs), Bakery App (which helps bakers manage their business), Tiny Owl Food Delivery App (which brings healthy food directly to your doorstep).</p>
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
                    <Tab.Pane eventKey="second">
                      <p>No Projects</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>No Projects</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
