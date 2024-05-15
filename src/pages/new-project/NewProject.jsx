import ProjectForm from '../../components/project/project-form/ProjectForm';
import './new-project.scss'

const NewProjects = () => {
    return ( 
        <>
        <section className='new-project-container'>
            <div className="header-new-project">
                <h1>Criar Projeto</h1>
                <p>Crie o seu projeto aqui.</p>
            </div>
            <ProjectForm  />
        </section>
        </>
    );
}
export default NewProjects;