import React from "react";
import CurvedLoop from "./CurvedLoop";
import StickyFooter from "./ui/StickyFooter";
const Footer = () => {
  return (
    <div className="relative w-full h-[60vh] mt-28 ">
      <div className="relative z-10 ">
        <CurvedLoop
          marqueeText="Footer in 2025? 💀
If you still want this ancient feature, email me 📩
I won’t stop you 😩

— And guess what?
20 people ACTUALLY emailed me asking for a footer.
So here it is.
Hope you’re happy now. 😒🤣"
          speed={4}
          curveAmount={10}
          interactive={true}
        />
      </div>
      <StickyFooter />
    </div>
  );
};

export default Footer;
