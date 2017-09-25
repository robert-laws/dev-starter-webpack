import _ from 'lodash'
import './style.css'

function component() {
  var heading = document.createElement("h1")
  heading.innerHTML = _.join(['Development', 'Webpack'], ' - ')
  heading.classList.add('topHeading')
  return heading
}

document.body.appendChild(component())