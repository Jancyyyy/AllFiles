import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Route,Routes,} from "react-router-dom";
import HomePage from './Components/Pages/Home/HomePage';
import Whatsnew from './Components/Pages/Whatsnew/Whatsnew'; 
import Delivery from './Components/Pages/Delivery/Delivery';
import Details from './Components/Pages/Details/Details'
import Categories from './Components/Pages/Categories/Categories'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Details" element={<Details />} />
        <Route path="/Whatsnew" element={<Whatsnew />} />
        <Route path='Delivery' element={<Delivery/>}/>
        <Route path='Categories' element={<Categories/>}/>
      </Routes>
    </BrowserRouter>
  );
}


/*
Atoms: These are the building blocks, which cannot be further broken down
Molecules: Atoms grouped together form a single molecule
Organisms: Molecules joined together to create a part of the interface
Templates: The content structure
Pages: Interfaces built as instances of templates
*/