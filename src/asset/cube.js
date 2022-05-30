import * as THREE from 'three'

export default class cube{
    constructor() {
        this.material = new THREE.MeshStandardMaterial({
            color:0xAAAAAA
        })
        this.geometry = new THREE.BoxGeometry(30, 30, 30)
        this.mesh = new THREE.Mesh(this.geometry, this.material)        
    }
    render(scene) {
        scene.add(this.mesh)
    }
}