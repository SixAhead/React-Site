import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop'; // 👈 import this
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Awesome from './pages/Awesome';
import Photos from './pages/photosmooth/Photos';
import PhotoPage from './pages/PhotoPage';
import BlogList from './components/BlogList';
import { posts } from './data/blogData';
import BlogPostWrapper from './pages/BlogPostWrapper';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <ScrollToTop />
      <Header />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/awesome" element={<Awesome />} />
          <Route path="/photosmooth" element={<Photos />} />
          <Route path="/photos" element={<PhotoPage />} />
          
          <Route path="/blog/:slug" element={<BlogPostWrapper />} />
          <Route path="/blog" element={<Navigate to={`/blog/${posts[0].slug}`} />} />

        </Routes>
      </div>
      
    </div>
  );
}


export default App;
