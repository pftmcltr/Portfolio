import React from "react";
import rodeo from "../images/rodeo-footer.svg";

const Footer = () => {
  return (
    <div className="bg-orange">
      <img src={rodeo} className="h-48 ml-auto bg-orange" alt="rodeo" />
      <div className="h-44 bg-red-dark -mt-12 flex justify-center items-center">
        <div className="1/3">Social media</div>
        <p className="1/3 text-orange text-2xl font-bold rounded-full border-4 flex justify-center items-center border-orange h-24 w-24">
          2021
        </p>
        <div className="1/3">Copywriter</div>
      </div>
    </div>
  );
};

export default Footer;
