import { createContext, useState } from "react";
export const ProjectContext = createContext()

export const ProjectProvider = ({ children }) => {
    const [project, setProject] = useState([]);
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [dateStart, setDateStart] = useState('');
    const [dateEnd, setDateEnd] = useState('');


    return(
        <ProjectContext.Provider value={{ 
            project, setProject, name, setName, about, setAbout, dateStart, setDateStart, dateEnd, setDateEnd 
            }}>
            {children}
        </ProjectContext.Provider>
    )
}