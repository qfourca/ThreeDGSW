import * as THREE from 'three'

import EasyCamera from './easy/Camera'
import EasyScene from './easy/Scene'
import EasyRenderer from './easy/Renderer'
import EasyMouse from './easy/Mouse'

export const scene = new EasyScene()
export const camera = new EasyCamera(75, window.innerWidth / window.innerHeight)
export const renderer = new EasyRenderer(window.innerWidth, window.innerHeight)
export const mouse = new EasyMouse()
export const render = () => renderer.render(scene, camera)


export default () => {
	scene.background = new THREE.Color(0x004fff)

	camera.position.z = 40
	camera.rotation.x = 45
	// document.body.style.cursor = 'none'

	const material = new THREE.MeshStandardMaterial({
		color:0x999999
	})
	const Boxgeometry = new THREE.BoxGeometry(30, 30, 30)
	const cube = new THREE.Mesh(Boxgeometry, material)
	scene.add(cube)
	render()
}