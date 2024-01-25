import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Contato from './components/pages/Contato';
import NewProject from './components/pages/NewProject';
import Company from './components/pages/Company';

import Container from './components/layout/Container';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Projects from './components/pages/Projects';

function App() {
  return (
    <Router>
      <NavBar/>
      <Container customClass="min-height">
        <Routes>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/company" element={<Company/>}/>
          <Route path='/contact' element={<Contato/>}/>
          <Route path="/cost-react/newproject" element={<NewProject/>}/>
          <Route exact path="/cost-react" element={<Home/>}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  );
}

export default App;
