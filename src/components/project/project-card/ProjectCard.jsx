import "./project-card.scss"
import { any } from 'prop-types'
import { RiDeleteBin6Line } from "react-icons/ri";

const ProjectCard = ({ name, content, date_start, date_end }) => {
  return (
    <>
    <div className="project">
        <div className="header-project">
            <h4>{name}</h4>
            <button className="button-del" > 
                <RiDeleteBin6Line />
            </button>
        </div>
        <div className="about-project">
            <p>{content}</p>
        </div>
        <div className="date-project">
            <span>{date_start}</span>
            <span> até </span>
            <span>{date_end}</span>
        </div>
    </div>
    </>
  )
}

ProjectCard.propTypes = {
    name: any, 
    content: any, 
    date_start: any, 
    date_end: any,
}

export default ProjectCard;