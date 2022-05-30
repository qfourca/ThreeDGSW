import * as THREE from 'three'

export default class Greenfield{
    constructor() {
        this.material = new THREE.MeshStandardMaterial({
            roughness: 0.7,
            color: 0x188500
        })
        this.rectangle = new THREE.PlaneGeometry(550, 300)
        this.circle = new THREE.CircleGeometry(150, 64, 0, 3)
        this.meshs = new Array()
        this.meshs.push(new THREE.Mesh(this.rectangle, this.material))
        this.meshs.push(new THREE.Mesh(this.circle, this.material))
        this.meshs.at(this.meshs.length - 1).position.x += 250
        this.meshs.at(this.meshs.length - 1).rotation.z += 4.8
    }
    render(scene, opction) {
        if(opction) {
            if(opction.position) {
                this.meshs.forEach(element => {
                    element.position.x += opction.position.x
                    element.position.y += opction.position.y
                    element.position.z += opction.position.z
                })
            }
        }

        this.meshs.forEach(element => {
            scene.add(element)
        })
    }
}