import React from "react";
import Button from "./Button";

export default function BetterBanner() {
  return (
    <section className="h-72">
      <div className="banner-image">
        <div className="hero-text w-screen">
          <h1 className="text-4xl md:text-6xl leading-8">Discover</h1>
          <h1 className="text-4xl md:text-6xl ">Leisure World</h1>

          <Button color="bg-indigo-600 text-black" text="Hit me up nigga" overallAddClass="hero-text button" />
        </div>
      </div>
    </section>
  );
}