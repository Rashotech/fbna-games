import { Home, Games, GameDetails, Members } from "../pages/index";

export const publicRoutes = [
  { id: "Home", path: "/", Component: Home },
  { id: "Games", path: "/games", Component: Games },
  { id: "GameDetails", path: "/games/:id", Component: GameDetails },
  { id: "Members", path: "/members", Component: Members },
];
