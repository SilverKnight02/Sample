import{BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Location from "./Pages/Location";
import Header from "./Components/Header";


function App() {
 
  return (
    
    <BrowserRouter>

      <Header />

      <Routes>

       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/location" element={<Location />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
