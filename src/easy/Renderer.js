import * as THREE from 'three'
export default class EasyRenderer extends THREE.WebGLRenderer{
	constructor (width, height) {
		super({
			antialias: true
		})
		this.setSize(width, height)
		document.body.appendChild(this.domElement)
	}
}