import React from "react";
import Footer from "../components/Footer"; // Adjust path if needed
const ImagesPage = () => {
  return (
    <main className="images">
      <section className="image-grid container">
        <picture className="image_cont">
          <source srcSet="/photos/Shelter.jpg" media="(min-width: 1500px)" />
          <source srcSet="/photos/Shelter.jpg" media="(min-width: 700px)" />
          <img data-speed="auto" className="" src="/photos/Eye.jpg" alt="" />
        </picture>
        <div className="image_cont">
          <img data-speed="auto" src="/photos/Road.jpg" alt="" />
        </div>
        <div className="image_cont">
          <img data-speed="auto" src="/photos/Eye.jpg" alt="" />
        </div>
        <div className="image_cont">
          <img
            data-speed="auto"
            src="/photos/Tree.jpg"
            media="(min-width: 1500px)"
            alt=""
          />
        </div>
        <div className="image_cont">
          <img data-speed="auto" src="/photos/Stand.jpg" alt="" />
        </div>
        <div className="image_cont">
          <img data-speed="auto" src="/photos/Cliff.jpg" alt="" />
        </div>
      </section>
      <div className="spacer"></div>
      <div className="spacer"></div>
      <div className="spacer"></div>

      <Footer />
    </main>
  );
};

export default ImagesPage;
