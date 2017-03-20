/**
 * Created by danielalbarral on 10/03/2017.
 */


import * as THREE from "three";
import Stats from "../libs/stats.min";
import { TextObjectCreator } from './creators/TextObjectCreator'

// export * from "./three_ext/controls/OrbitControls";
import './three_ext/controls/OrbitControls'

let controls;
let stats;
let camera;
let scene;
let renderer;
let myName;

init();
animate();


function init () {

    let container = document.getElementById( 'container' );

    stats = Stats();
    container.appendChild( stats.dom );

    // Create scene and set camera
    scene  = new THREE.Scene();
    scene.fog = new THREE.Fog( 0x000000, 250, 1400 );

    // Renderer
    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setClearColor( scene.fog.color );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    container.appendChild( renderer.domElement );

    //Camera
    camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
    // Init camera position
    camera.position.set( 0, 0, 500 );

    controls = new THREE.OrbitControls( camera, renderer.domElement );
    controls.addEventListener( 'change', render ); // remove when using animation loop
    // enable animation loop when using damping or autorotation
    //controls.enableDamping = true;
    //controls.dampingFactor = 0.25;
    controls.enableZoom = false;


    myName = new TextObjectCreator( scene ).create();

}

function animate () {

    requestAnimationFrame( animate );

    controls.update();
    myName.then( particles =>
        particles.forEach( particle => {
            particle.update();
        } ) );

    // console.log(myName);

    render();

    stats.update();
}

function render () {

    renderer.render( scene, camera );

}
