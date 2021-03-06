import * as THREE from 'three'

export default class cube{
    constructor() {
        this.material = new THREE.MeshStandardMaterial({
            color:0x999999
        })
        this.geometry = new THREE.PlaneGeometry(2000, 2000)
        this.mesh = new THREE.Mesh(this.geometry, this.material)        
    }
    render(scene) {
        scene.add(this.mesh)
    }
}