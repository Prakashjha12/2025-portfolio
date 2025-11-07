import React from "react";

import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import CardNav from "./components/CardNav";
import Cards from "./components/Bento";
import Form from "./components/Form";
import ClickSpark from "./components/ClickSpark";
import Footer from "./components/Footer";
import { FireworksBackground } from "./components/animate-ui/components/backgrounds/fireworks";
import { SmoothCursor } from "./components/ui/smooth-cursor";
import { Toaster } from "sonner";

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
          url: "#about",
        },
        {
          label: "Skills",
          ariaLabel: "Explore my tech stack and expertise",
          url: "#skills",
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
          url: "#projects",
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
          url: "mailto:prakash@example.com",
        },
        {
          label: "GitHub",
          ariaLabel: "Visit my GitHub profile",
          url: "https://github.com/Prakashjha12",
        },
        {
          label: "LinkedIn",
          ariaLabel: "Connect with me on LinkedIn",
          url: "https://linkedin.com/in/prakashjha",
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
          population={0.1}
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
        <Projects />
        <Cards />
        <Form />
        <Footer />
        <Toaster position="bottom-right" />
      </ClickSpark>
    </div>
  );
};
