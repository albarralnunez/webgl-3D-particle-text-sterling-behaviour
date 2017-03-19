/**
 * Created by danielalbarral on 13/03/2017.
 */

import * as THREE from "three";
import { Particle } from "../particle/Particle";


export class ParticleCreator {

    constructor ( group, start ) {
        this.group = group;
        this.start = start
    }

    create () {
        let geometry = new THREE.SphereGeometry( 0.5, 0.5, 0.5 );

        let material = new THREE.MeshBasicMaterial( { color: 0x00ff00, side: THREE.BackSide } );

        let mesh = new THREE.Mesh( geometry, material );

        let particle = new Particle( mesh, this.start );

        mesh.position.set( this.start.x, this.start.y, this.start.z );
        this.group.add( mesh );

        return particle;
    }

}
