/**
 * Created by danielalbarral on 13/03/2017.
 */


import * as THREE from "three";


export class SceneCreator {

    constructor () {

    }

    create () {
        let object  = new THREE.Scene();
        object.fog = new THREE.Fog( 0x000000, 250, 1400 );
        return object;
    }

}
