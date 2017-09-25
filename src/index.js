import _ from 'lodash'
import printMe from './print.js'
import './style.css'
import Img from './chatacter_00_small.jpg'
import Data from './data.xml'

function component() {
  var element = document.createElement('div')
  element.innerHTML = _.join(['Development', 'Webpack'], ' - ')
  element.classList.add('topHeading')

  // add image to existing div
  var myImg = new Image()
  myImg.src = Img

  element.appendChild(myImg)

  var btn = document.createElement('button')
  btn.innerHTML = 'Click here and check the console'
  btn.onclick = printMe

  element.appendChild(btn)

  console.log(Data)

  return element
}

document.body.appendChild(component())