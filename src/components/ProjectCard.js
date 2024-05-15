import { Col } from "react-bootstrap";


export const ProjectCard = ({ title, description, imgUrl,link }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h2>{title}</h2>
          <p>{description}</p>
          <a href={link}>VISITAR</a>
          
          
        </div>
      </div>
    </Col>
  )
}