import { Routes, Route, useLocation } from "react-router";

import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

import Boxes from "../views/Boxes";
import Images from "../views/Images";
import ScramblePage from "../views/ScramblePage"; // Add this import
import Home from "../pages/Home";

gsap.registerPlugin(ScrollSmoother, useGSAP);

export default function Router() {
  const location = useLocation();

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 1,
      effects: true,
    });
  }, [location]);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Routes>
          <Route>
            <Route index element={<Home />} />
            <Route path="images" element={<Images />} />
            <Route path="/scramble" element={<ScramblePage />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}
