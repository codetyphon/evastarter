import { Component } from "@eva/eva.js";
import { Sprite } from "@eva/renderer-adapter";

export default class CatGo extends Component {
  gameObject: any;
  static componentName = "CatGo";
  //   init(obj: any) {
  //     Object.assign(this, obj);
  //   }
  constructor() {
    super();
  }
  update() {
    console.log((this.gameObject.getComponent(Sprite).position.x -= 1));
  }
}
