import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
// import DrawSVGPlugin from "gsap/DrawSVGPlugin"; // Uncomment if you have access

import "../styles/HeroScrollReveal.css";


gsap.registerPlugin(ScrollTrigger, ScrollSmoother /*, DrawSVGPlugin */);

export default function HeroScrollReveal() {
  useEffect(() => {
   

    
    const smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
      
    });
    

    gsap.from(".draw", {
      // drawSVG: "0%", // Requires DrawSVGPlugin
      opacity: 0,
      scale: 0.8,
      ease: "expo.out",
      scrollTrigger: {
      trigger: ".hero",      // ⬅️ Use the whole section as the trigger
      start: "top top",       // ⬅️ Begin pinning as soon as it hits the top of the page
      end: "+=700",          // ⬅️ Tune this value to match scroll distance you want
      scrub: true,
      pin: ".pin",
      pinSpacing: true,       // ⬅️ Allow layout flow to stay normal
      markers: false
    }

    });

    return () => {
      smoother.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <header>
          <div className="logo">
            {/* Inline SVG goes here */}
          </div>
          <nav>
            <ul role="list">
              <li><a href="#about">about</a></li>
            </ul>
          </nav>
        </header>

        <section className="hero pad-l">
          <div className="heading">
            <div className="pin">
              <h1>
                <span className="clamp">THE CINEMATIC FLY
                  <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 842.14 500">
                    <path className="draw" d="M336.2,130.05C261.69,118,16.52,122,20.65,244.29c4.17,123,484.3,299.8,734.57,108.37,244-186.65-337.91-311-546.54-268.47" fill="none" stroke="#8486aa" strokeMiterlimit="10" strokeWidth="8" />
                  </svg>
                </span>
                <span className="yt"></span>
              </h1>
            </div>
          </div>

          <div className="images">
            <img data-speed="clamp(2.4)" src="/photos/Cliff.jpg" alt="" />
            <img data-speed="clamp(1.8)" src="/photos/Eye.jpg" alt="" />
            <img data-speed="clamp(2.2)" src="/photos/Road.jpg" alt="" />
            <img data-speed="clamp(1.5)" src="/photos/Tree.jpg" alt="" />
          </div>
        </section>

        <section className="spacer"></section>
      </div>
    </div>
  );
}
