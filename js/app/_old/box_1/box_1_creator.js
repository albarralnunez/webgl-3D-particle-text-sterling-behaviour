/**
 * Created by danielalbarral on 11/03/2017.
 */

import * as THREE from "three";


export class Box1Creator {

    constructor ( sceneComposer ) {
        this.sceneComposer = sceneComposer;

    }

    create () {
        let geometry = new THREE.BoxGeometry( 1, 1, 1 );

        let material = new THREE.MeshBasicMaterial( { color: 0x00ff00, side: THREE.BackSide } );

        let mesh = new THREE.Mesh( geometry, material );

        this.sceneComposer.add( mesh );

        return mesh;
    }

}
