import { useEffect, useState } from "react";
import { HEIGHT, WIDTH } from "../App";
import { getRandom } from "../helpers/getRandom";

export const usePong = (hero: any, enemy: any, speed: any) => {
  const [pong, setPong] = useState<any>({ x: 2, y: getRandom(2, HEIGHT - 1) });
  const [xDirection, setXDirection] = useState<"left" | "right">("right");
  const [yDirection, setYDirection] = useState<"up" | "bottom">("bottom");

  const isHero =
    hero.x + 1 === pong.x &&
    (hero.y === pong.y || hero.y - 1 === pong.y || hero.y + 1 === pong.y);
  const isEnemy =
    enemy.x - 1 === pong.x &&
    (enemy.y === pong.y || enemy.y - 1 === pong.y || enemy.y + 1 === pong.y);

  useEffect(() => {
    isHero && console.log(isHero);
    isEnemy && console.log(isEnemy);
    const timeout = setTimeout(() => {
      if (isEnemy) setXDirection("left");
      if (isHero) setXDirection("right");

      if (pong.y === HEIGHT - 1) setYDirection("up");
      if (pong.y === 2) setYDirection("bottom");

      if (pong.x !== 1 && pong.x !== WIDTH) {
        setPong((pong: any) => ({
          ...pong,
          y: yDirection === "up" ? pong.y - 1 : pong.y + 1,
          x: isEnemy
            ? pong.x - 1
            : isHero
            ? pong.x + 1
            : xDirection === "right"
            ? pong.x + 1
            : pong.x - 1,
        }));
      }
    }, 1000 / speed);

    return () => clearTimeout(timeout);
  }, [pong]);

  return [pong, setPong, setXDirection];
};
