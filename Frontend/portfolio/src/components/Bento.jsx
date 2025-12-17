import React, { useEffect } from "react";
import MagicBento from "./MagicBento";
import gsap from "gsap";
import SplitText from "gsap/src/SplitText";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import GooeyDemo from "./ui/gooey-svg-file";
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
      className="h-full w-full flex items-center justify-center  flex-col pr-20"
    >
      <h3
        id="text"
        className=" sm:mb-30 text-4xl  font-[roboto] uppercase opacity-0 "
      >
        experiences
      </h3>
      <div
        id="skills"
        className="w-full flex flex-col md:flex-row items-start justify-center gap-2"
      >
        <div
          id="bento,about"
          className="h-full w-full md:w-1/2 flex justify-center items-center "
        >
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
        <div
          id="about"
          className=" mb-20  h-full w-full md:w-1/2 flex justify-center   "
        >
          <GooeyDemo />
        </div>
      </div>
    </div>
  );
};

export default Cards;
