import React from "react";
import Button from "./Button";

export default function AboutLeisureWorld() {
  return (
    <section className="max-w-7xl mx-auto px-2 xl:px-0">
      {/* <div className="flex flex-col lg:flex-row">
        <img></img>
        <div>
          <p>VILLA OVERVIEW</p>
          <h1>About Leisure World</h1>
        </div>
      </div> */}
      {/* This example requires Tailwind CSS v2.0+ */}
      <div className="relative bg-gray-50">
        <div className="lg:relative">
          <div className="mx-auto max-w-7xl w-full text-center lg:text-left">
            <div className="lg:w-1/2 xl:pr-16">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                <span className="block xl:inline text-5xl">About </span>
                <br className="hidden lg:block" />
                <span className="block text-indigo-600 xl:inline">
                  Leisure World
                </span>
              </h1>
              <p className="mt-3 mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 ">
                Leisure World Seal Beach is a nationally recognized active
                senior community located in Seal Beach, California, where sunny
                days are cooled by ocean breezes. Spread over 542 park-like
                acres, LWSB offers co-ops and condos for resort style living for
                those 55 and over. We have all of the amenities of small town
                living while giving close freeway access to all of the
                entertainments and shops of Los Angeles and Orange County.
                <br />
                <br />
                The community has a 9-hole golf course, swimming facilities,
                fitness and exercise rooms, six clubhouses, free bus service,
                and a fully staffed 24 hour Security service. There are over 200
                clubs, movies, trips and abundant activities to keep you
                socially, mentally, and physically active. We are an oasis for
                senior looking for a busy and satisfying life.
              </p>

              {/* <div className="mt-10 flex justify-center lg:justify-start">
                <Button
                  color="bg-indigo-600"
                  hoverColor="bg-indigo-700"
                  text="Get Started"
                />
                <Button
                  color="text-indigo-600 bg-white"
                  hoverColor="bg-gray-50"
                  text="Live Demo"
                  overallAddClass="ml-3"
                />
              </div> */}
              <div className="flex">
                <Button
                  color="bg-indigo-600"
                  hoverColor="bg-indigo-700"
                  text="Get Started"
                />
                <Button
                  color="text-indigo-600 bg-white"
                  hoverColor="bg-gray-50"
                  text="Live Demo"
                  overallAddClass="ml-3"
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
            <img
              className="absolute inset-0 w-full h-full object-contain"
              src="https://18lsmk37oon62f1yj323x36x-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/Entrance-to-Leisure-World-Seal-Beach.jpg"
              alt="Leisure World"
            />
          </div>

          <div className="lg:hidden pt-16 lg:w-1/2 lg:h-full">
            <img
              className=" inset-0 w-full h-full object-contain"
              src="https://18lsmk37oon62f1yj323x36x-wpengine.netdna-ssl.com/wp-content/uploads/2020/06/Entrance-to-Leisure-World-Seal-Beach.jpg"
              alt="Leisure World"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
