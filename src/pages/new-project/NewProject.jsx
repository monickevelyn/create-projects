import './new-project.scss'
import ProjectForm from '../../components/project/project-form/ProjectForm';

const NewProjects = () => {
    return ( 
        <>
        <section className='new-project-container'>
            <div className="header-new-project">
                <h1>Criar Projeto</h1>
                <p>Crie o seu projeto aqui.</p>
            </div>
            <ProjectForm />
        </section>
        </>
    );
}
export default NewProjects;