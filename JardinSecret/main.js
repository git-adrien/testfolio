
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()
scene.background = new THREE.Color( 0xffffff );



/**
 * Object
 */
const geometry = new THREE.CircleGeometry( 1.1, 64 )
const material = new THREE.ShaderMaterial({
  uniforms: {
    color1: {
      value: new THREE.Color("#8AFCFA")
    },
    color2: {
      value: new THREE.Color("#FCD1FE")
    }
  },
  vertexShader: `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0);
  }
`,
fragmentShader: `
  uniform vec3 color1;
  uniform vec3 color2;

  varying vec2 vUv;
  
  void main() {
    
    gl_FragColor = vec4(mix(color1, color2, vUv.y), 3.0);
  }
`,
wireframe: false
}

)
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)


/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}



window.addEventListener('resize', ()=>{
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    //update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    //update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))
})


/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

mesh.position.x = 1.3

//Gsap

gsap.registerPlugin(ScrollTrigger);
    
    let GsapAnim = gsap.timeline()
    

    // Full Height

    GsapAnim.to(mesh.position, {y: -.6,x: -.4,z:1.2, ease: "power1.inOut", scrollTrigger: {
      
      trigger: "body",
      scrub: 1,
      start: "top top",
      end: "bottom bottom",

    }})
 

    



/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime()

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
  
}

tick()