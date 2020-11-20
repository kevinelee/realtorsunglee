import React from "react";
import Location from "./SVG/Location";
import Email from "./SVG/Email";
import Phone from "./SVG/Phone";

export default function ContactHeader() {
  return (
    <section>
      <footer className="bg-gray-900">
        <div className="max-w-screen-xl mx-auto md:flex md:items-center md:justify-end px-4 xl:px-0 py-2">
          <div className="flex ml-4">
            <Email color="gray" />
            <a
              className="text-gray-500 ml-1 hover:text-gray-300"
              href="mailto: realtorsunglee@yahoo.com"
            >
              realtorsunglee@yahoo.com
            </a>
          </div>
          <div className="flex ml-4">
            <Phone color="gray" />
            <a
              className="text-gray-500 ml-1 hover:text-gray-300"
              href="tel:562221745"
            >
              562-221-7485
            </a>
          </div>
          <div className="flex ml-4">
            <Location color="gray" />
            <p className="text-gray-500 ml-1 hover:text-gray-300">
              Seal Beach, CA
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
