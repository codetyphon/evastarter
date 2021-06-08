import { GameObject } from "@eva/eva.js";
import { SpriteAnimation } from "@eva/plugin-renderer-sprite-animation";
import Dino from "../components/dino";
import { Event, EventSystem, HIT_AREA_TYPE } from "@eva/plugin-renderer-event"
import { Physics, PhysicsType } from "@eva/plugin-matterjs";
export default function createPlayer() {
  const player = new GameObject("dino", {
    size: { width: 47, height: 50 },
    origin: { x: 0.5, y: 0.5 },
    position: {
      x: 50,
      y: 300,
    },
    anchor: {
      x: 0,
      y: 0,
    },
  });

  const frame = player.addComponent(
    new SpriteAnimation({
      resource: "dino",
      speed: 100,
    })
  );

  player.addComponent(Dino);

  // const evt = player.addComponent(new Event());
  // evt.on("tap", () => {
  //   frame.stop();
  // });

  frame.play();

  const physics = player.addComponent(
    new Physics({
      type: PhysicsType.RECTANGLE,
      bodyOptions: {
        isStatic: false, // Whether the object is still, any force acting on the object in a static state will not produce any effect
        restitution: 0,
        frictionAir: 1,
        friction: 0,
        frictionStatic: 0,
        force: {
          x: 0,
          y: 0,
        },
        stopRotation: false, // default false, usually do not need to be set
      },
    })
  );

  physics.on('collisionStart', (body, gameObject1, gameObject2) => {
    // body is the target
    console.log('hit', body)
    if (body._name == 'floor') {
      frame.play();
    }
  });

  return player;
}
