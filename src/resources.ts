import { RESOURCE_TYPE } from "@eva/eva.js";
export default [
  {
    name: "bg",
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: "png",
        url: "../assets/bg.png",
      },
    },
    preload: true,
  },
  {
    name: "floor",
    type: RESOURCE_TYPE.IMAGE,
    src: {
      image: {
        type: "png",
        url: "../assets/floor.png",
      },
    },
    preload: true,
  },
  {
    name: "dino",
    type: RESOURCE_TYPE.SPRITE_ANIMATION,
    src: {
      image: {
        type: "png",
        url: "../assets/dino.png",
      },
      json: {
        type: "json",
        url: "../assets/dino.json",
      },
    },
    preload: true,
  },
];
