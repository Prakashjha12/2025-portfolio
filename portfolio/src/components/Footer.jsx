import React from "react";
import CurvedLoop from "./CurvedLoop";

const Footer = () => {
  return (
    <div>
      <CurvedLoop
        marqueeText="Who want Footer in 2025? if you want then E-Mail me BTW Footer are boaring"
        speed={3}
        curveAmount={300}
        interactive={true}
      />
    </div>
  );
};

export default Footer;
