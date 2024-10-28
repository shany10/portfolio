import './App.css';
import './Caroussel.css';
import Navebar from './component/Navbar';
import Home from './pages/Home';
import Career from './pages/Career';
import Project from './pages/Project';

function App() {
  return (
    <div>
      <Navebar />
      <Home />
      <Career />
      <Project />
    </div>
  );
}

export default App;
