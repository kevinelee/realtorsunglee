import React from "react";

export default function FourPanel() {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col lg:flex-row">
        <img
          className="w-1/2 h-96 object-contain"
          src="https://lh3.googleusercontent.com/proxy/IMfI3-Nf2v3yTxJB0ahHx-1fvuoyW3cPZqHcB-3I26MxoQR4wheGPWQ0G505VQ9KtGZXuyD-XT-JxDkQp28ZDy2GY2eau8-ByLb6Eup_R14oriNbUgDqxk4Lc4ohDL4E"
        ></img>
        <div className="w-1/2 ">THIS AND THAT</div>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-1/2"></div>
        <img
          className="lg:w-1/2"
          src="https://17tsfx1l50ce12z9pg3v60nc-wpengine.netdna-ssl.com/wp-content/uploads/2018/09/iStock-543994630.jpg"
        ></img>
      </div>
    </section>
  );
}
