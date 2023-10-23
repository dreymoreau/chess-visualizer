import { useEffect, useState } from 'react';
import ChessWebAPI, { PlayerProfileResponse } from "chess-web-api"
import NavBar from './components/NavBar';

function ChessPlayerProfile() {
  const [playerProfile, setPlayerProfile] = useState<PlayerProfileResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const chessAPI = new ChessWebAPI();

    chessAPI
      .getPlayer('skyspace8888')
      .then(
        (response) => {
          setPlayerProfile(response.body);
        },
        (err) => {
          setError(err);
        }
      );
  }, []);

  return (
    <div>
      <NavBar />
      <h2>Player Profile</h2>
      {error ? (
        <p>Error: {error.message}</p>
      ) : playerProfile ? (
        <pre>{JSON.stringify(playerProfile, null, 2)}</pre>
      ) : (
        <p>Loading player profile...</p>
      )}
    </div>
  );
}

export default ChessPlayerProfile;