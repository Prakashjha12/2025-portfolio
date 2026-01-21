import React, { Suspense, lazy } from "react";

import Hero from "./components/Hero";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import CardNav from "./components/CardNav";
import ClickSpark from "./components/ClickSpark";
import { FireworksBackground } from "./components/animate-ui/components/backgrounds/fireworks";
import { SmoothCursor } from "./components/ui/smooth-cursor";
import { Toaster } from "sonner";
import { href } from "react-router-dom";

const Projects = lazy(() => import("./components/Projects"));
const Cards = lazy(() => import("./components/Bento"));
const Form = lazy(() => import("./components/Form"));
const Footer = lazy(() => import("./components/Footer"));

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export const App = () => {
  const items = [
    {
      label: "About Me",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        {
          label: "My Journey",
          ariaLabel: "Learn about my developer journey",
          href: "#about",
        },
        {
          label: "Skills",
          ariaLabel: "Explore my tech stack and expertise",
          href: "#skills",
        },
      ],
    },
    {
      label: "Projects",
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        {
          label: "Featured Work",
          ariaLabel: "View my featured projects",
          // href: "projects",
        },
        {
          label: "Case Studies",
          ariaLabel: "Read detailed case studies",
          url: "#case-studies",
        },
      ],
    },
    {
      label: "Contact",
      bgColor: "#271E37",
      textColor: "#fff",
      links: [
        {
          label: "Email",
          ariaLabel: "Send me an email",
          href: "mailto:hello@prakashjha.com",
        },
        {
          label: "GitHub",
          ariaLabel: "Visit my GitHub profile",
          href: "https://github.com/Prakashjha12",
        },
        {
          label: "LinkedIn",
          ariaLabel: "Connect with me on LinkedIn",
          href: "https://www.linkedin.com/in/itscoderthisside/",
        },
        {
          label: "Blogs",
          ariaLabel: "Read the Blogs here",
          href: "https://blogs.prakashjha.com/",
        },
      ],
    },
  ];
  return (
    <div>
      <SmoothCursor />
      <div className="fixed inset-0 -z-10">
        <FireworksBackground
          color={"silver"}
          population={0.05}
          fireworkSpeed={2}
        />
      </div>
      <ClickSpark
        sparkColor="black"
        sparkSize={20}
        sparkRadius={25}
        sparkCount={10}
        duration={200}
      >
        <CardNav
          items={items}
          baseColor="#fff"
          menuColor="#000"
          buttonBgColor="#111"
          buttonTextColor="#fff"
          ease="power1.out"
        />

        <Hero />
        <Suspense fallback={<div className="min-h-screen"></div>}>
          <Projects />
          <Cards />
          <Form />
          <Footer />
        </Suspense>
        <Toaster position="bottom-right" />
      </ClickSpark>
    </div>
  );
};
