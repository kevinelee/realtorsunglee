/* eslint react/prop-types: 0 */
import React from "react";

export default function Button({
  color,
  hoverColor,
  text,
  href,
  addClass,
  overallAddClass,
  textColor = "text-white"
}) {
  return (
    <div>
      <div className="mt-10 flex justify-center ">
        <div className={`rounded-md shadow cursor-pointer ${overallAddClass}`}>
          <a
            href={href}
            className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md ${textColor} ${color} hover:${hoverColor} md:py-4 md:text-lg md:px-10 ${addClass}`}
          >
            {text}
          </a>
        </div>
      </div>
    </div>
  );
}
