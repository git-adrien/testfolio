import * as THREE from './node_modules/three'

import { TrackballControls } from './node_modules/three/examples/jsm/controls/TrackballControls'

import  fragment  from './shaders/fragment.glsl'
import vertex from './shaders/vertex.glsl'
import testTexture2 from './plop2.jpg'
//import testTexture2 from './plop2.jpeg'

export default class Sketch {
  constructor(options) {
    this.clock = new THREE.Clock()

    this.container = options.domElement
    this.height = this.container.offsetHeight
    this.width = this.container.offsetWidth
    this.camera = new THREE.PerspectiveCamera( 75, this.width / this.height,1, 10000 );
    

    this.group = new THREE.Group();

    this.scene = new THREE.Scene()

    this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true})
    this.renderer.setPixelRatio(window.devicePixelRatio)
    this.container.appendChild(this.renderer.domElement)

    this.controls = new TrackballControls( this.camera, this.renderer.domElement );
    this.controls.rotateSpeed = .5;
    this.controls.panSpeed = 0.5;
    this.controls.zoomSpeed = 1.5;

    this.camera.position.set( 0, 40, 100 );
    

    
    this.resize()
    this.addObjects()

    this.render()

    this.setUpResize()

  }



  addObjects() {

    this.geometries = [
      new THREE.SphereGeometry( 1, 64, 64 ),
      new THREE.TetrahedronGeometry( 1 ),
      new THREE.TorusKnotGeometry( 1, .4 ),
      new THREE.TetrahedronGeometry(7, 2),
      new THREE.TorusGeometry(5, 2,8, 24),
    ];




    this.material = new THREE.ShaderMaterial({
      uniforms: {
        uTime: {value: 0.0},
        uResolution: {value: new THREE.Vector2()},
        uTexture: {value: new THREE.TextureLoader().load(testTexture2)},
      },
      vertexShader: vertex,
      fragmentShader: fragment,
    })

    this.base = new THREE.SphereGeometry( 40, 32, 16 ),

    this.mesh1 = new THREE.Mesh(this.base, this.material)
    this.mesh1.rotateX( 5 );
    this.group.add( this.mesh1 );

    for ( let i = 0; i < 900; i ++ ) {

      const geom = this.geometries[  Math.floor( Math.random() * this.geometries.length )  ];

      this.mesh = new THREE.Mesh(geom, this.material)

      const s = 0.6;
      this.mesh.scale.set( s ,s ,s );
      this.mesh.position.set( Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5 ).normalize();
      this.mesh.position.multiplyScalar( Math.random() * 1000 );
      this.mesh.rotation.set( Math.random() * 2, Math.random() * 2, Math.random() * 2 );

      this.group.add( this.mesh );
  
    }

 
    this.scene.add( this.group );
  
  }


    render() {
      this.material.uniforms.uTime.value = this.clock.getElapsedTime()-1

      this.controls.update()
      this.group.rotation.y += .0015;
      this.group.rotation.z += .001;

      requestAnimationFrame(this.render.bind(this))
  
      this.renderer.render(this.scene, this.camera)
    }
  
    resize() {
      this.width = this.container.offsetWidth
      this.height = this.container.offsetHeight
      this.renderer.setSize(this.width, this.height)
      this.camera.aspect = this.width / this.height
      this.camera.updateProjectionMatrix()
    }
  
    setUpResize() {
      window.addEventListener('resize', this.resize.bind(this))
    }

}




new Sketch({
  domElement: document.getElementById('container2'),
})
