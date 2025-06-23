import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/ScrambleHoverBlock.css';

// Register plugins (must be globally loaded in index.html)
gsap.registerPlugin(ScrambleTextPlugin, SplitText);

function ScrambleHoverBlock() {
  const blockRef = useRef(null);
  let textRevealRadius = window.innerWidth * 0.17;
  let charData = [];
  let pageX = 0;
  let pageY = 0;
  let scrollY = window.pageYOffset;
  let scrollX = window.pageXOffset;

  const upperAndLowerCase = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const getRandomLetter = () =>
    upperAndLowerCase[Math.floor(upperAndLowerCase.length * Math.random())];

const updateCharData = () => {
  if (!blockRef.current) return;

  // Force layout reflow
  blockRef.current.style.display = 'none';
  void blockRef.current.offsetHeight;
  blockRef.current.style.display = '';

  setTimeout(() => {
    const split = new SplitText(blockRef.current, { type: 'chars', charsClass: 'char' });
    const chars = split.chars;

    charData = chars.map((char) => {
      const bounds = char.getBoundingClientRect();
      return {
        el: char,
        orig: char.innerText || char.textContent,
        pageY: bounds.top + scrollY + bounds.height / 2,
        pageX: bounds.left + scrollX + bounds.width / 2,
        isVisible: false
      };
    });
  }, 50); // small delay to ensure layout is fully painted
};



  const updateText = (e) => {
    if ('pageY' in e) {
      pageX = e.pageX;
      pageY = e.pageY;
    } else {
      const scrollYDif = window.pageYOffset - scrollY;
      const scrollXDif = window.pageXOffset - scrollX;
      scrollY += scrollYDif;
      scrollX += scrollXDif;
      pageY += scrollYDif;
      pageX += scrollXDif;
    }

    charData.forEach((data) => {
      const dx = pageX - data.pageX;
      const dy = pageY - data.pageY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const isVisible = dist < textRevealRadius;

      if (isVisible !== data.isVisible || !isVisible) {
        data.isVisible = isVisible;


      gsap.to(data.el, {
        overwrite: true,
        duration: gsap.utils.clamp(0.2, 1.5, dist / textRevealRadius),
        scrambleText: {
        text: data.orig,
        chars: 'upperAndLowerCase',
        scramble: !isVisible,
        revealDelay: 0,
        speed: 0.3
}

});


      }
    });
  };

  const handleResize = () => {
    textRevealRadius = window.innerWidth * 0.17;
    updateCharData();
  };

 useEffect(() => {
  requestAnimationFrame(() => {
    updateCharData();
  });

  const tick = () => {
    updateText({});
    requestAnimationFrame(tick);
  };
  tick();

  window.addEventListener('resize', handleResize);
  window.addEventListener('pointermove', updateText);
  window.addEventListener('scroll', updateText);

  return () => {
    window.removeEventListener('resize', handleResize);
    window.removeEventListener('pointermove', updateText);
    window.removeEventListener('scroll', updateText);
  };
}, []);


  return (
    <div className="scramble-wrapper">
      <p ref={blockRef}>
       I am a digital creator, content producer, and storyteller based in Wexford, Ireland. My work combines photography, videography, voice work, and honest storytelling to create content that resonates with a global audience.

Drawing inspiration from the natural beauty of Wexford and my life experiences, I create content focused on personal growth, mental health, and resilience. My two dogs, Ashah and Rebel, a Weimaraner and a German Shepherd, often accompany me on creative shoots and are part of the creative process that keeps my work grounded and personal.

Through my video work, I’ve been fortunate to build an online audience of over 220,000 followers, sharing honest conversations around mental health and personal development across multiple platforms. My goal has always been to create content that not only tells a story visually, but also emotionally — blending strong visuals with real human experiences.

Every photograph, video, and piece of content on this site is part of that ongoing journey. I invite you to explore my work, and thank you for visiting and supporting my creative path.

-- JD
      </p>
    </div>
  );
}

export default ScrambleHoverBlock;
