/**
 * Created by danielalbarral on 16/03/2017.
 */

import * as THREE from "three";


export class Particle {

    constructor ( mesh, position ) {
        this.mesh = mesh;
        this.position = position;
        this.velocity = new THREE.Vector3( 1, 1, 1 );
        this.acceleration = new THREE.Vector3( 1, 1, 1 );
        this.maxspeed = 10;
        this.maxforce = 1;
    }

    behaviors () {
        // let arrive = this.arrive(this.target);
        // let mouse = createVector(mouseX, mouseY);
        // let flee = this.flee(mouse);
        //
        // arrive.mult(1);
        // flee.mult(5);
        //
        // this.applyForce(arrive);
        // this.applyForce(flee);
    }

    applyForce () {
        this.acceleration.add(f);
    }

    update () {
        this.mesh.position.add(this.vel);
        this.velocity.add(this.acc);
        this.acceleration.mult(0);
    }

}
