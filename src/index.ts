import createBackground from "./gameObjects/background";
import createFloor from "./gameObjects/floor";
import resources from "./resources";

import { Game, GameObject, resource } from "@eva/eva.js";
import { RendererSystem } from "@eva/plugin-renderer";
import { ImgSystem } from "@eva/plugin-renderer-img";
import { EventSystem } from "@eva/plugin-renderer-event";
import {
  SpriteAnimation,
  SpriteAnimationSystem,
} from "@eva/plugin-renderer-sprite-animation";
import { RenderSystem } from "@eva/plugin-renderer-render";
import { TransitionSystem } from "@eva/plugin-transition";
import { GraphicsSystem } from "@eva/plugin-renderer-graphics";
import { TextSystem } from "@eva/plugin-renderer-text";
import { PhysicsSystem, Physics, PhysicsType } from "@eva/plugin-matterjs";

import {
  TilingSprite,
  TilingSpriteSystem,
} from "@eva/plugin-renderer-tiling-sprite";

import Move from "./components/move";
import CatGo from "./components/catgo";

import createPlayer from "./gameObjects/player";
import Dino from "./components/dino";

resource.addResource(resources);

const game = new Game({
  autoStart: true,
  frameRate: 70, // Compatible with Eva's own bug, the frame rate must be greater than 60
  systems: [
    new RendererSystem({
      canvas: document.querySelector("#canvas"),
      width: 600,
      height: 400,
      // antialias: true,
    }),
    new ImgSystem(),
    new TransitionSystem(),
    new SpriteAnimationSystem(),
    new RenderSystem(),
    new EventSystem(),
    new GraphicsSystem(),
    new TextSystem(),
    new GraphicsSystem(),
    new EventSystem(),
    new PhysicsSystem({
      resolution: window.devicePixelRatio / 2, // 保持RendererSystem的resolution一致
      isTest: true, // 是否开启调试模式
      element: document.getElementById("container"), // 调试模式下canvas节点的挂载点
      world: {
        gravity: {
          y: 15, // 重力
        },
      },
    }),
    new TilingSpriteSystem(),
  ],
});

// game.scene.transform.size.width = 600;
// game.scene.transform.size.height = 300;

const bg = createBackground()
const floor = createFloor()
const player = createPlayer();

game.scene.addChild(bg);
game.scene.addChild(floor);
game.scene.addChild(player);

// window.game = game;

document.addEventListener("click", () => {
  const dino: Dino = player.getComponent("Dino")
  dino.jump()
});


