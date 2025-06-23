import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrambleTextPlugin);

function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(aboutRef.current, {
      scrambleText: { text: "", chars: "upperAndLowerCase", revealDelay: 0.1 },
      opacity: 0
    }, {
      scrambleText: `I am a digital creator, content producer, and storyteller based in Wexford, Ireland. My work combines photography, videography, voice work, and honest storytelling to create content that resonates with a global audience.

Drawing inspiration from the natural beauty of Wexford and my life experiences, I create content focused on personal growth, mental health, and resilience. My two dogs, Ashah and Rebel, a Weimaraner and a German Shepherd, often accompany me on creative shoots and are part of the creative process that keeps my work grounded and personal.

Through my video work, I’ve been fortunate to build an online audience of over 220,000 followers, sharing honest conversations around mental health and personal development across multiple platforms. My goal has always been to create content that not only tells a story visually, but also emotionally — blending strong visuals with real human experiences.

Every photograph, video, and piece of content on this site is part of that ongoing journey. I invite you to explore my work, and thank you for visiting and supporting my creative path.

-- JD`,
      opacity: 1,
      duration: 8,
      ease: 'none'
    });
  }, []);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#111', color: '#fff', padding: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div ref={aboutRef} style={{ fontSize: '1.1rem', maxWidth: '800px', lineHeight: '1.6', whiteSpace: 'pre-line' }}></div>
    </div>
  );
}

export default About;
