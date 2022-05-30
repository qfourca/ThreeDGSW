import * as THREE from 'three'
import { Vector3 } from 'three'
import Greenfield from './greenfield'
import Urethane from './urethane'
export default class Playground{
    constructor() {
        this.greenfield = new Greenfield()
        this.urethane = new Urethane()
    }
    render(scene) {
        this.greenfield.render(scene, {
            position: new Vector3(0, 0, 4)
        })
        this.urethane.render(scene, {
            position: new Vector3(0, 0, 2)
        })
    }
}