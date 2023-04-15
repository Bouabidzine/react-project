
import { Route, Routes } from 'react-router';
import './App.css';
import NavBar from './component/NavBar';
import Administarteur from './pages/Administarteur';
import Catalogue from './pages/Catalogue';
import Client from './pages/Client';
import Fournisseur from './pages/Fournisseur';
import home from './pages/home';

function App() {
  return (
    <div className="App">
     <NavBar/>
     
      <Routes>
         <Route path="/" element={<home/>}></Route>
         <Route path="/Catalogue" element={<Catalogue/>}></Route>
         <Route path="/Administrateur" element={<Administarteur/>}></Route>
         <Route path="/Fournisseur" element={<Fournisseur/>}></Route>
         <Route path="/Client" element={<Client/>}></Route>
        
      
      </Routes>
     
    </div>
  );
}

export default App;
