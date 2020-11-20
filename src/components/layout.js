import PropTypes from "prop-types";
import React from "react";
import ContactHeader from "./ContactHeader";
import IntroBackground from "./IntroBackground";
import AboutLeisureWorld from "./AboutLeisureWorld";
import Features from "./Features";
import Banner from "./Banner";
import Footer from "./Footer";
// import FourPanel from "./FourPanel";
// import TestFourPanel from "./testFourPanel"

console.log(ContactHeader);
console.log(Header);
console.log(IntroBackground);
console.log(AboutLeisureWorld);
console.log(Features);
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
      <Banner secondLine="Interested in a showing?" />
      <Footer />

      {/* <TestFourPanel/> */}
      {/* <Banner firstLine="Do you like what you see?" secondLine="Contact us anytime!"/> */}
      {/* <FourPanel /> */}
      {/*
      <main className="flex-1 w-full max-w-7xl px-4 py-8 mx-auto md:px-8 md:py-16">
        {children}
      </main> */}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
