/**
 * Created by danielalbarral on 13/03/2017.
 */

import { Window } from '../engine/window'
import * as THREE from "three";


export class WindowCreator {

    constructor (scene, camera, container) {
        this.scene = scene;
        this.camera = camera;
        this.container = container;
    }

    create () {
        let renderer = new THREE.WebGLRenderer( { antialias: true } );
        renderer.setClearColor( this.scene.fog.color );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        this.container.appendChild( renderer.domElement );

        return new Window( window.innerWidth, window.innerHeight, this.scene, this.camera, renderer );
    }

}
