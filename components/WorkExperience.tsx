import React from "react";
import { Timeline } from "./Timeline";

const WorkExperience: React.FC = () => {

  const data = [
    {
      title: "Full Stack Developer",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            <strong>Techpearl Software Pvt Ltd (2023 - Present)</strong> – Spearheaded the development of <strong>Work Order Scheduling</strong> and <strong>Image Annotation Tool</strong> for <strong>ConMet</strong>, a key client, optimizing manufacturing and data labeling workflows.
          </p>
          <div className="mb-4">
            <p className="text-purple font-semibold text-sm md:text-base mb-2">
              🚀 Work Order Scheduling
            </p>
            <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <li>Boosted <strong>production efficiency by 15%</strong>, reducing CNC idle time by <strong>25%</strong> through optimized scheduling.</li>
              <li>Developed a <strong>rule-based scheduling algorithm</strong> to enhance work order processing and machine utilization.</li>
              <li>Automated workflows via <strong>SAP & MES API integration</strong>, streamlining data flow and scheduling.</li>

            </ul>
          </div>
          <div>
            <p className="text-purple font-semibold text-sm md:text-base mb-2">
              🎯 Image Annotation Tool
            </p>
            <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <li>Developed an <strong>intuitive annotation tool</strong> improving object detection workflows.</li>
              <li>Revamped UI, cutting load times by <strong>30%</strong> and enhancing UX.</li>
              <li>Added <strong>advanced annotations</strong>: grouping, PDF markup, CSV/XML export.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Frontend Developer Trainee",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            <strong>Sharpener (Jan-Aug 2023)</strong> – Built scalable React apps while mastering <strong>DSA</strong>, and modern frontend tech.
          </p>
          <div className="mb-4">
            <p className="text-purple font-semibold text-sm md:text-base mb-2">
              🚀 LinkedIn Clone
            </p>
            <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <li>Developed key features: <strong>Google login, media posts, comments, infinite scroll</strong>.</li>
            </ul>
          </div>
          <div>
            <p className="text-purple font-semibold text-sm md:text-base mb-2">
              🎯 Hackathon Project - Mailbox Client
            </p>
            <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <li>Built a <strong>Mailbox Client</strong> enabling secure in-app email communication.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "Personal Projects",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Passionate about <strong>Full Stack Development</strong>, constantly building projects.
          </p>
          <div className="mb-4">
            <p className="text-purple font-semibold text-sm md:text-base mb-2">
              🚀 Projects Built
            </p>
            <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <li><strong>Snake Game</strong> (Pure HTML, CSS, JS) - Focused on core game logic.</li>
              <li><strong>Flipkart UI Clone</strong> - Modern e-commerce interface.</li>
              <li><strong>Expense Tracker</strong> - Categorized tracking with local storage.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      title: "B.Tech",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            <strong>St. Peter’s Engineering College (2018-2022)</strong> – Graduated in <strong>Electronics</strong>, self-taught Web Development alongside coursework.
          </p>
          <div className="mb-4">
            <p className="text-purple font-semibold text-sm md:text-base mb-2">
              🎓 Key Learnings
            </p>
            <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <li>Deep understanding of <strong>DSA, OOP, and Computer Science fundamentals</strong>.</li>
            </ul>
          </div>
        </div>
      ),
    },
  ];



  return (
    <section id="workExperience" className="pt-20">
      <h1 className="heading">
        My
        <span className="text-purple"> Work Experience</span>
      </h1>
      <div
        className="flex flex-col items-center max-lg:mt-10 overflow-y-auto relative"
      >
        <Timeline data={data} />
      </div>
    </section>
  );
};

export default WorkExperience;