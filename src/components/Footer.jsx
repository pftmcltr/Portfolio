import React from "react";
import rodeo from "../images/rodeo-footer.svg";

const Footer = () => {
  return (
    <div className="bg-orange">
      <img src={rodeo} className="h-48 ml-auto bg-orange" />
      <div className="h-44 bg-red-dark -mt-12 "></div>
    </div>
  );
};

export default Footer;