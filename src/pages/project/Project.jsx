import ButtonLink from "../../components/button-link/ButtonLink"
import ProjectCard from "../../components/project/project-card/ProjectCard";
import "./project.scss"
// import {  } from 'prop-types'

const Project = () => {
  return (
    <>
    <section className="project-container">
        <div className="header-project-container">
            <h1>Meus Projetos</h1>
            <ButtonLink to="/newprojects" text="Criar Projeto" />
        </div>
        <div className="projects">
            <ProjectCard 
              name="Exemplo"
              content="Sobre esse é um exemplo"
              date_start="20/03/2024"
              date_end="30/05/2024"
              key="09"
            />
        </div>
    </section>
    </>
  )
}

// Project.propTypes = {}

export default Project;