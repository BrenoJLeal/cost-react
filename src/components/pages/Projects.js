import { useLocation } from "react-router-dom";
import Message from "../layout/Message";
import styles from './Projects.module.css'
import Container from '../layout/Container'
import LinkButton from "../layout/LinkButton";
import ProjectCard from "../project/ProjectCard";
import { useState, useEffect } from "react";

const Projects = () => {

    const [projects,setProjects] = useState([])

    const location = useLocation()
    let message = ''
    if(location.state){
        message = location.state.message
    }

    useEffect(() =>{
        fetch('https://cost-server-kappa.vercel.app/projects',{
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json',
            },
        }).then(resp => resp.json())
        .then(data => {
            console.log(data)
            setProjects(data)
        }).catch(err => console.log(err))

    },[])
    return ( 
        <div className={styles.project_container}>
            <div className={styles.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton text='Criar Projeto' to='newproject'/>
            </div>
            
            {message && <Message msg={message} type="success" />}
            <Container customClass="start">
            {projects.length >0 && projects.map((project) =>(
                project && project.category && (
                    <ProjectCard 
                        id={project.id} 
                        name={project.name} 
                        budget={project.budget} 
                        category={project.category.name} 
                        key={project.id}/>
                )
            ))}

            </Container>
        </div>
     );
}
 
export default Projects;