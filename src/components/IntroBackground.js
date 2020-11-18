import React from "react";
// import Hero from "./z-Hero";

export default function IntroBackground() {
  return (
    <section className="h-screen m-0">
      {/* <div className="">
        <img
          className="object-cover absolute"
          style={{ maxHeight: "75vh", width: "100vw" }}
          src="https://www.gannett-cdn.com/presto/2020/08/05/PNDN/5eafa3eb-816f-440f-b135-51bf36599a20-Romanzo_Interior_0809.jpg"
        />
        <div className="">
          <Hero />
        </div>
      </div> */}

      <div className="hero-image">
        <div className="hero-text">
          <h1>I am John Doe</h1>
          <p>And Im a Photographer</p>
          <button>Hire me</button>
        </div>
      </div>
    </section>
  );
}
