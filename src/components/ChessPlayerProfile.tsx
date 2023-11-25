import { useEffect, useState } from 'react';
import ChessWebAPI, { PlayerProfileResponse } from "chess-web-api"

interface PlayerProfile {
    // Define the structure of player profile
    username: string;
  }
export default function ChessPlayerProfile() {
    const [playerProfile, setPlayerProfile] = useState<PlayerProfileResponse | null>(null);
    const [error, setError] = useState<Error | null>(null);
  
    useEffect(() => {
      const chessAPI = new ChessWebAPI();
  
      //// this is me!!!!
      chessAPI
        .getPlayer('skyspace8')
        .then(
          (response: {body: PlayerProfile}) => {
            setPlayerProfile(response.body);
          },
          (err: Error) => {
            setError(err);
          }
        );
    }, []);
    return (
        <div>
         <h2>Player Profile</h2>
            {error ? (
        <p>Error: {error.message}</p>
         ) : playerProfile ? (
        <pre>{JSON.stringify(playerProfile, null, 2)}</pre>
         ) : (
        <p>Loading player profile...</p>
      )}
    </div>
    )
}
