import {Figure} from './figure';


export default function Circle() {
  Figure.apply(this, arguments);
  this.radius = this.width / 2;
  this.height = this.width;
}

Circle.prototype = Object.create(Figure.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.stylization = function () {
  Figure.prototype.stylization.apply(this);
  this.elem.style.borderRadius = `${this.radius}px`;
}

