import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import Icon from './webpack-site.svg';

function component() {
    const element = document.createElement('div');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon);

    const titleText = document.createElement('span');
    titleText.innerHTML = _.join(['Hello', 'webpack'], ' ');
    titleText.classList.add('hello');
    element.appendChild(titleText);

    return element;
}

document.body.appendChild(component());
printMe();