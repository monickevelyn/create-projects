import ButtonLink from "../../components/button-link/ButtonLink"
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
            <p>aqui fica os projetos</p>
        </div>
    </section>
    </>
  )
}

// Project.propTypes = {}

export default Project;