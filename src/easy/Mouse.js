import * as THREE from 'three'
export default class mouse {
	constructor() {
		this.mouseDown = false
		this.preventMouse = new THREE.Vector2()
		this.currentMouse = new THREE.Vector2()
	}

	setMousePos(pos) {
		this.preventMouse = this.currentMouse
		this.currentMouse = pos
	}

	getMouseMoveDistance() {
		return new THREE.Vector2(
			this.currentMouse.x - this.preventMouse.x,
			this.currentMouse.y - this.preventMouse.y
		)
	}
}