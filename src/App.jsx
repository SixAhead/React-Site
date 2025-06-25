import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // 👈 import this
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Awesome from './pages/Awesome';
import Photos from './pages/photosmooth/Photos';
import PhotoPage from './pages/PhotoPage';

function App() {
  return (
    <>
      <ScrollToTop />
      <Header /> {/* Add this here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/awesome" element={<Awesome />} />
        <Route path="/photosmooth" element={<Photos />} />
        <Route path="/photos" element={<PhotoPage />} />
      </Routes>
    </>
  );
}

export default App;
