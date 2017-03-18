/**
 * Created by danielalbarral on 10/03/2017.
 */


import * as THREE from "three";
import Stats from "../libs/stats.min";


import { SceneCreator } from './objects/scene_creator'
import { WindowCreator } from './objects/window_creator';
import { Box1Creator } from './objects/box_1/box_1_creator'
import { LanternCreator } from './objects/lantern/lantern_creator'
import { TextObjectCreator } from './objects/text_object/text_object_creator'
import { FlorCreator } from './objects/flor/flor_creator'



let canvas;
let stats;

init();
animate();


function init () {
    let container = document.getElementById( 'container' );

    stats = Stats();
    container.appendChild( stats.dom );

    // Create scene and set camera
    let scene = new SceneCreator().create();

    let camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

    // Create canvas
    canvas = new WindowCreator( scene, camera, container ).create();

    // Init camera position
    camera.position.set( 0, 0, 400 );
    // let cameraTarget = new THREE.Vector3( 0, -313.46, 0 );
    // camera.lookAt( cameraTarget );


    // Add objects to scene
    // let lantern = new LanternCreator( scene ).create();
    // let box = new Box1Creator( scene ).create();
    let my_name = new TextObjectCreator( scene ).create();

}

function animate () {

    requestAnimationFrame( animate );

    render();

    stats.update();
}

function render () {

    canvas.render();

}
