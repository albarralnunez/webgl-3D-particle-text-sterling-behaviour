/**
 * Created by danielalbarral on 16/03/2017.
 */

import * as THREE from "three";


export class Particle {

    constructor ( mesh, position ) {
        this.mesh = mesh;
        this.target = position;

        this.velocity = new THREE.Vector3( 0, 0, 0 );
        this.maxVelocity = 10;
        this.distanceMaxVelocity = 400;

        this.velocity.clampLength( 0, this.maxVelocity );

        this.acceleration = new THREE.Vector3( 0, 0, 0 );
        this.maxAcceleration = 1;
        this.acceleration.clampLength( 0, this.maxAcceleration );

    }

    _behaviors () {
        let seek = this._seekTarget();


        this._applyForce( seek );
    }

    _applyForce ( force ) {
        this.acceleration.add( force );
    }

    _seekTarget () {
        let desired = new THREE.Vector3().subVectors( this.target, this.mesh.position );
        let distance = desired.length();
        let speed = this.maxVelocity;
        if (distance <  this.distanceMaxVelocity) {
            speed = distance * this.maxVelocity /  this.distanceMaxVelocity;
        }
        desired.setLength( speed );
        return new THREE.Vector3().subVectors( desired, this.velocity );
    }

    _flee( ray ) {

    }

    update () {
        this._behaviors();
        this.mesh.position.add( this.velocity );
        this.velocity.add( this.acceleration );
        this.acceleration = new THREE.Vector3( 0, 0, 0 );
    }


}
