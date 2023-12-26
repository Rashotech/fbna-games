import React, { useState, useEffect, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { getAllGames } from "./services/games";
import { publicRoutes } from "./routes";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    getGames();
  }, []);

  const getGames = async () => {
    try {
      const games = await getAllGames();
      console.log("games", games);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <React.StrictMode>
        <Suspense>
          <BrowserRouter>
            <Routes>
              {publicRoutes.map(page => {
                const { id, path, Component } = page;
                return (
                  <Route key={id} exact path={path} element={<Component />} />
                );
              })}
            </Routes>
          </BrowserRouter>
        </Suspense>
      </React.StrictMode>
    </>
  );
}

export default App;
