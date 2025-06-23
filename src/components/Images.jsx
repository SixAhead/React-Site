import React from 'react';

const ImagesPage = () => {
  return (
    <main className="images">
      <section className="image-grid container">
        <picture className="image_cont">
          <source
            srcSet="/photos/Shelter.jpg"
            media="(min-width: 1500px)"
          />
          <source
            srcSet="https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTY0NDMzNTU3OA&ixlib=rb-1.2.1&q=85&w=1000"
            media="(min-width: 700px)"
          />
          <img
            data-speed="auto"
            className=""
             src="/photos/Eye.jpg"
             alt=""
          />
        </picture>
        <div className="image_cont">
          <img
            data-speed="auto"
             src="/photos/Road.jpg"
             alt=""
          />
        </div>
        <div className="image_cont">
          <img
            data-speed="auto"
             src="/photos/Eye.jpg"
             alt=""
          />
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
          <img
            data-speed="auto"
             src="/photos/Stand.jpg"
             alt=""
          />
        </div>
        <div className="image_cont">
          <img
            data-speed="auto"
            src="/photos/Cliff.jpg"
            alt=""
          />
        </div>
      </section>
      <div className="spacer"></div>
    </main>
  );
};

export default ImagesPage;
