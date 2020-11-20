import React from "react";
import Button from "./Button"

export default function IntroBackground() {
  return (
    <section className="mb-24">
      <div className="hero-image">
        <div className="hero-text w-screen">
          <h1 className="text-4xl md:text-6xl leading-8">Discover</h1>
          <h1 className="text-4xl md:text-6xl ">Leisure World</h1>
          {/* <button>Learn More</button> */}
          {/* <Button text="Learn More" color="bg-white" overallAddClass="hero-text button"/> */}
        <Button text="Learn More" color="bg-white" textColor="text-black" overallAddClass="hero-text button mt-20"/>
        </div>
      </div>
    </section>
  );
}
