// src/components/Header.jsx
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ width: '98%' }}>
      <div style={{
        backgroundColor: 'transperant',
        padding: '1rem 2rem',
        color: '#000',
        fontSize: '1.5rem',
        fontWeight: 'bold',
        textAlign: 'center'
      }}>
        My Awesome Website
      </div>

      <nav style={{
        backgroundColor: 'transperant',
        color: '#000',
        fontSize: '1.5rem',
        padding: '0rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem'
      }}>
        <Link to="/" style={{ color: '#000', textDecoration: 'none' }}>Home</Link>
        <Link to="/about" style={{ color: '#000', textDecoration: 'none' }}>About</Link>
        <Link to="/awesome" style={{ color: '#000', textDecoration: 'none' }}>Awesome</Link>
        <Link to="/photos" style={{ color: '#000', textDecoration: 'none' }}>Photos</Link>
        
      </nav>
    </header>
  );
}

export default Header;
