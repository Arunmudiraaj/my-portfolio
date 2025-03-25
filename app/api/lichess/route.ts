import { NextResponse } from "next/server";
import axios from "axios";
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

export async function GET() {
  try {
    const username = lichessUserName
    const url = lichessUrl(username);

    const response = await axios.get(url, {
      headers: { Accept: "application/x-ndjson" },
    });

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

    return NextResponse.json(recentGames);
  } catch (error) {
    console.error("Error fetching Lichess games:", error);
    return NextResponse.json({ error: "Failed to fetch Lichess games" }, { status: 500 });
  }
}
