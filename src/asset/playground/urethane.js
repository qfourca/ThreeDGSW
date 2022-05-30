import * as THREE from 'three'

export default class Urethane{
    constructor() {
        this.material = new THREE.MeshStandardMaterial({
            roughness: 0.7,
            color: 0x710119
        })
        this.geometry = new THREE.PlaneGeometry(800, 450)
        this.mesh = new THREE.Mesh(this.geometry, this.material)    
    }
    render(scene, opction) {
        if(opction) {
            if(opction.position) {
                this.mesh.position.set(opction.position.x, opction.position.y, opction.position.z)
            }
        }
        scene.add(this.mesh)
    }
}