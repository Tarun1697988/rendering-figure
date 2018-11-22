import {Figure} from './figure';

export default function Square() {
  Figure.apply(this, arguments);

};

Square.prototype = Object.create(Figure.prototype);
Square.prototype.constructor = Square;

Square.prototype.stylization = function () {
  Figure.prototype.stylization.apply(this);
  this.elem.style.height = `${this.width}px`;
}