import Square from './square';

let valueColor,
  valueWidth,
  valueHeight;

function handler(Figure) {
  valueColor = document.querySelector('.input-color').value || undefined;
  valueWidth = document.querySelector('.input-width').value || undefined;
  valueHeight = document.querySelector('.input-height').value || undefined;

  if (Figure === Square) { valueHeight = valueWidth };

  new Figure({ color: valueColor, width: valueWidth, height: valueHeight }).render();
};

export {handler, valueColor, valueWidth, valueHeight }