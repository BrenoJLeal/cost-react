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
      <Home/>
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/projects" element={<Projects/>}/>
          <Route exact path="/company" element={<Company/>}/>
          <Route exact path='/contact' element={<Contato/>}/>
          <Route exact path="/newproject" element={<NewProject/>}/>
        </Routes>
      </Container>

      <Footer/>
    </Router>
  );
}

export default App;
