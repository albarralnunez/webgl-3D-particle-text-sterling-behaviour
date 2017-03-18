/**
 * Created by danielalbarral on 13/03/2017.
 */


import * as THREE from "three";


export class LanternCreator {

    constructor (sceneComposer) {
        this.sceneComposer = sceneComposer;
    }

    create () {
        let dirLight = new THREE.DirectionalLight( 0xffffff, 0.125 );
        dirLight.position.set( 0, 0, 1 ).normalize();
        this.sceneComposer.add( dirLight );
        let pointLight = new THREE.PointLight( 0xffffff, 1.5 );
        pointLight.position.set( 0, 100, 90 );
        this.sceneComposer.add( pointLight );
    }

}
