import _ from 'lodash'
import { cube } from './math.js';
// import printMe from './print.js'
import myMath from './math.js'
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

  var preElement = document.createElement('pre')
  preElement.innerHTML = [
    'Hello webpack!!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

  element.appendChild(preElement)

  // var btn = document.createElement('button')
  // btn.innerHTML = 'Click here and check the console'
  // btn.onclick = printMe

  // element.appendChild(btn)

  // console.log(Data)

  return element
}

let element = component()
document.body.appendChild(element)

if (module.hot) {
  module.hot.accept('./math.js', function() {
    console.log('Accepting the updated myMath module!');
    document.body.removeChild(element);
    element = component(); // Re-render the "component" to update the click handler
    document.body.appendChild(element);
  })
}