export default function canMouseEat(direction, game) {
  if (game.length < 1) {
    return false;
  }

  const N_LENGTH = game.length;
  const M_LENGTH = game[0].length;
  let mouseLocation;

  for (let i = 0; i < N_LENGTH; i++) {
    for (let j = 0; j < M_LENGTH; j++) {
      if (game[i][j] === "m") {
        mouseLocation = [i, j];
        break;
      }
    }
    if (mouseLocation) {
      break;
    }
  }
  let i = mouseLocation[0];
  let j = mouseLocation[1];
  if (direction === "up" && i - 1 >= 0) {
    if (game[i - 1][j] === "*") {
      return true;
    }
  }
  if (direction === "down" && i + 1 <= N_LENGTH - 1) {
    if (game[i + 1][j] === "*") {
      return true;
    }
  }
  if (direction === "left" && j - 1 >= 0) {
    if (game[i][j - 1] === "*") {
      return true;
    }
  }
  if (direction === "right" && j + 1 <= M_LENGTH - 1) {
    if (game[i][j + 1] === "*") {
      return true;
    }
  }
  return false;
}
const room = [
  [" ", " ", " "],
  [" ", " ", "m"],
  [" ", " ", "*"],
];

canMouseEat("up", room); // false
canMouseEat("down", room); // true
canMouseEat("right", room); // false
canMouseEat("left", room); // false

const room2 = [
  ["*", " ", " ", " "],
  [" ", "m", "*", " "],
  [" ", " ", " ", " "],
  [" ", " ", " ", "*"],
];

canMouseEat("up", room2); // false
canMouseEat("down", room2); // false
canMouseEat("right", room2); // true
canMouseEat("left", room2); // false
