import { useState, SetStateAction } from 'react';
import ChessWebAPI, { PlayerProfileResponse } from 'chess-web-api';
import DataVisualization from './DataVisualization';

interface PlayerProfile {
  // Define the structure of player profile
  username: string;
}

export default function Profile() {
  // to output player profile info
  const [playerProfile, setPlayerProfile] = useState<PlayerProfile | null>(null)
  // error handling, for example of user does not exist
  const [error, setError]: [Error | null, React.Dispatch<SetStateAction<Error | null>>] = useState(null)
  // state to take in the username in the input field
  const [inputUsername, setInputUsername] = useState<string>('')

  const FetchPlayerProfile = async (username: string, setPlayerProfile: React.Dispatch<React.SetStateAction<PlayerProfileResponse | null>>, setError: React.Dispatch<React.SetStateAction<Error | null>>) => {
    const chessAPI = new ChessWebAPI();
  
    try {
      const response = await chessAPI.getPlayer(username);
      setPlayerProfile(response.body);
    } catch (err) {
      setError(err);
    }
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    FetchPlayerProfile(inputUsername, setPlayerProfile, setError);
  };

  return (
    <div>
      <h2>Player Profile</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputUsername}
          onChange={(e) => setInputUsername(e.target.value)}
          placeholder="Enter a username"
        />
        <button type="submit">Submit</button>
        <DataVisualization data={data}/>
      </form>
      {/* {error ? (
        <p>Error: {error.message}</p>
      ) : playerProfile ? (
        <pre>{JSON.stringify(playerProfile, null, 2)}</pre>
      ) : (
        <p>Enter a username to load player profile</p>
      )} */}
    </div>
  );
}