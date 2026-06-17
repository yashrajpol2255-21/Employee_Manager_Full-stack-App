import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Employees from './pages/Employees.jsx';
import About from './pages/About.jsx';

function App(){
  return(
    <BrowserRouter>
      <Navbar />
       <Routes>
        <Route 
           path="/"
           element={<Dashboard />}
        />
        <Route 
           path="/employees"
           element={<Employees />}
        />
        <Route 
           path="/about"
           element={<About />}
        />
      </Routes>
    </BrowserRouter>
  );
}
export default App;