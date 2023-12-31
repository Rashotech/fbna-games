import {
  Home,
  Games,
  GameDetails,
  Members,
  LeadershipBoard,
} from "../pages";

export const publicRoutes = [
  { id: "Home", path: "/", Component: Home },
  { id: "Games", path: "/games", Component: Games },
  { id: "GameDetails", path: "/games/:id", Component: GameDetails },
  { id: "Members", path: "/members", Component: Members },
  { id: "leaderboard", path: "/leaderboard", Component: LeadershipBoard },
];
