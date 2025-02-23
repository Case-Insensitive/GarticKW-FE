import { TListInstructions } from "../type/list-instructions-type";

export const LIST_INSTRUCTIONS: TListInstructions = [
  {
    title: "AUTHENTICATION",
    description: "Login using Google. Your game points will be saved",
    imagePath: "instructions.png",
    id: 0,
  },
  {
    title: "SELECT GAME ROOM",
    description:
      "Public room to play with random people, or create a room and play with your friends",
    imagePath: "select_game_room.png",
    id: 1,
  },
  {
    title: "SETTINGS RULE",
    description:
      "Determine the word theme, room type, and target score to win.",
    imagePath: "settings_rule.png",
    id: 2,
  },
  {
    title: "DRAW & GUESS",
    description:
      "Guess the result of the picture of the person or image according to your secret word",
    imagePath: "draw_and_guess.png",
    id: 3,
  },
  {
    title: "BE A WINNER",
    description:
      "Each correct guess earns points. The player with the highest score will be the winner.",
    imagePath: "winner.png",
    id: 4,
  },
];
