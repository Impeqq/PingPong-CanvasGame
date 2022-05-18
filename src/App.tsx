import { useState } from "react";
import { Layer, Stage, Text } from "react-konva";
import { Map } from "./components";
import { Controls } from "./components/controls/controls";
import { getRandom } from "./helpers/getRandom";
import { useEnemy } from "./hooks/useEnemy";
import { useHero } from "./hooks/useHero";
import { useIsLose } from "./hooks/useIsLose";
import { usePong } from "./hooks/usePong";

export const WIDTH = 20;
export const HEIGHT = 10;
export const SIZE = 50;
export const SPEED = 10;
export const BOARD_WIDTH = WIDTH * SIZE;
export const OFFSET_Y = 0;
export const OFFSET_X = window.innerWidth / 2 - BOARD_WIDTH / 2 - SIZE;
export const PONG_COLOR = "#004616";
export const PLAYER_COLOR = "#00770c";
export const BOARD_COLOR = "#00b120";

export enum KeyCodes {
  UP = 119,
  DOWN = 115,
  KEYUP = 91,
  KEYDOWN = 39,
}

const App = () => {
  const [speed, setSpeed] = useState(SPEED);
  const [hero, setHero] = useHero();
  const [enemy, setEnemy] = useEnemy();
  const [pong, setPong, setXDirection] = usePong(hero, enemy, speed);
  const isLose = useIsLose(hero, pong);

  const handleChangeSpeed = (operation: "-" | "+") => {
    if (operation === "-") {
      setSpeed((speed) => speed - 1);
    } else {
      setSpeed((speed) => speed + 1);
    }
  };

  return BOARD_WIDTH >= window.innerWidth ? (
    <h1>Зайдите с компьютера</h1>
  ) : (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>
        {isLose && (
          <Text
            x={OFFSET_X + BOARD_WIDTH / 2}
            y={OFFSET_Y + 20}
            onClick={() => {
              setPong({ x: 2, y: getRandom(2, HEIGHT - 1) });
              setHero({ x: 1, y: getRandom(2, HEIGHT - 1) });
              setEnemy({ x: WIDTH, y: getRandom(2, HEIGHT - 1) });
              setXDirection("right");
            }}
            text="Начать заново"
            fontSize={20}
          />
        )}
        <Map hero={hero} enemy={enemy} pong={pong} isLose={isLose} />
        <Controls speed={speed} handleChangeSpeed={handleChangeSpeed} />
      </Layer>
    </Stage>
  );
};

export default App;
