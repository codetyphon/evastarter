import { GameObject } from '@eva/eva.js';
import { Physics, PhysicsType } from '@eva/plugin-matterjs';
import { Img } from '@eva/plugin-renderer-img';
export default function createFloor() {
    const floor = new GameObject("floor", {
        size: { width: 600, height: 5 },
        origin: { x: 0, y: 0 },
        position: {
            x: 0,
            y: 395
        },
        anchor: {
            x: 0,
            y: 0
        }
    });

    floor.addComponent(
        new Img({
            resource: 'floor'
        })
    );

    floor.addComponent(new Physics({
        type: PhysicsType.RECTANGLE,
        // body:{
        // options:{

        //}
        //}
        bodyOptions: {
            isStatic: true, // Whether the object is still, any force acting on the object in a static state will not produce any effect
            restitution: 0,
            frictionAir: 0,
            friction: 0,
            frictionStatic: 0,
            force: {
                x: 0,
                y: 0,
            },
            stopRotation: true, // default false, usually do not need to be set
        },
    }))

    return floor;
}
