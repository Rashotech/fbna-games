import {
  Home,
  Games,
  GameDetails,
  Members,
  LeadershipBoard,
  SearchResults,
} from "../pages";

export const publicRoutes = [
  { id: "Home", path: "/", Component: Home },
  { id: "Games", path: "/games", Component: Games },
  { id: "GameDetails", path: "/games/:id", Component: GameDetails },
  { id: "Members", path: "/members", Component: Members },
  { id: "leaderboard", path: "/leaderboard", Component: LeadershipBoard },
  { id: "search", path: "/search", Component: SearchResults },
];
