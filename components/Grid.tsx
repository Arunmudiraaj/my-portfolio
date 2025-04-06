"use client"
import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { lichessUrl, lichessUserName } from "@/data";

interface Player {
  user?: {
    name: string;
  };
  result?: string;
}

interface GameData {
  id: string;
  speed: string;
  winner?: string;
  opening?: {
    name: string;
  };
  players: {
    white?: Player;
    black?: Player;
  };
}

interface Game {
  id: string;
  link: string;
  opponent: string;
  result: string;
  opening: string;
}

const PIECES = {
  WHITE: "white",
  BLACK: "black",
}
const RESULT = {
  WIN: "Win",
  LOSS: "Loss",
}
const UNKNOWN = "Unknown"

export const Spinner = ({ className }: { className?: string }) => {
  return <div className={`w-12 h-12 border-4 border-gray-300 dark:border-gray-600 border-t-transparent dark:border-t-white rounded-full animate-spin ${className}`}></div>
}

const Grid = () => {

  const [chessGames, setChessGames] = useState<Game[]>([]);
  const [chessGamesLoading, setChessGamesLoading] = useState<boolean>(true);
  const gridItemStyles = `min-h-[300px] border-gray-500 relative overflow-hidden rounded-3xl border border-slate-700`

  const fetchChessGames = async () => {
    try {

      const username = lichessUserName
      const url = lichessUrl(username);
      const response = await axios.get(url, { headers: { Accept: "application/x-ndjson" }, });

      const textData = response.data;
      const games: GameData[] = textData
        ?.trim()
        ?.split("\n")
        ?.map((line: string) => JSON.parse(line) as GameData) || [];

      const recentGames: Game[] = games.map((game) => {
        const whitePlayer = game.players.white?.user?.name || UNKNOWN
        const blackPlayer = game.players.black?.user?.name || UNKNOWN
        const isWhite = whitePlayer.toLowerCase() === username;
        const opponent = isWhite ? blackPlayer : whitePlayer;
        const result = isWhite ? (game?.winner === PIECES.WHITE ? RESULT.WIN : RESULT.LOSS) : game?.winner === PIECES.BLACK ? RESULT.WIN : RESULT.LOSS;

        return {
          id: game.id,
          link: `https://lichess.org/${game.id}`,
          opponent,
          result,
          opening: game.opening?.name || "Unknown Opening",
        };
      });

      setChessGames(recentGames);
    } catch (error) {
      console.error("Error fetching Lichess games:", error);
    } finally {
      setChessGamesLoading(false);
    }
  };

  useEffect(() => {
    fetchChessGames();
  }, []);

  return (
    <section id='knowMoreAboutMe' className="pt-20">
      <h1 className="heading">
        Know More
        <span className="text-purple-light dark:text-purple-dark"> About Me</span>
      </h1>
      <div className='grid grid-cols-6 gap-4 lg:gap-8 mx-auto py-20'>
        {/* Chess */}
        <div className={`${gridItemStyles} col-span-6 lg:col-span-4 p-5 lg:p-10`}>
          <div className={`font-sans text-lg lg:text-3xl font-bold`}>
            Beyond Code: <span className="text-purple-light dark:text-purple-dark">Chess</span> ♟️
          </div>
          <p className={`font-sans text-neutral-700 dark:text-neutral-300 text-sm mt-1`}>
            When I&apos;m not coding, I&apos;m making moves on the chessboard. These games are fetched <strong>live</strong> from my recent Lichess matches. Check out my latest battles:
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
              <img
                src="/nature.jpg"
                alt="Beautiful Nature Scene"
                className="brightness-75 w-full h-full object-cover"
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
            <img
              src="/drawing.jpg"
              alt="Sketchbook and pencil"
              className="absolute hover:scale-105 duration-200  w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-4">
              <h2 className="text-white text-lg font-semibold">🎨 Sketching & Doodling</h2>
              <p className="text-gray-300 text-sm">When I&apos;m not coding, I love to sketch and bring ideas to life on paper.</p>
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
                &quot;Coding is the closest thing we have to superpowers.&quot;
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