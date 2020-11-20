/* eslint react/prop-types: 0 */
import React from "react";
import Button from "./Button";

export default function Banner({firstLine,secondLine}) {
  return (
    <section className="h-72">
      <div className="banner-image">
        <div className="hero-text w-screen">
          <h1 className={`text-4xl md:text-6xl leading-8`}>{firstLine}</h1>
          <h1 className="text-4xl md:text-6xl ">{secondLine}</h1>

          <Button color="bg-indigo-600 text-white" text="Schedule a visit!" overallAddClass="hero-text button mt-12 md:mt-16" />
        </div>
      </div>
    </section>
  );
}
