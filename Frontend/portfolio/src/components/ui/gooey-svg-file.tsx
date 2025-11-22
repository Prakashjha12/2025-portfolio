import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"


import { Button } from "@/components/ui/button"
import GooeySvgFilter from "@/components/fancy/filter/gooey-svg-filter"

const TAB_CONTENT = [
  {
    title: "2025",
    files: [
      "mastering-nextjs-15.md",
      "ai-driven-applications.tsx",
      "scalable-cloud-architecture.pdf",
      "contributing-to-open-source.md",
    ],
  },
  {
    title: "2024",
    files: [
      "building-achar-aangan.ts",
      "advanced-react-patterns.md",
      "backend-optimization-nodejs.js",
      "integrating-payment-gateways.json",
    ],
  },
  {
    title: "2023",
    files: [
      "mastering-javascript-es6.js",
      "first-hackathon-experience.md",
      "learning-mongodb-aggregation.json",
      "responsive-ui-design.css",
    ],
  },
  {
    title: "2022",
    files: [
      "hello-world.html",
      "css-grid-and-flexbox.css",
      "starting-web-development.md",
      "my-first-portfolio.html",
    ],
  },
  {
    title: "2021",
    files: [
      "exploring-tech-landscape.md",
      "problem-solving-basics.py",
      "algorithm-challenges.cpp",
      "tech-community-engagement.md",
    ],
  },
]

export default function GooeyDemo() {
  const [activeTab, setActiveTab] = useState(0)
  const [isGooeyEnabled, setIsGooeyEnabled] = useState(true)
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)

  return (
    <div className="relative w-full h-full flex justify-center  font-calendas md:text-base text-xs sm:text-sm bg-white dark:bg-black">
      <GooeySvgFilter
        id="gooey-filter"
        strength={isMobile ? 8 : 15}
      />
      <div className="w-full md:w-full relative ">
        <div
          className="absolute inset-0"
          style={{ filter: isGooeyEnabled ? "url(#gooey-filter)" : "none" }}
        >
          <div className="flex w-full">
            {TAB_CONTENT.map((_, index) => (
              <div key={index} className="relative flex-1 h-8 md:h-12  ">
                {activeTab === index && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0  bg-[#efefef] dark:bg-[#2a2a2a] "
                    transition={{
                      type: "spring",
                      bounce: 0.0,
                      duration: isSafari ? 0 : 0.4,
                    }}
                  />
                )}
              </div>
            ))}
          </div>
          {/* Content panel */}
          <div className="w-full h-[200px] sm:h-[350px] md:h-[420px] bg-[#efefef] dark:bg-[#2a2a2a] overflow-hidden text-muted-foreground">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeTab}
                initial={{
                  opacity: 0,
                  y: 50,
                  filter: "blur(10px)",
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }}
                exit={{
                  opacity: 0,
                  y: -50,
                  filter: "blur(10px)",
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                className="p-8 md:p-12"
              >
                <div className="space-y-2 mt-4 sm:mt-8 md:mt-8 ">
                  <ul className="">
                    {TAB_CONTENT[activeTab].files.map((file, index) => (
                      <li
                        key={file}
                        className="border-b border-muted-foreground/50 pt-2 pb-1 text-black dark:text-white"
                      >
                        {file}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Interactive text overlay, no filter */}
        <div className="relative flex w-full ">
          {TAB_CONTENT.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className="flex-1 h-8 md:h-12"
            >
              <span
                className={`
                w-full h-full flex items-center justify-center
                ${activeTab === index ? "text-black" : "text-muted-foreground"}
              `}
              >
                {tab.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export { GooeyDemo };
