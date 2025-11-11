import React, { useEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import Folder from "./Folder";
import { Button } from "@/components/ui/button";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Badge } from "@/components/ui/badge";
import { BorderBeam } from "@/components/ui/border-beam";

const Hero = () => {
  useEffect(() => {
    document.fonts.ready.then(() => {
      const tl = gsap.timeline();
      let split = SplitText.create("#hero-text h1", { type: "chars" });

      gsap.from(split.chars, {
        duration: 0.3,
        y: 20,
        autoAlpha: 0,
        stagger: 0.04,
        ease: "sine.out",
      });

      tl.to("#green", {
        opacity: 1,
        duration: 1,
        ease: "power1.out",
        yoyo: true,
        repeat: -1,
      });
      tl.to("#arrow", {
        y: 20,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
        duration: 0.9,
      });

      return () => tl.kill();
    });
  }, []);

  return (
    <div id="home">
      <div className="main min-h-[95vh]  flex flex-col gap-5 items-center justify-center ">
        <div id="green-dot" className="flex items-center gap-2 ">
          <div
            id="green"
            className="h-2 w-2 bg-green-500 rounded-2xl  opacity-0"
          ></div>
          <div>
            <Badge variant="outline">Actively Seeking Job Opportunities</Badge>
          </div>
        </div>
        <div id="hero-text">
          <h1 className="text-slate-900 mb-10 text-3xl sm:text-4xl md:text-6xl mt-6 font-[roboto2] tracking-tighter dark:text-white text-center">
            Full-stack Developer
          </h1>
          <p
            id="hero-text-para"
            className="text-slate-600 text-sm sm:text-xs md:text-base max-w-2xl leading-6 font-[roboto2] tracking-wider dark:text-white text-center mb-10"
          >
            Building elegant digital experiences with modern web technologies.
            Specialized in React, Node.js, and scalable cloud architecture.
          </p>
        </div>
        <div className="flex   sm:gap-1  text-2xl ">
          <div id="cta" className="  flex gap-5">
            <a href="#form">
              {" "}
              <Button variant="outline">Get in Touch</Button>
            </a>
            <a href="#project-section">
              <Button variant="secondary">View Project</Button>
            </a>
          </div>
          <div
            style={{
              height: "10px",
              position: "relative",
              marginTop: "-23px",
            }}
          >
            {/* Pass three paper items: GitHub, LinkedIn, and X (Twitter) */}
            <Folder
              size={0.7}
              color="gray"
              className="custom-folder"
              items={[
                // Paper 1 - GitHub
                <a
                  href="https://github.com/Prakashjha12"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="flex items-center justify-center h-full w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="currentColor"
                  >
                    <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.38-3.88-1.38-.53-1.35-1.3-1.71-1.3-1.71-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.18.92-.26 1.9-.39 2.88-.39.98 0 1.96.13 2.88.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.42.36.8 1.08.8 2.18 0 1.57-.01 2.84-.01 3.23 0 .31.21.68.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
                  </svg>
                </a>,

                // Paper 2 - LinkedIn
                <a
                  href="https://www.linkedin.com/in/itscoderthisside/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="flex items-center justify-center h-full w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="currentColor"
                  >
                    <path d="M4.98 3.5C3.88 3.5 3 4.37 3 5.47c0 1.11.88 1.99 1.98 1.99h.02C6.08 7.46 6.96 6.58 6.96 5.47 6.96 4.37 6.08 3.5 4.98 3.5zM3.5 8.98h3v11.02h-3V8.98zM9.5 8.98h2.88v1.5h.04c.4-.75 1.38-1.5 2.84-1.5 3.04 0 3.6 2 3.6 4.6v6.4h-3v-5.67c0-1.35-.03-3.08-1.88-3.08-1.88 0-2.17 1.46-2.17 2.98v5.77h-3V8.98z" />
                  </svg>
                </a>,

                // Paper 3 - X (Twitter)
                <a
                  href="https://x.com/itsadeveloper"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="flex items-center justify-center h-full w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="currentColor"
                  >
                    <path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.26 4.26 0 0 0 1.86-2.36 8.48 8.48 0 0 1-2.7 1.03 4.24 4.24 0 0 0-7.22 3.87A12.02 12.02 0 0 1 3.16 4.6a4.24 4.24 0 0 0 1.31 5.66c-.66-.02-1.28-.2-1.82-.5v.05c0 2.06 1.47 3.78 3.42 4.17-.53.14-1.09.17-1.66.06.47 1.47 1.82 2.54 3.42 2.57A8.51 8.51 0 0 1 2 19.54a12.04 12.04 0 0 0 6.52 1.92c7.83 0 12.12-6.48 12.12-12.1l-.01-.55A8.67 8.67 0 0 0 22.46 6z" />
                  </svg>
                </a>,
              ]}
            />
            <p id="arrow" className="text-center">
              <i className="ri-arrow-up-line"></i>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
