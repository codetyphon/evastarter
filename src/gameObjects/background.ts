import { GameObject } from '@eva/eva.js';
import { TilingSprite } from '@eva/plugin-renderer-tiling-sprite';
import Move from '../components/move';
export default function createBackground() {
  const bg = new GameObject("bg", {
    size: { width: 600, height:400 },
  });

  bg.addComponent(
    new TilingSprite({
      resource: "bg",
      tileScale: { x: 2, y: 2 },
      tilePosition: { x: -10, y: 0 },
    })
  );

  bg.addComponent(new Move());
  return bg;
}
