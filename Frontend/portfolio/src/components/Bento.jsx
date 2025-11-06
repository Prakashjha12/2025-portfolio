import React, { useEffect } from "react";
import MagicBento from "./MagicBento";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/src/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Cards = () => {
  useEffect(() => {
    gsap.set("#text", { opacity: 0, y: 80 }); // 👈 start hidden & below

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#text",
        start: "top 80%",
        end: "bottom center",
      },
    });

    tl.to("#text", {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power4.out",
    });
  }, []);

  return (
    <div
      id="bentoo"
      className=" mt-18 h-full w-full flex items-center justify-center flex-col"
    >
      <h3 id="text" className=" text-4xl  font-[roboto] uppercase opacity-0">
        experiences
      </h3>
      <div id="bento,about" className="h-full w-[60vw] mt-16  col-auto ">
        <MagicBento
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={400}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </div>
    </div>
  );
};

export default Cards;
