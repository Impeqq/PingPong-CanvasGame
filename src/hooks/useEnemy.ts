import { useEffect, useState } from "react";
import { HEIGHT, KeyCodes, WIDTH } from "../App";
import { getRandom } from "../helpers/getRandom";

export const useEnemy = () => {
  const [enemy, setEnemy] = useState<any>({
    x: WIDTH,
    y: getRandom(2, HEIGHT - 1),
  });

  useEffect(() => {
    const listener = ({ keyCode }: any) => {
      switch (keyCode) {
        case KeyCodes.KEYUP:
          setEnemy((enemy: any) => ({
            ...enemy,
            y: enemy.y !== 2 ? enemy.y - 1 : enemy.y,
          }));
          break;
        case KeyCodes.KEYDOWN:
          setEnemy((enemy: any) => ({
            ...enemy,
            y: enemy.y !== HEIGHT - 1 ? enemy.y + 1 : enemy.y,
          }));
          break;
        default:
          break;
      }
    };
    document.addEventListener("keypress", listener);

    return () => document.removeEventListener("keypress", listener);
  });

  return [enemy, setEnemy];
};
