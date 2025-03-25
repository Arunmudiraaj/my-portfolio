"use client";
import { FaGithub, FaLocationArrow } from "react-icons/fa6";
import { projects } from "@/data";
import { BackgroundGradient } from "./ui/BackgroundGradient";
import Image from "next/image";

const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small selection of{" "}
        <span className="text-purple">recent projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((item) => (
          <div key={item.id}>
            <BackgroundGradient className="rounded-[22px] max-w-lg p-4 sm:p-10 bg-white dark:bg-zinc-900">
              {/* Project Image */}
              <img
                src={item.img}
                alt={item.title}
                height="400"
                width="400"
                className="object-fill mx-auto w-full max-h-[200px] rounded-[22px]"
              />
              {/* Title */}
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200 font-semibold">
                {item.title}
              </p>
              {/* Description */}
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {item.des}
              </p>
              {/* Tech Icons */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image className="w-8 h-8 invert" src={icon} width={40} height={40} alt="icon" />
                    </div>
                  ))}

                </div>
                {/* Buttons Section */}
                <div className="flex gap-2 mt-3">
                  {item.liveLink && <a
                    href={item.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 text-white px-2 py-1 rounded-lg transition hover:bg-gray-700"
                  >
                    <span>Live Demo</span>
                    <FaLocationArrow />
                  </a>}
                  {item.githubLink && <a
                    href={item.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gray-800 text-white px-2 py-1 rounded-lg transition hover:bg-gray-700"
                  >
                    <span>GitHub</span>
                    <FaGithub />
                  </a>}
                </div>
              </div>
            </BackgroundGradient>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;