import React, { useEffect } from "react";
import gsap from "gsap";
import CardSwap, { Card } from "./CardSwap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/src/SplitText";
import LogoLoop from "./LogoLoop";
gsap.registerPlugin(ScrollTrigger);

const imageLogos = [
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
    alt: "HTML5",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
    alt: "GitHub",
    href: "https://github.com/",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
    alt: "Git",
    href: "https://git-scm.com/",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
    alt: "Express.js",
    href: "https://expressjs.com/",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    alt: "React.js",
    href: "https://react.dev/",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    alt: "Node.js",
    href: "https://nodejs.org/",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1024px-Amazon_Web_Services_Logo.svg.png",
    alt: "AWS",
    href: "https://aws.amazon.com/",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    alt: "Tailwind CSS",
    href: "https://tailwindcss.com/",
  },
  {
    src: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
    alt: "MySQL",
    href: "https://www.mysql.com/",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    alt: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    src: "https://vitejs.dev/logo.svg",
    alt: "Vite",
    href: "https://vitejs.dev/",
  },
];
const Projects = () => {
  useEffect(() => {
    document.fonts.ready.then(() => {
      let split = SplitText.create("#left h3", { type: "lines" });
      gsap.from(split.lines, {
        duration: 0.6,
        y: 20,
        autoAlpha: 0,
        stagger: 0.3,
        ease: "sine.out",
        scrollTrigger: {
          trigger: "#left",
          start: "top center",
        },
      });
    });
  });
  return (
    <div className="min-h-screen w-full overflow-hidden flex flex-col gap-8 px-2 sm:px-8 md:px-20">
      {/* Logo loop section */}
      <div className="w-full flex justify-center">
        <div
          className="w-full max-w-4xl"
          style={{
            marginBottom: "10px",
            height: "120px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <LogoLoop
            logos={imageLogos}
            speed={120}
            direction="left"
            logoHeight={32}
            gap={24}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#ffffff"
            ariaLabel="Technology partners"
          />
        </div>
      </div>
      <h4
        id="h4-pro"
        className="mb-10 text-3xl sm:text-4xl text-center uppercase font-[roboto]"
      >
        projects
      </h4>

      <div className="flex flex-col md:flex-row gap-8 w-full">
        {/* Project list */}
        <div id="left" className="relative flex-1">
          <div
            id="project-section"
            className="md:ml-20 mt-4 md:mt-44 text-2xl sm:text-4xl md:text-4xl font-[roboto2] leading-tight "
          >
            <h3>AI Player According to face </h3>
            <h3>E-commerce Website</h3>
            <h3>
              Chat Gpt clone{" "}
              <span className="text-sm opacity-70">Coming soon</span>
            </h3>
          </div>
        </div>

        {/* Card swapper */}
        <div id="right">
          <div
            className="w-full max-w-md"
            style={{ height: "400px", position: "relative" }}
          >
            <CardSwap
              cardDistance={60}
              verticalDistance={70}
              delay={5000}
              pauseOnHover={false}
            >
              <Card>
                <h3 className="text-white p-7 ">AI mood detector </h3>
                <p className="text-white text-2xl text-center">
                  Play song according to your mood
                </p>
                <img src="/assets/image 1 mood detector.png" alt="image 1" />
              </Card>
              <Card>
                <h3 className="text-white p-7 ">MKBHD E-commerce Website</h3>
                <p className=" text-white text-2xl text-center">
                  For a hackthone I built a MKBHD(Youtuber) Merchandise Website
                </p>
                <img src="/assets/MKBHD.png" alt="image 2" />
              </Card>
              <Card>
                <h3 className="text-white p-7 ">Building Clone of Chat GPT</h3>
                <p className=" text-white text-4xl sm:text-6xl text-center">
                  Coming soon
                </p>
                {/* <img src="" alt="" /> */}
              </Card>
            </CardSwap>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
