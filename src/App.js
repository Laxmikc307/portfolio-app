import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import ProjectDisplay from './Components/ProjectDisplay';


function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <div className="content-container">
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/experience" element={<Experience />}/>
      <Route path="/projects" element={<Projects />}/> 
      <Route path="/project/:id" element={<ProjectDisplay />} />
      <Route path="/contact" element= {<Contact />}/>
        </Routes>
        </div>
        <Footer />
        </Router>
    </div>
  );
}

export default App;
