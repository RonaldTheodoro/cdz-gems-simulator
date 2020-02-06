function Calc() {
  this.total = 0;
  this.gemasObtidas = 0;
  this.list = document.getElementById('results');

  this.calcGems = function(value) {
    this.cleanList();
    this.total = parseInt(value, 10);
    let randomGems = null;

    if (this.total >= 20) {
      randomGems = this.calc(21, 28);
      this.addToList(20, 28, randomGems);
    }
    
    if (this.total >= 30) {
      randomGems = this.calc(31, 48);
      this.addToList(30, 48, randomGems);
    }
    
    if (this.total >= 65) {
      randomGems = this.calc(66, 88);
      this.addToList(65, 88, randomGems);
    }
    
    if (this.total >= 150) {
      randomGems = this.calc(151, 188);
      this.addToList(150, 188, randomGems);
    }
    
    if (this.total >= 240) {
      randomGems = this.calc(241, 288);
      this.addToList(240, 288, randomGems);
    }
    
    if (this.total >= 330) {
      randomGems = this.calc(331, 388);
      this.addToList(330, 388, randomGems);
    }
    
    if (this.total >= 500) {
      randomGems = this.calc(501, 588);
      this.addToList(500, 588, randomGems);
    }
    
    if (this.total >= 660) {
      randomGems = this.calc(661, 888);
      this.addToList(660, 888, randomGems);
    }

    this.createHTMLItem(`Gemas recebidas = ${this.gemasObtidas}`);
    this.createHTMLItem(`Total = ${this.total}`);

  }

  this.cleanList = function() {
    while (this.list.firstChild) {
      this.list.removeChild(this.list.firstChild);
    }
  }

  this.calc = function(min, max) {
    let random = Math.floor(min + Math.random()*(max + 1 - min));
    let ganhou = Math.abs((Number(random) - (Number(min) - 1)));
    this.gemasObtidas += ganhou;
    this.total = Number(this.total) + ganhou;
    return random;
  }

  this.addToList = function(min, max, value) {
    this.createHTMLItem(`Roll ${min} a ${max} = ${value}`);
  }

  this.createHTMLItem = function(text) {
    let li = document.createElement('li');
    li.classList.add('item');
    li.appendChild(document.createTextNode(text));
    this.list.appendChild(li);
  }

}

const calc = new Calc();