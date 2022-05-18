import { WIDTH } from "../App";

export const useIsLose = (hero: any, pong: any) => {
  const isLose = pong.x === 1 || pong.x === WIDTH;

  return isLose;
};
