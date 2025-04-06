import React from "react";
import { skills } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

const Skills = () => {
  const subHeading = `font-bold flex lg:text-xl md:text-xs text-sm text-white ml-3`
  const movingCardsContainer = 'py-2 mt-6 rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden'

  return (
    <section id="skills" className="py-20">
      <h1 className="heading">
        My
        <span className="text-purple-light dark:text-purple-dark"> Toolbox</span>
      </h1>
      <div className="flex flex-col items-center max-lg:mt-10">
        <div
          className={movingCardsContainer}
        >
          <p className={subHeading}>Front End</p>
          <InfiniteMovingCards
            items={skills.frontend}
            direction="right"
            speed="normal"
          />
        </div>
        <div
          className={movingCardsContainer}
        >
          <p className={subHeading}>Back End And Database</p>
          <InfiniteMovingCards
            items={skills.backend}
            direction="left"
            speed="normal"
          />
        </div>
        <div
          className={movingCardsContainer}
        >
          <p className={subHeading}>Miscellaneous</p>
          <InfiniteMovingCards
            items={skills.miscellaneous}
            direction="right"
            speed="fast"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;