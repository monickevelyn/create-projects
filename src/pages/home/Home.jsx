import ButtonLink from '../../components/button-link/ButtonLink';
import './home.scss'

const Home = () => {
    return ( 
        <>
         <section className='home-container'>
            <h1>Bem-vindo ao <span>Projects</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <ButtonLink  to="/newprojects" text="Criar Projeto" />
         </section>
        </>
    );
}
export default Home;