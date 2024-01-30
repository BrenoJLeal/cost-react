import styles from './ProjectCard.module.css'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
const ProjectCard = ({id, name, budget, category}) => {
    
    
    return ( 
        <div className={styles.project_card} key={id}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento: R${budget}</span>
            </p>
            <p className={styles.category_text}>
                <span className={`${styles[category.toLowerCase()]}`}></span> {category}
            </p>
            <div className={styles.project_card_actions}>
                <Link  to="/">
                    <Button size='large' variant="outlined" ><BsPencil/></Button>
                </Link>
                <Button size='large' variant="outlined" color="error">
                    <BsFillTrashFill/>
                </Button>
            </div>
        </div>

    );
}
 
export default ProjectCard;