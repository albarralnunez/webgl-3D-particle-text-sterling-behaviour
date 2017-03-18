/**
 * Created by danielalbarral on 13/03/2017.
 */


import * as THREE from "three";


export class FlorCreator {

    constructor ( sceneComposer ) {
        this.sceneComposer = sceneComposer;

    }

    create () {
        let plane = new THREE.Mesh(
            new THREE.PlaneBufferGeometry( 10000, 10000 ),
            new THREE.MeshBasicMaterial( { color: 0xffffff, opacity: 0.5, transparent: true } )
        );
        plane.position.y = 100;
        plane.rotation.x = - Math.PI / 2;

        this.sceneComposer.add( plane );
        return plane;
    }

}

