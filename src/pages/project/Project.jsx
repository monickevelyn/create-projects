import "./project.scss"
import { useContext } from "react"
import ButtonLink from "../../components/button-link/ButtonLink"
import ProjectCard from "../../components/project/project-card/ProjectCard";
import { ProjectContext } from "../../context/ProjectContext"
import NoProject from "../../components/no-project/NoProject";

const Project = () => {

  const { project } = useContext(ProjectContext)

    //   const deleteProject = (id) => {
    //     const newProjects = project.filter((project) => project.id !== id);
    //     setProject(newProjects);
    // };

  return (
    <>
    <section className="project-container">
        <div className="header-project-container">
          <h1>Meus Projetos</h1>
          <ButtonLink to="/newprojects" text="Criar Projeto" />
        </div>
        <div className="projects">
          {
            project.length >=1 &&
              project.map((proj) => (
                <ProjectCard
                  key={proj.name}
                  name={proj.name}
                  content={proj.about}
                  date_end={proj.dateEnd}
                  date_start={proj.dateStart}
                  // onClick={() => deleteProject(proj.name)}
                />
              ))
          }
          {
            project.length === 0 && (
              <NoProject />
            )
          }
        </div>
    </section>
    </>
  )
}

// Project.propTypes = {}

export default Project;