import PropTypes from "prop-types";
import React from "react";
import ContactHeader from "./ContactHeader";
import IntroBackground from "./IntroBackground";
import AboutLeisureWorld from "./AboutLeisureWorld";
import Features from "./Features";
// import Banner from "./Banner"
import BetterBanner from "./BetterBanner"
import Footer from "./Footer"
// import FourPanel from "./FourPanel";
// import TestFourPanel from "./testFourPanel"

console.log(ContactHeader);
console.log(Header);
console.log(IntroBackground);
console.log(AboutLeisureWorld);
console.log(Features);
console.log(BetterBanner);
console.log(Footer);


import Header from "./header";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen font-sans text-gray-900">
      <ContactHeader />
      <Header />
      <IntroBackground />
      <AboutLeisureWorld />
      <Features />
      <BetterBanner/>
      <Footer/>
      
      {/* <TestFourPanel/> */}
      {/* <Banner firstLine="Do you like what you see?" secondLine="Contact us anytime!"/> */}
      {/* <FourPanel /> */}
{/* 
      <main className="flex-1 w-full max-w-7xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main> */}

      {/* <footer className="bg-blue-700">
        <nav className="flex justify-between max-w-4xl p-4 mx-auto text-sm md:p-8">
          <p className="text-white">
            Created by{` `}
            <a
              className="font-bold no-underline"
              href="https://bryant.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Taylor Bryant
            </a>
          </p>

          <p>
            <a
              className="font-bold text-white no-underline"
              href="https://github.com/taylorbryant/gatsby-starter-tailwind"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
        </nav>
      </footer> */}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
