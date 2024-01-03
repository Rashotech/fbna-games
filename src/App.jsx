import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { publicRoutes } from "./routes";
import Layout from "./components/Layout";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <Suspense>
        <BrowserRouter>
          <Routes>
            <Route element={<Layout />}>
              {publicRoutes.map((page) => {
                const { id, path, Component } = page;
                return (
                  <Route key={id} exact path={path} element={<Component />} />
                );
              })}
            </Route>
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
