import React from "react";
import Hero from "./Hero";

export default function IntroBackground() {
  return (
    <section>
      <img
        className="object-fill relative"
        style={{maxHeight:"75vh", width:"100vw"}}
        src="https://www.gannett-cdn.com/presto/2020/08/05/PNDN/5eafa3eb-816f-440f-b135-51bf36599a20-Romanzo_Interior_0809.jpg"
      />
      <Hero/>
    </section>
  );
}
