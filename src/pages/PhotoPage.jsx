import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Images from "../components/Images";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother); // ✅ REGISTER IMMEDIATELY

export default function PhotoPage() {
  const wrapperRef = useRef();
  const contentRef = useRef();

  useEffect(() => {
    let smoother;

    const init = () => {
      if (!wrapperRef.current || !contentRef.current) return;

      smoother = ScrollSmoother.create({
        wrapper: wrapperRef.current,
        content: contentRef.current,
        smooth: 1.5,
        effects: true,
      });
    };

    const id = requestAnimationFrame(init);

    return () => {
      cancelAnimationFrame(id);
      smoother?.kill();
    };
  }, []);

  return (
    <div id="smooth-wrapper" ref={wrapperRef}>
      <div id="smooth-content" ref={contentRef}>
        <Images />
        {/* any extra bottom spacing */}
        <div style={{ height: "20vh" }}></div>
      </div>
    </div>
  );
}
