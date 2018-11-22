import {Figure} from './figure';



export default function Rectagle() {
  Figure.apply(this, arguments);
}

Rectagle.prototype = Object.create(Figure.prototype);
Rectagle.prototype.constructor = Rectagle;
