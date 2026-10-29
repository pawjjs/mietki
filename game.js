import { AmbientLight, BoxGeometry, DirectionalLight, Mesh, MeshBasicMaterial, MeshPhongMaterial, Scene } from "three"
import { WebGPURenderer, PerspectiveCamera } from "three/webgpu"

let canvas = document.querySelector('canvas')
let renderer = new WebGPURenderer({canvas})
await renderer.init()
let scene = new Scene()
let getAspect = () => window.innerWidth / window.innerHeight
renderer.setSize(window.innerWidth, window.innerHeight)
let camera = new PerspectiveCamera(70, getAspect(), 0.1, 10000)
renderer.setAnimationLoop(update)

let ambient = new AmbientLight(0xffffff, 1)
scene.add(ambient)
let light = new DirectionalLight(0xffffff,  0.5)
light.position.y = 10
scene.add(light)

camera.position.z = 4
let cube = addCube()

function addCube() {
    let geometry = new BoxGeometry()
    let material = new MeshPhongMaterial({color: 0xff0000})
    let mesh = new Mesh(geometry, material)
    scene.add(mesh)
    return mesh
}

window.onresize = () => {
    camera.aspect = getAspect()
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
}

function update() {
    renderer.render(scene, camera)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    cube.rotation.z += 0.01
}
