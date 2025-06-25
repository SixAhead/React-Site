import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import Footer from '../components/Footer'; // Adjust path if needed

function Awesome() {
  const nameRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(nameRef.current, { opacity: 0, y: -50 }, {
      opacity: 1, y: 0, duration: 1.5, ease: 'power3.out'
    });
  }, []);

 return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff', color: '#111', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div style={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 ref={nameRef} style={{ fontSize: '3rem' }}>Awesome</h1>
      </div>
      <Footer />
    </div>
  );
}

export default Awesome;
