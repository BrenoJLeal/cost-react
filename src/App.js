import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import NewProject from './components/pages/NewProject';
import Company from './components/pages/Company';

import Container from './components/layout/Container';

function App() {
  return (
    <Router>
      {/* Inicio dos Links */}
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/contact'>Contato</Link>
        <Link to='/company'>Company</Link>
        <Link to='/newproject'>Novo projeto</Link>
      </ul>
      {/* Fim dos Links */}
      
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/company" element={<Company/>}/>
          <Route exact path='/contact' element={<Contato/>}/>
          <Route exact path="/newproject" element={<NewProject/>}/>
        </Routes>
      </Container>

      <p>footer</p>
    </Router>
  );
}

export default App;
