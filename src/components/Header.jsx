// src/components/Header.jsx
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header style={{ width: '100%',
        margin: '0',
        padding: '0',
        boxSizing: 'border-box',
        border: 'none',
        marginLeft: '-3rem',
        marginRight: '3rem'
          }}>
      <Link to="/" className="glowing-button" style={{
        width: '15%',
        minWidth: '14rem',
        fontSize: '1rem',
        textAlign: 'center',
        display: 'block',
        marginBottom: '-1.rem',
        marginLeft: '6rem'
      }}>
        THE CINEMATIC FLY
      </Link>


      <nav style={{
        backgroundColor: 'transperant',
        color: '#000',
        fontSize: '2rem',
        padding: '0rem',
        display: 'flex',
        justifyContent: 'center',
        gap: '2rem'
      }}>
        <Link to="/" className="glowing-button">Home</Link>
        <Link to="/about" className="glowing-button">About</Link>
        <Link to="/blog" className="glowing-button">Blog</Link>
        <Link to="/awesome" className="glowing-button">Awesome</Link>
        <Link to="/photos" className="glowing-button">Photos</Link>

        
      </nav>
    </header>
  );
}

export default Header;
