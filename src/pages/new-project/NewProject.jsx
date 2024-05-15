import ButtonLink from '../../components/button-link/ButtonLink';
import './new-project.scss'

const NewProjects = () => {
    return ( 
        <>
        <section className='new-project-container'>
            <div className="header-new-project">
                <h1>Criar Projeto</h1>
                <ButtonLink text="Criar Projeto" />
            </div>
            <p>Crie o seu projeto para depois adicionar os serviços.</p>
        </section>
        </>
    );
}
export default NewProjects;