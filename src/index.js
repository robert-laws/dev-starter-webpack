import _ from 'lodash'
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

  console.log(Data)

  return element
}

document.body.appendChild(component())