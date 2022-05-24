import { WEBGL } from './webgl'
import './event/keyEvent'
import './event/mouseEvent'
import init from './init'

if (WEBGL.isWebGLAvailable()) {
  init()
} else {
  var warning = WEBGL.getWebGLErrorMessage()
  document.body.appendChild(warning)
}

