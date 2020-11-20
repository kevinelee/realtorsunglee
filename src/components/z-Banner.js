/* eslint react/prop-types: 0 */

import React from "react";
import Button from "./Button";

export default function Banner({ firstLine, secondLine }) {
  return (
    <section className="relative w-screen">
      <img className="w-screen object-cover h-64 bg-opacity-25" src="https://previews.123rf.com/images/vska/vska1207/vska120700073/14567315-city-landscape-real-estate-background-banner.jpg"/>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">{firstLine}</span>
            <span className="block">{secondLine}</span>
          </h2>

          <Button
            text="Schedule A Visit"
            color="bg-indigo-600"
            hoverColor="bg-indigo-700"
          />
        </div>
      </div>
    </section>
  );
}
