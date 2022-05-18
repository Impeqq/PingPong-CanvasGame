import { useEffect, useState } from "react";
import { Rect } from "react-konva";
import {
  BOARD_COLOR,
  HEIGHT,
  OFFSET_X,
  OFFSET_Y,
  PLAYER_COLOR,
  PONG_COLOR,
  SIZE,
  WIDTH,
} from "../../App";

export const Map = ({ hero, pong, enemy }: any) => {
  const [map, setMap] = useState<any>([]);

  useEffect(() => {
    setMap([]);
    for (let i = 1; i <= WIDTH; i++) {
      for (let j = 1; j <= HEIGHT; j++) {
        const isHero =
          (hero.x === i && hero.y === j) ||
          (hero.x === i && hero.y === j - 1) ||
          (hero.x === i && hero.y === j + 1);
        const isEnemy =
          (enemy.x === i && enemy.y === j) ||
          (enemy.x === i && enemy.y === j - 1) ||
          (enemy.x === i && enemy.y === j + 1);

        const isPong = pong.x === i && pong.y === j;
        setMap((map: any) => [
          ...map,
          {
            x: OFFSET_X + SIZE * i,
            y: OFFSET_Y + SIZE * j,
            width: SIZE,
            height: SIZE,
            color: isPong
              ? PONG_COLOR
              : isHero || isEnemy
              ? PLAYER_COLOR
              : BOARD_COLOR,
          },
        ]);
      }
    }
  }, [hero, pong, enemy]);

  return map?.map((item: any) => (
    <Rect
      x={item.x}
      y={item.y}
      width={item.width}
      height={item.height}
      fill={item.color}
      shadowBlur={2}
    />
  ));
};
