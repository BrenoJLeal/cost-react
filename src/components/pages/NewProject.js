import { useNavigate } from 'react-router-dom';
import ProjectForm from '../project/ProjectForm';
import styles from './NewProject.module.css'

const NewProject = () => {

    const history = useNavigate()

    //Função de Submit para o servidor JSON
    const createPost = (project) =>{
        
        // Initicialização de cost e services
        project.cost = 0
        project.services = []
        
        fetch('http://localhost:5000/projects',{
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project)
        })
        .then((resp) => resp.json)
        .then((data) => {
            console.log(data)
            //redirect
            history("/projects", { message: "Projeto criado com sucesso!" });
        })
        .catch((err) => console.logo(err))
    }

    return ( 
        <div className={styles.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar projeto"/>
        </div>
    );
}

export default NewProject;
