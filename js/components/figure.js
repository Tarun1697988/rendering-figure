const divElem = document.querySelector('.render-figure');

function Figure(propertis = {}) {
  let { color = 'black', width = 100, height = 100 } = propertis;
  this.color = color;
  this.width = width;
  this.height = height;
  this.elem = document.createElement('div');
};

Figure.prototype.stylization = function () {
  this.elem.style.width = `${this.width}px`;
  this.elem.style.height = `${this.height}px`;
  this.elem.style.backgroundColor = this.color;
}

Figure.prototype.render = function () {
  this.createElem();
  this.stylization();
  this.hover();
  this.clicked();
}

Figure.prototype.createElem = function () {
  let fragment = document.createDocumentFragment();
  fragment.appendChild(this.elem);
  divElem.appendChild(fragment);
}

Figure.prototype.hover = function () {
  this.elem.addEventListener('mouseover', function (event) {
    event.target.style.opacity = "0.5";
  })
  this.elem.addEventListener('mouseout', function (event) {
    event.target.style.opacity = "1";
  })
}

Figure.prototype.clicked = function () {
  let index = 0;
  this.elem.addEventListener('click', function (event) {
    index++;
    event.target.style.transform = `translateX(${index * 100}px)`;
  })
}

export {Figure, divElem };