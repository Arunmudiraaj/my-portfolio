import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa'

const Hero = () => {
  return (
    <div className='relative'>
      <Spotlight
        className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
        fill="white"
      />
      <Spotlight
        className="top-10 left-full h-[80vh] w-[50vw]"
        fill="purple"
      />
      <Spotlight
        className="-top-28 left-80 h-[80vh] w-[50vw]"
        fill="blue"
      />
      <div className="h-[100vh] w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.08] bg-grid-black/[0.08] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

        <div className='flex justify-center relative my-20 z-10 '>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <h2 className='uppercase text-xs text-center tracking-widest text-blue-100 max-w-100'>Crafting Scalable & Interactive Web Experiences </h2>
            <TextGenerateEffect
              className='text-center text-[40px] md:text-5xl lg:text-6xl'
              words="Transforming Concepts into Seamless User Experiences"
            />
            <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
              Hi, I'm <span className='text-purple'>Arun</span>, a Full Stack Developer from India, passionate about building user-centric solutions.
            </p>
            <div className='flex gap-4'>
              <MagicButton
                title='Download CV'
                icon={<FaLocationArrow />}
                position='right'
              />
              <MagicButton
                title='Show my work'
                icon={<FaLocationArrow />}
                position='right'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero