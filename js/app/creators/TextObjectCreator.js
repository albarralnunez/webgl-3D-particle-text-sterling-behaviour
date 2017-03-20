/**
 * Created by danielalbarral on 13/03/2017.
 */


import * as THREE from "three";
import { ParticleCreator } from './ParticleCreator'
import "../three_ext/utils/GeometryUtils";


export class TextObjectCreator {

    constructor ( sceneComposer ) {

        this.sceneComposer = sceneComposer;
        this.text = "D a n i e l   A l b a r r a l";
        this.height = 10;
        this.size = 40;
        this.hover = 0;
        this.curveSegments = 4;
        this.bevelThickness = 2;
        this.bevelSize = 1.5;
        this.bevelSegments = 3;
        this.bevelEnabled = true;
        // this.fontName = "optimer";
        this.fontName = 'helvetiker';
        this.fontWeight = "regular";
        this.position = undefined;
        this.numParticles = 3000;

    }

    _createText ( font ) {

        let textGeo = new THREE.TextGeometry( this.text, {
            font: font,
            size: this.size,
            height: this.height,
            curveSegments: this.curveSegments,
            bevelThickness: this.bevelThickness,
            bevelSize: this.bevelSize,
            bevelEnabled: this.bevelEnabled,
            material: 0,
            extrudeMaterial: 1
        });

        textGeo.computeBoundingBox();
        textGeo.computeVertexNormals();

        let centerOffset =
            -0.5 * (
                textGeo.boundingBox.max.x
                - textGeo.boundingBox.min.x
            );

        let group = new THREE.Group();
        let particles_position = THREE.GeometryUtils.randomPointsInGeometry(
            textGeo, this.numParticles);

        let particles = this._generateParticles( particles_position, group );

        group.position.x = centerOffset;
        group.position.y = this.hover;
        group.position.z = 0;
        group.rotation.x = 0;
        group.rotation.y = 0;

        this.sceneComposer.add( group );
        console.log('Text created');

        return particles;
    }

    _generateParticles ( particles_position, group ) {
        let particles = [];
        for ( let i = 0; i < particles_position.length; i ++ ) {
            let position = particles_position[i];
            particles.push(
                new ParticleCreator( group, position ).create()
            );
        }
        return particles;
    }


    _loadFont ( fontPath ) {
        return new Promise( ( resolve, reject ) => {
            let loader = new THREE.FontLoader();
            loader.load(
                fontPath,
                fontPath => resolve( fontPath ),
                xhr => {
                    console.log(
                        'Font '
                        + ( xhr.loaded / xhr.total * 100 )
                        + '% loaded' );
                },
                xhr => reject( xhr )
            );
        } );
    }

    create () {
        const fontPath = 'fonts/'
            + this.fontName
            + '_' + this.fontWeight
            + '.typeface.json';
        return this._loadFont( fontPath )
            .then( font => {
                return this._createText( font );
            } )
            .catch( reason => {
                console.log( 'Error reason:' );
                console.log( reason );
            } );

    }
}
