import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getAllGames } from "./services/games";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    getGames()
  }, []);

  const getGames = async () => {
    try {
      const games =  await getAllGames();
      console.log("games", games)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="flex flex-row justify-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>First Bank Academy Games</h1>
      <div className="text-3xl">Coming Soon!!!</div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
