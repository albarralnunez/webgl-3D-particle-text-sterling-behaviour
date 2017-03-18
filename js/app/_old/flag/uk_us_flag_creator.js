/**
 * Created by danielalbarral on 11/03/2017.
 */

import * as THREE from "three";
import { Flag } from './flag'


export class UkUsFlagCreator extends Mesh{

    constructor (scene) {

        // cloth material
        var loader = new THREE.TextureLoader();
        var clothTexture = loader.load( 'textures/patterns/circuit_pattern.png' );
        clothTexture.wrapS = clothTexture.wrapT = THREE.RepeatWrapping;
        clothTexture.anisotropy = 16;
        var clothMaterial = new THREE.MeshPhongMaterial( {
            specular: 0x030303,
            map: clothTexture,
            side: THREE.DoubleSide,
            alphaTest: 0.5
        } );

        // cloth geometry
        clothGeometry = new THREE.ParametricGeometry( clothFunction, cloth.w, cloth.h );
        clothGeometry.dynamic = true;
        let uniforms = { texture:  { value: clothTexture } };
        let vertexShader = document.getElementById( 'vertexShaderDepth' ).textContent;
        let fragmentShader = document.getElementById( 'fragmentShaderDepth' ).textContent;

        // cloth mesh
        object = new Flag( clothGeometry, clothMaterial );
        object.position.set( 0, 0, 0 );
        object.castShadow = true;
        object.customDepthMaterial = new THREE.ShaderMaterial( {
            uniforms: uniforms,
            vertexShader: vertexShader,
            fragmentShader: fragmentShader,
            side: THREE.DoubleSide
        } );

        scene.add(object);
        return object;
    }
}
