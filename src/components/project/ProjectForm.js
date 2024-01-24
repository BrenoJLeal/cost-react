const ProjectForm = () => {
    return ( 
        <form>
            <div>
                <input type="text" placeholder="Insira o nome do projeto"/>
            </div>
            <div>
                <input type="number" placeholder="Insira o orçamento total"/>
            </div>
            <div>
                <select name="category_id">
                    <option disabled>Selecione a categoria</option>
                </select>
            </div>
            <div>
                <button type="submit">Criar projeto</button>
            </div>
        </form>
     );
}
 
export default ProjectForm;