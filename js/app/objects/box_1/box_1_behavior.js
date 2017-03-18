/**
 * Created by danielalbarral on 11/03/2017.
 */


export class Box1Behavior {

    constructor ( mesh ) {
        this.mesh = mesh;
    }

    update () {
        this.mesh.rotation.x += 0.03;
        this.mesh.rotation.y += 0.03;
    }

}
