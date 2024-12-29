import { ICategoryButton } from "@/app/(protected)/(main)/choose-category/components/category-button/categoryButton.type";
import { IChatBox } from "@/app/(protected)/(main)/play/components/chat-box/chatBox.type";
import { IWinner } from "@/app/(protected)/(winner)/winner/components/winner-bars-group/winnerBarsGroup.type";
import { IRankCard } from "@/components/rank-board/rank-card/rankCard.type";

export const categoryButtons: ICategoryButton[] = [
  { imgSrc: "/choose-category/games_1 1.png", title: "Video Games" },
  { imgSrc: "/choose-category/games_1 1.png", title: "Video Games" },
  { imgSrc: "/choose-category/games_1 1.png", title: "Video Games" },
  { imgSrc: "/choose-category/games_1 1.png", title: "Video Games" },
  { imgSrc: "/choose-category/games_1 1.png", title: "Video Games" },
  { imgSrc: "/choose-category/games_1 1.png", title: "Video Games" },
  { imgSrc: "/choose-category/games_1 1.png", title: "Video Games" },
  { imgSrc: "/choose-category/games_1 1.png", title: "Video Games" },
];

export const guessChats: IChatBox["chats"] = [
  { user: "AsepBakwan", color: "4ADE80", message: "Jaguar" },
  { user: "AsepBakwan", color: "000000", message: "Jaguar" },
  { user: "BudiWibu", color: "000000", message: "Jaguar" },
  { user: "Samsul", color: "000000", message: "Lion" },
  { user: "BudiWibu", color: "000000", message: "Jaguar" },
  { user: "Samsul", color: "000000", message: "Lion" },
  { user: "BudiWibu", color: "000000", message: "Jaguar" },
  { user: "Samsul", color: "000000", message: "Lion" },
];

export const ranks: IRankCard[] = [
  {
    id: "1",
    color: "FF4B91",
    photo: "/dummy/pic.png",
    point: 1324,
    userName: "LinaCacing",
  },
  {
    id: "2",
    color: "FF7676",
    photo: "/dummy/pic.png",
    point: 1324,
    userName: "LinaCacing",
  },
  {
    id: "3",
    color: "FFCD4B",
    photo: "/dummy/pic.png",
    point: 1324,
    userName: "LinaCacing",
  },
  {
    id: "4",
    color: "FF4B91",
    photo: "/dummy/pic.png",
    point: 1324,
    userName: "LinaCacing",
  },
  {
    id: "5",
    color: "FF7676",
    photo: "/dummy/pic.png",
    point: 1324,
    userName: "LinaCacing",
  },
  {
    id: "6",
    color: "FFCD4B",
    photo: "/dummy/pic.png",
    point: 1324,
    userName: "LinaCacing",
  },
  {
    id: "7",
    color: "FF4B91",
    photo: "/dummy/pic.png",
    point: 1324,
    userName: "LinaCacing",
  },
  {
    id: "8",
    color: "FF7676",
    photo: "/dummy/pic.png",
    point: 1324,
    userName: "LinaCacing",
  },
  {
    id: "9",
    color: "FFCD4B",
    photo: "/dummy/pic.png",
    point: 1324,
    userName: "LinaCacing",
  },
];

export const winners: IWinner[] = [
  {
    id: "1",
    photo: "/dummy/pic.png",
    points: 1324,
    rank: 1,
    userName: "Bambang Subandi",
  },
  {
    id: "2",
    photo: "/dummy/pic.png",
    points: 782,
    rank: 2,
    userName: "Bebek Goreng",
  },
  {
    id: "3",
    photo: "/dummy/pic.png",
    points: 123,
    rank: 3,
    userName: "LinaCacing",
  },
];
