
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/index';
import {Routes, Route} from 'react-router-dom';
import About from './pages/about';
import Menu from './pages/menu';
import Contact from './pages/contact';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/menu" element={<Menu/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
