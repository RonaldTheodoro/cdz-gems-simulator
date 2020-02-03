function calcGems(value) {
  const gems = parseInt(value, 10);
  let totalGems = gems;
  let calcGems = null;

  if (totalGems >= 20) {
    calcGems = calc(totalGems, 21, 28);
    totalGems += calcGems.ganho;
    console.log('randomGems', calcGems.randomGems);
    console.log('ganho', calcGems.ganho);
    console.log('total', calcGems.total);
  }

  if (totalGems >= 30) {
    calcGems = calc(totalGems, 31, 48);
    totalGems += calcGems.ganho;
    console.log('randomGems', calcGems.randomGems);
    console.log('ganho', calcGems.ganho);
    console.log('total', calcGems.total);
  }

  if (totalGems >= 65) {
    calcGems = calc(totalGems, 66, 88);
    totalGems += calcGems.ganho;
    console.log('randomGems', calcGems.randomGems);
    console.log('ganho', calcGems.ganho);
    console.log('total', calcGems.total);
  }

  if (totalGems >= 150) {
    calcGems = calc(totalGems, 151, 188);
    totalGems += calcGems.ganho;
    console.log('randomGems', calcGems.randomGems);
    console.log('ganho', calcGems.ganho);
    console.log('total', calcGems.total);
  }

  if (totalGems >= 240) {
    calcGems = calc(totalGems, 241, 288);
    totalGems += calcGems.ganho;
    console.log('randomGems', calcGems.randomGems);
    console.log('ganho', calcGems.ganho);
    console.log('total', calcGems.total);
  }

  if (totalGems >= 330) {
    calcGems = calc(totalGems, 331, 388);
    totalGems += calcGems.ganho;
    console.log('randomGems', calcGems.randomGems);
    console.log('ganho', calcGems.ganho);
    console.log('total', calcGems.total);
  }

  if (totalGems >= 500) {
    calcGems = calc(totalGems, 501, 588);
    totalGems += calcGems.ganho;
    console.log('randomGems', calcGems.randomGems);
    console.log('ganho', calcGems.ganho);
    console.log('total', calcGems.total);
  }

  if (totalGems >= 660) {
    calcGems = calc(totalGems, 661, 888);
    totalGems += calcGems.ganho;
    console.log('randomGems', calcGems.randomGems);
    console.log('ganho', calcGems.ganho);
    console.log('total', calcGems.total);
  }

}

function calc(gems, min, max) {
  let randomGems = Math.floor(min + Math.random() * (max + 1 - min));
  let total = Number(gems) + Math.abs((Number(randomGems) - (Number(min) - 1)));
  let ganho = Number(total) - Number(gems);
  return {randomGems, total, ganho};
}