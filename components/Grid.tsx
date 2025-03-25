"use client"
import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import Image from 'next/image';
import { motion } from "framer-motion";

export interface ProcessedGame {
  id: string;
  link: string;
  opponent: string;
  result: string;
  opening: string;
  timeControl: string;
}

export const Spinner = ({ className }: { className?: string }) => {
  return <div className={`w-12 h-12 border-4 border-gray-300 dark:border-gray-600 border-t-transparent dark:border-t-white rounded-full animate-spin ${className}`}></div>
}

const Grid = () => {

  const [chessGames, setChessGames] = useState<ProcessedGame[]>([]);
  const [chessGamesLoading, setChessGamesLoading] = useState<boolean>(true);
  const gridItemStyles = `min-h-[300px] border-gray-500 relative overflow-hidden rounded-3xl border border-slate-700`

  useEffect(() => {
    const fetchChessGames = async () => {
      try {
        const { data } = await axios.get<ProcessedGame[]>("/api/lichess");
        setChessGames(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching Lichess games:", error);
      } finally {
        setChessGamesLoading(false);
      }
    };

    fetchChessGames();
  }, []);

  return (
    <section id='knowMoreAboutMe' className="pt-20">
      <h1 className="heading">
        Know More
        <span className="text-purple"> About Me</span>
      </h1>
      <div className='grid grid-cols-6 gap-4 lg:gap-8 mx-auto py-20'>
        {/* Chess */}
        <div className={`${gridItemStyles} col-span-6 lg:col-span-4 p-5 lg:p-10`}>
          <div className={`font-sans text-lg lg:text-3xl font-bold`}>
            Beyond Code: <span className="text-purple">Chess</span> ♟️
          </div>
          <p className={`font-sans text-neutral-700 dark:text-neutral-300 text-sm mt-1`}>
            When I'm not coding, I'm making moves on the chessboard. These games are fetched <strong>live</strong> from my recent Lichess matches. Check out my latest battles:
          </p>
          {chessGamesLoading ? (
            <Spinner className="mx-auto mt-12" />
          ) : (!chessGames || chessGames.length === 0) ? (
            <p className="text-gray-500 text-center mt-12">No recent games found.</p>
          ) : (
            <ul className="space-y-4 mt-5">
              {chessGames.map((game) => (
                <li key={game.id} className="">
                  <a href={game.link} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:underline">
                    <span className="font-semibold">{game.opponent}</span> ({game.result}) - {game.opening}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
        {/* Nature grid item */}
        <div className={`${gridItemStyles} p-0 col-span-6 lg:col-span-2`}>
          <div className="relative w-full h-full overflow-hidden shadow-lg group">
            <div className="absolute inset-0 transition-transform duration-200 group-hover:scale-105">
              <Image
                src="/nature.jpg"
                alt="Beautiful Nature Scene"
                layout="fill"
                objectFit="cover"
                className="brightness-75"
              />
            </div>
            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
              <h2 className="text-2xl md:text-3xl font-bold drop-shadow-lg">
                🌿 Nature Enthusiast
              </h2>
              <p className="mt-2 text-sm md:text-base drop-shadow-md">
                Mountains, waterfalls, and forests – nothing beats the peace of nature.
              </p>
            </div>
          </div>
        </div>
        {/* Drawing grid item */}
        <div className={`${gridItemStyles} col-span-6 lg:col-span-3`} >
          <div className="relative w-full h-full overflow-hidden shadow-lg">
            <Image
              src="/drawing.jpg"
              alt="Sketchbook and pencil"
              layout="fill"
              objectFit="cover"
              className="absolute hover:scale-105 duration-200"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4">
              <h2 className="text-white text-lg font-semibold">🎨 Sketching & Doodling</h2>
              <p className="text-gray-300 text-sm">When I'm not coding, I love to sketch and bring ideas to life on paper.</p>
            </div>
          </div>
        </div>
        {/* Quote grid item */}
        <div className={`${gridItemStyles} col-span-6 lg:col-span-3 p-5 lg:p-10`}>
          <div className="relative w-full h-full bg-gray-900 text-white flex items-center justify-center p-6 rounded-2xl shadow-lg overflow-hidden hover:scale-105 duration-200">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <p className="text-2xl font-semibold italic max-w-2xl mx-auto">
                "Coding is the closest thing we have to superpowers."
              </p>
              <span className="block mt-3 text-lg text-gray-400">— Drew Houston</span>
            </motion.div>
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
            <span className="absolute bottom-4 left-4 text-sm text-gray-400">My Favorite Quote</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Grid