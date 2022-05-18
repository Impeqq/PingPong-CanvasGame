import { Text } from "react-konva";
import { BOARD_WIDTH, OFFSET_X, OFFSET_Y } from "../../App";

export const Controls = ({ speed, handleChangeSpeed }: any) => {
  return (
    <>
      <Text
        x={OFFSET_X + 50}
        y={OFFSET_Y + 600}
        text="Левый игрок"
        fontSize={25}
      />
      <Text
        x={OFFSET_X + 50}
        y={OFFSET_Y + 630}
        text="W - Вверх"
        fontSize={25}
      />
      <Text
        x={OFFSET_X + 50}
        y={OFFSET_Y + 660}
        text="S - Вниз"
        fontSize={25}
      />
      <Text
        x={OFFSET_X + BOARD_WIDTH / 2}
        y={OFFSET_Y + 600}
        text={`Скорость: ${speed}`}
        fontSize={25}
      />
      <Text
        x={OFFSET_X + BOARD_WIDTH / 2 + 130}
        y={OFFSET_Y + 640}
        text={`+`}
        fontSize={30}
        onClick={() => handleChangeSpeed("+")}
      />
      <Text
        x={OFFSET_X + BOARD_WIDTH / 2}
        y={OFFSET_Y + 640}
        text={`-`}
        fontSize={30}
        onClick={() => handleChangeSpeed("-")}
      />
      <Text
        x={OFFSET_X + BOARD_WIDTH - 110}
        y={OFFSET_Y + 600}
        text="Правый игрок"
        fontSize={25}
      />
      <Text
        x={OFFSET_X + BOARD_WIDTH - 110}
        y={OFFSET_Y + 630}
        text="[ - Вверх"
        fontSize={25}
      />
      <Text
        x={OFFSET_X + BOARD_WIDTH - 110}
        y={OFFSET_Y + 660}
        text="' - Вниз"
        fontSize={25}
      />
    </>
  );
};
