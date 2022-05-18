import { useEffect, useState } from "react";
import { HEIGHT, KeyCodes } from "../App";
import { getRandom } from "../helpers/getRandom";

export const useHero = () => {
  const [hero, setHero] = useState<any>({ x: 1, y: getRandom(2, HEIGHT - 1) });

  useEffect(() => {
    const listener = ({ keyCode }: any) => {
      switch (keyCode) {
        case KeyCodes.UP:
          setHero((hero: any) => ({
            ...hero,
            y: hero.y !== 2 ? hero.y - 1 : hero.y,
          }));
          break;
        case KeyCodes.DOWN:
          setHero((hero: any) => ({
            ...hero,
            y: hero.y !== HEIGHT - 1 ? hero.y + 1 : hero.y,
          }));
          break;
        default:
          break;
      }
    };
    document.addEventListener("keypress", listener);

    return () => document.removeEventListener("keypress", listener);
  });

  return [hero, setHero];
};
