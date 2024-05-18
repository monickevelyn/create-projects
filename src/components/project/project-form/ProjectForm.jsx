import { useContext, useEffect } from "react"
import Input from "../../form/input/Input"
import ButtonSubmit from "../../form/submit/ButtonSubmit"
import TextArea from "../../form/textarea/TextArea"
import "./project-form.scss"
import { func, any } from 'prop-types'
import { ProjectContext } from "../../../context/ProjectContext"
import { useNavigate } from "react-router-dom"
import { v4 as uid } from "uuid"

const ProjectForm = () => {

    const { 
        project, setProject, name, setName, about, setAbout, dateStart, setDateStart, dateEnd, setDateEnd 
    } = useContext(ProjectContext)

    const navigate = useNavigate();

    const onAddProject = () => {
        setProject((prev) => [
            ...prev,
            {
              id: uid(),
              name: name,
              about: about,
              dateStart: dateStart, 
              dateEnd: dateEnd
            },
        ]);
    }

    const onSubmit = (e) => {
        e.preventDefault()
        onAddProject()
        navigate('/project', {state: 'Projeto criado!'})
    }

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("Projects"));
        if(data) {
          setProject(data);
        }
    }, [setProject]);
    
    useEffect(() => {
       window.localStorage.setItem("Projects", JSON.stringify(project));
    }, [project]);

  return (
    <>
    <form onSubmit={onSubmit} className="form-container">
        <Input 
            type="text"
            label="Nome do Projeto"
            name="project_name"    
            value={name} 
            onChange={e => setName(e.target.value)}       
        />
        <TextArea 
            label="Sobre o Projeto" 
            name="project_about" 
            value={about} 
            onChange={e => setAbout(e.target.value)}           
        />
        <div className="date">
            <Input 
                type="date"
                label="Inicio de Projeto"
                name="project_start"
                className="input-date"   
                value={dateStart} 
                onChange={e => setDateStart(e.target.value)}         
            />
            <Input 
                type="date"
                label="Final de Projeto"
                name="project_end"     
                className="input-date"    
                value={dateEnd} 
                onChange={e => setDateEnd(e.target.value)}
            />
        </div>
        <ButtonSubmit text="Criar" />
    </form>
    </>
  )
}

ProjectForm.propTypes = {
    onSubmit: func,
    valueName: any,
    valueAbout: any, 
    valueStart: any, 
    valueEnd: any, 
    onChangeName: any, 
    onChangeAbout: any, 
    onChangeStart: any, 
    onChangeEnd: any
}

export default ProjectForm;