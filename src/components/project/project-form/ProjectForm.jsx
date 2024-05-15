import Input from "../../form/input/Input"
import ButtonSubmit from "../../form/submit/ButtonSubmit"
import TextArea from "../../form/textarea/TextArea"
import "./project-form.scss"
import {} from 'prop-types'

const ProjectForm = () => {
  return (
    <>
    <section className="form-container">
        <Input 
            type="text"
            label="Nome do Projeto"
            name="project_name"            
        />

        <TextArea 
            label="Sobre o Projeto" 
            name="project_about"            
        />

        <div className="date">
            <Input 
                type="date"
                label="Inicio de Projeto"
                name="project_start"
                className="input-date"            
            />
            <Input 
                type="date"
                label="Final de Projeto"
                name="project_end"     
                className="input-date"        
            />
        </div>

        <ButtonSubmit text="Criar" />
    </section>
    </>
  )
}

ProjectForm.propTypes = {

}

export default ProjectForm;