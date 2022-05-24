import * as THREE from 'three'
import { scene, renderer, camera } from '../init'
export default class EasyCamera extends THREE.PerspectiveCamera{
	constructor (FOV, size) {
		super(FOV, size)
		this.cameraMove = new CameraMove(this)
	}
}

class CameraMove {
	constructor(camera) {
		this.camera = camera
		this._moveX = { reverse: false, run: false, speed: 0.1 }
		this._moveY = { reverse: false, run: false, speed: 0.1 }
		this._moveZ = { reverse: false, run: false, speed: 0.1 }
		
	}
	startMove(direction, reverse) {
		let movement
		if(direction == 'x') {
			movement = this._moveX
		}
		else if(direction == 'y') {
			movement = this._moveY
		}
		else if(direction == 'z') {
			movement = this._moveZ
		}
		if(movement.run == false || movement.reverse != reverse) {
			movement.reverse = reverse
			movement.run = true
			requestAnimationFrame(() => {
				this._move({
				direction: direction,
				position: this.camera.position,
				movement: movement,
				}, this._move)
			})
		}
	}
	stopMove(direction) {
		if(direction == 'x') {
			this._moveX.run = false
		}
		else if(direction == 'y') {
			this._moveY.run = false
		}
		else if(direction == 'z') {
			this._moveZ.run = false
		}
	}
	rotate(pos) {

		if(pos.x < 100 || pos.x > -100) {
			this.camera.rotation.set(
				this.camera.rotation.x - pos.y * 0.003, 
				this.camera.rotation.y + pos.x * 0.003, 
				0
			)
		}
		renderer.render(scene, camera)
	}
	_move(props, me) {
		const { direction, position, movement } = props 
		let calc
		if(movement.reverse)
			calc = (a, b) => a - b
		else
			calc = (a, b) => a + b

		if(direction == 'x') {
			position.x = calc(position.x, movement.speed)
		}
		else if(direction == 'y') {
			position.y = calc(position.y, movement.speed)
		}
		else if(direction == 'z') {
			position.z = calc(position.z, movement.speed)
		}
		renderer.render(scene, camera);
		if(movement.run == true) {
			requestAnimationFrame(() => me({
				direction, 
				position, 
				movement, 
			}, me))
		}
	}
}