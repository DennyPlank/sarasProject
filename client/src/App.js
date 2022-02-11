import './App.css';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Photos from './pages/Photos';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Routes>
      <Route element ={<Layout />}>
        <Route path = "/home" element = {<Home />} />
        <Route path = "/photos" element = {<Photos />} />
        <Route path = "/about" element = {<About />} />
        <Route path = "/contact" element = {<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
