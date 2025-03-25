import React from "react";
import { Timeline } from "./Timeline";

const WorkExperience: React.FC = () => {

  const data = [
    {
      title: "Full Stack Developer - Techpearl",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Worked as a <strong>Full Stack Developer</strong> at <strong>Techpearl Software Pvt Ltd</strong> (2023 - 2025), contributing to the development of <strong>Work Order Scheduling</strong> and <strong>Image Annotation Tool</strong> for <strong>ConMet</strong>, optimizing manufacturing processes and enhancing data labeling efficiency.
          </p>
          <div className="mb-4">
            <p className="text-purple font-semibold text-sm md:text-base mb-2">
              🚀 Work Order Scheduling System
            </p>
            <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <li>Optimized <strong>CNC machine operations</strong>, reducing idle time by <strong>25%</strong> and increasing production efficiency by <strong>15%</strong>.</li>
              <li>Developed an algorithm to <strong>schedule work orders</strong> based on priority, ensuring efficient machine utilization.</li>
              <li>Integrated <strong>SAP & MES APIs</strong> to automate work order imports and scheduling.</li>
              <li>Implemented <strong>secure authentication</strong> with JWT and built a <strong>role-based user management system</strong> for admins.</li>
              <li>Built a <strong>responsive UI</strong> using reusable React components, improving development efficiency.</li>
            </ul>
          </div>
          <div>
            <p className="text-purple font-semibold text-sm md:text-base mb-2">
              🎯 Image Annotation Tool
            </p>
            <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <li>Developed an <strong>image annotation tool</strong> allowing users to draw bounding boxes and obtain coordinates, streamlining object detection and data labeling.</li>
              <li>Rebuilt the complete UI with a new design, leading to a <strong>30% reduction in loading time</strong> and improved user experience.</li>
              <li>Added advanced features like <strong>grouping bounding boxes, PDF annotation, and exporting data as CSV/XML</strong>.</li>
              <li>Utilized <strong>Git & BitBucket</strong> for version control and efficient code collaboration.</li>
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
            Completed a <strong>Frontend Developer Trainee</strong> program at <strong>Sharpener</strong> (Jan 2023 – Aug 2023), mastering <strong>Data Structures & Algorithms (DSA)</strong>, <strong>React.js</strong>, and the <strong>Software Development Lifecycle (SDLC)</strong>.
          </p>
          <div className="mb-4">
            <p className="text-purple font-semibold text-sm md:text-base mb-2">
              🚀 LinkedIn Clone
            </p>
            <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <li>Developed a <strong>full-fledged LinkedIn clone</strong> with interactive features like <strong>media posting, comments, Google login, and infinite scroll</strong>.</li>
            </ul>
          </div>
          <div>
            <p className="text-purple font-semibold text-sm md:text-base mb-2">
              🎯 Hackathon Project - Mailbox Client
            </p>
            <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <li>Built a <strong>Mailbox Client</strong> application that enables users to <strong>send emails</strong> to other registered users.</li>
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
            Continuously exploring new technologies and building projects to enhance my <strong>Full Stack Development</strong> skills.
          </p>
          <div className="mb-4">
            <p className="text-purple font-semibold text-sm md:text-base mb-2">
              🚀 Projects Built
            </p>
            <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <li>Developed a <strong>Snake Game</strong> using only <strong>HTML, CSS, and JavaScript</strong>, focusing on fundamental game logic.</li>
              <li>Designed a **Flipkart Clone UI**, replicating a modern e-commerce interface.</li>
              <li>Built an <strong>Expense Tracker</strong> with features like dynamic expense categories and local storage persistence.</li>
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
            Completed my <strong>Bachelor of Technology (B.Tech) in Electronics</strong> from <strong>St. Peter’s Engineering College</strong> (2018 – 2022).
          </p>
          <div className="mb-4">
            <p className="text-purple font-semibold text-sm md:text-base mb-2">
              🎓 Key Learnings
            </p>
            <ul className="list-disc pl-5 text-neutral-700 dark:text-neutral-300 text-xs md:text-sm">
              <li>Gained a strong foundation in <strong>Computer Science fundamentals</strong>, including <strong>Data Structures, Algorithms, and Object-Oriented Programming</strong>.</li>
              <li>Developed a keen interest in <strong>Software Development</strong>, leading me to self-learn <strong>Web Development</strong> alongside my coursework.</li>
            </ul>
          </div>
        </div>
      ),
    }
  ];

  return (
    <section id="workExperience" className="py-20">
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