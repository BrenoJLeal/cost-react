import { useState, useEffect } from 'react';
import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';
import styles from './ProjectForm.module.css'
const ProjectForm = ({handleSubmit, projectData, btnText}) => {
    const [categories,setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});

    useEffect(() =>{
        fetch('http://localhost:5000/categories',
        {
            method:"GET",
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((resp) => resp.json())
        .then((data) => {
            setCategories(data)
        })
        .catch((err) => console.log(err))
    },[])

    const submit =(e) =>{
        e.preventDefault()
        // console.log(project)
        handleSubmit(project)
    }

    const handleChange = (e) =>{
        setProject({...project, [e.target.name]: e.target.value})
        
    }
    const handleSelect = (e) =>{
        setProject({
            ...project, 
            category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text,
        },
    })
        
    }
    
    return ( 
        <form onSubmit={submit} className={styles.form}>
            <div>
                <Input 
                    type="text" 
                    text="Nome do projeto:" 
                    name='name' 
                    placeholder="Insira o nome do projeto"
                    handleOnChange={handleChange}
                    value={project.name ? project.name: ''}
                />
            </div>
            <div>
                <Input 
                    type="number" 
                    text="Orçamento do projeto:" 
                    name='budget'
                    placeholder="Insira o orçamento total"
                    handleOnChange={handleChange}
                    value={project.budget ? project.budget: ''}
                />
            </div>
            <div>
                <Select handleOnChange={handleSelect} name='category_id' text='Selecione a categoria:' value={project.category ? project.category.id: ''} options={categories} />
            </div>
            <div>
                <SubmitButton text={btnText}/>
            </div>
        </form>
     );
}
 
export default ProjectForm;