import { FaLocationArrow } from "react-icons/fa6";
import { email, socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          <span className="text-purple">Contact</span> Me
        </h1>
        <div className="w-full py-14 px-6 text-center  text-white">
          <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white">💬 Let&apos;s Build Something Great!</h2>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base  mx-auto -mb-4">
            Have an idea? Let&apos;s make it happen. Reach out and let&apos;s create something amazing!
          </p>
          <a href={`mailto:${email}`}>
            <MagicButton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
      <div className="flex mt-10 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light mb-4 md:mb-0">
          Copyright © 2024 Arun A
        </p>
        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a key={info.id} href={info.href} target="_blank">
              <div
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;