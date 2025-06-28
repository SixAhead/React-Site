import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import Footer from "../components/Footer"; // Adjust path if needed

// import DrawSVGPlugin from "gsap/DrawSVGPlugin"; // Uncomment if you have access

import "../styles/HeroScrollReveal.css";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother /*, DrawSVGPlugin */);

export default function HeroScrollReveal() {
  useEffect(() => {
    const smoother = ScrollSmoother.create({
      smooth: 2,
      effects: true,
    });

    gsap.to(".hero-title", {
      opacity: 1,
      duration: 6,
      delay: 0.5,
      ease: "power2.out",
    });

    const scrollLength = window.innerHeight * 0.85; // 120% of viewport height

    gsap.from(".draw", {
      // drawSVG: "0%", // Requires DrawSVGPlugin
      opacity: 0,
      scale: 0.6,
      ease: "expo.out",
      scrollTrigger: {
        trigger: ".hero", // ⬅️ Use the whole section as the trigger
        start: "top top", // ⬅️ Begin pinning as soon as it hits the top of the page
        end: `+=${scrollLength}`, // ⬅️ Tune this value to match scroll distance you want
        scrub: true,
        pin: ".pin",
        pinSpacing: true, // ⬅️ Allow layout flow to stay normal
        markers: false,
      },
    });

    gsap.fromTo(
      ".hero h1",
      { scale: 2.5 },
      {
        scale: 3,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "+=1200",
          scrub: true,
          markers: false,
        },
      }
    );

    gsap.fromTo(
      ".text-zoom-section",
      { scale: 0.9, opacity: 0.1 },
      {
        scale: 1.8,
        opacity: 1,
        scrollTrigger: {
          trigger: ".text-zoom-section",
          start: "top 100%",
          end: "top 10%",
          scrub: true,
          markers: false,
        },
      }
    );
    <div style={{ height: "30vh" }}></div>;

    gsap.fromTo(
      ".second-text-block",
      { scale: 0.9, opacity: 0.1 },
      {
        scale: 1.4,
        opacity: 1,
        scrollTrigger: {
          trigger: ".second-text-block",
          start: "top 40%",
          end: "top 60%",
          scrub: true,
          pin: true,
          markers: false,
        },
      }
    );

    return () => {
      smoother.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <header>
          <div className="logo">{/* Inline SVG goes here */}</div>
          <nav>
            <ul role="list">
              <li>
                <a href="#about">about</a>
              </li>
            </ul>
          </nav>
        </header>

        <section className="hero pad-l">
          <div className="heading">
            <div className="pin">
              <h1 className="hero-title">
                <span className="clamp">THE CINEMATIC FLY</span>
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

        <section
          className="text-zoom-section"
          style={{
            paddingBottom: "10rem",
            padding: "4rem 2rem",
            maxWidth: "800px",
            margin: "0 auto",
            fontSize: "1.25rem",
            color: "#333",
            lineHeight: "1.6",
          }}
        >
          <h2>What I Am About.</h2>
          <p>
            I am a digital creator, content producer, and storyteller based in
            Wexford, Ireland. My work combines photography, videography, voice
            work, and honest storytelling to create content that resonates with
            a global audience. Drawing inspiration from the natural beauty of
            Wexford and my life experiences, I create content focused on
            personal growth, mental health, and resilience. My two dogs, Ashah
            and Rebel, a Weimaraner and a German Shepherd, often accompany me on
            creative shoots and are part of the creative process that keeps my
            work grounded and personal. I love you awlays! JD x
          </p>
        </section>

        {/*
                <section className="text-zoom-section second-text-block" style={{
          padding: "4rem 2rem",
          maxWidth: "800px",
          margin: "50rem auto",
          margin: "0 auto",
          fontSize: "1.25rem",
          color: "#333",
          lineHeight: "1.6",
        }}>
          <h2>Inspiration Behind the Visuals.</h2>
          <p>
            Each frame and transition in this scroll experience was selected to evoke a sense of movement, memory, and emotion.
            The goal is to merge cinematic storytelling with interactive design, making the user feel as though they are in motion too.
          </p>
        </section>
*/}

        <section className="spacer" style={{ height: "30vh" }}></section>

        <Footer />
      </div>
    </div>
  );
}
