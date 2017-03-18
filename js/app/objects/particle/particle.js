/**
 * Created by danielalbarral on 16/03/2017.
 */


export class Particle {

    constructor ( mesh, position ) {
        this.mesh = mesh;
        this.position = position;
    }

    set_position( position ) {
        this.mesh.x = position.x;
        this.mesh.y = position.y;
        this.mesh.z = position.z;
    }

}
