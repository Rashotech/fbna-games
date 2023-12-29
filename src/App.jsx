import React, {  Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { publicRoutes } from "./routes";

function App() {
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
