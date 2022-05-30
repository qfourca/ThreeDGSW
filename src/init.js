import * as THREE from 'three'

import EasyCamera from './easy/Camera'
import EasyScene from './easy/Scene'
import EasyRenderer from './easy/Renderer'
import EasyMouse from './easy/Mouse'

import Cube from './asset/cube'
import Floor from './asset/floor'
import Playground from './asset/playground/playground'
import Greenfield from './asset/playground/greenfield'

export default () => {

	const ligit = new THREE.DirectionalLight(0xffffff, 1)
	ligit.position.set(0, 0, 100)
	scene.add(ligit)

	const floor = new Floor()
	floor.render(scene)

	const playground = new Playground()
	playground.render(scene)

	render()
}

export const scene = new EasyScene()
export const camera = new EasyCamera(75, window.innerWidth / window.innerHeight)
export const renderer = new EasyRenderer(window.innerWidth, window.innerHeight)
export const mouse = new EasyMouse()
export const render = () => renderer.render(scene, camera)