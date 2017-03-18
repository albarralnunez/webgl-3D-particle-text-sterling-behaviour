/**
 * Created by danielalbarral on 10/03/2017.
 */

import * as THREE from "three";


export class Window {

    constructor ( width, height, scene, camera, renderer ) {
        this.width = width;
        this.height = height;
        this.scene = scene;
        this.camera = camera;
        this.renderer = renderer;
    }

    render () {
        // this.renderer.clear();
        this.renderer.render( this.scene, this.camera );
    }

}
