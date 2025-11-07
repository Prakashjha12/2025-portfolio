import React from "react"
import { WarpBackground } from "@/components/ui/warp-background"

const Preview: React.FC = () => {
  return (
    <div className="w-full bg-[#bc9c9c] items-center justify-center h-full overflow-auto">
      {/* add relative positioning to the main conent */}
      <div className="relative w-dvw h-dvh z-10 text-2xl md:text-7xl font-bold uppercase flex justify-center items-center bg-white dark:bg-black text-white whitespace-pre">
         <WarpBackground>
         <div className="w-60 h-60">
         <p className="text-black text-center text-sm">Scroll Down</p>
         {/* <p>This is a component that creates a warp background effect.</p> */}
           </div>
</WarpBackground>
      </div>

      {/* Sticky footer. The only important thing here is the z-index, the sticky position and the bottom value */}
      <div className="sticky z-0 bottom-0 left-0 w-full h-80 dark:bg-black dark:text-white bg-white flex justify-center items-center">
        <div className="relative overflow-hidden w-full h-full flex justify-end px-12 text-right items-start py-12 text-black dark:text-white">
          <div className="flex flex-row space-x-12 sm:pace-x-16  md:space-x-24 text-sm sm:text-lg md:text-xl">
            <ul>
              <li>
                <a href="#home" className="hover:underline cursor-pointer">
                  Home
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:underline cursor-pointer">
                  Projects
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="https://github.com/Prakashjha12" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">
                  Github
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/___prakashjha___/" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://x.com/itsadeveloper" target="_blank" rel="noopener noreferrer" className="hover:underline cursor-pointer">
                  X (Twitter)
                </a>
              </li>
            </ul>
          </div>
        <h2 className="absolute bottom-0 left-0 translate-y-1/3 sm:text-[192px] text-[80px] font-calendas bg-gradient-to-t from-black to-white bg-clip-text text-transparent ">
  Prakash Jha
</h2>
        </div>
      </div>
    </div>
  )
}

export default Preview
