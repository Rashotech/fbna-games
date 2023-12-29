import game1 from "./img/Frame1.png";
import game2 from "./img/Frame2.png";
import game3 from "./img/Frame3.png";
import game4 from "./img/Frame4.png";

import Medal1 from "../components/icons/medal1.svg";
import Medal2 from "../components/icons/medal2.svg";
import Medal3 from "../components/icons/medal3.svg";
import Medal4 from "../components/icons/medal4.svg";

export const images_arr = [
  {
    src: game1,
    alt: "fbng game1",
    id: "game1",
  },
  {
    src: game2,
    alt: "fbng game2",
    id: "game2",
  },
  {
    src: game3,
    alt: "fbng game3",
    id: "game3",
  },
  {
    src: game4,
    alt: "fbng game4",
    id: "game4",
  },
];

export const leader_data = [
  {
    id: "cohort 4",
    name: "cohort 4",
    position: 1,
    src: Medal1,
    points: 1200,
  },
  {
    id: "cohort 3",
    name: "cohort 3",
    position: 0,
    src: Medal2,
    points: 1000,
  },
  { id: "cohort 2", name: "cohort 2", position: 0, src: Medal3, points: 900 },
  { id: "cohort 1", name: "cohort 1", position: 0, src: Medal4, points: 700 },
];
