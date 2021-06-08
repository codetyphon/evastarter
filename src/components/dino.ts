import { Component } from "@eva/eva.js";
import { SpriteAnimation } from "@eva/plugin-renderer-sprite-animation";
// import { SpriteAnimation } from "@eva/plugin-renderer-sprite-animation";

export default class Dino extends Component {
  gameObject: any;
  static componentName = "Dino";
  //   init(obj: any) {
  //     Object.assign(this, obj);
  //   }
  constructor() {
    super();
  }
  update() {
    // this.gameObject.getComponent(SpriteAnimation).stop()
  }
  jump() {
    this.gameObject.getComponent(SpriteAnimation).stop();
    // console.log(this.gameObject.getComponent("Physics").bodyParams.bodyOptions.restitution=20)
    this.gameObject.getComponent("Physics").PhysicsEngine.world.gravity.y *= -1
    setTimeout(() => {
      this.gameObject.getComponent("Physics").PhysicsEngine.world.gravity.y *= -1
    }, 500)
  }
}
