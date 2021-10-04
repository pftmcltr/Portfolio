import React from "react";
import rodeo from "../images/rodeo-footer.svg";

const Footer = () => {
  return (
    <div className="bg-orange">
      <img src={rodeo} className="h-48 ml-auto bg-orange" alt="rodeo" />
      <div className="h-44 bg-red-dark -mt-12 flex justify-center items-center">
        <p className="text-orange text-3xl font-extrabold">2021 Portfolio</p>
      </div>
    </div>
  );
};

export default Footer;
