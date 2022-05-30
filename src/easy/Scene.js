import * as THREE from 'three'
export default class EasyScene extends THREE.Scene{
    constructor() {
        super()
        this.background = new THREE.Color(0xf0f0f0)
    }
}