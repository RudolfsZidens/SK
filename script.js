const virsraksts = document.querySelector('h1')

console.log (virsraksts);

const kkadsTexts = document.querySelector('#mazaisTeksts')

console.log (kkadsTexts);

const poga = document.querySelector('.poga')

console.log (poga);

const pogaMe = document.querySelector('.poga')

console.log (pogaMe);

const text = document.getElementById('mazaisTeksts')
const test = document.getElementsByClassName('poga')

console.log(text);
console.log(test);

virsraksts.style.color = "white"

document.querySelector('html').style.backgroundColor = 'blue'

console.log(document.URL);
console.log (document.title)

document.title = "customTitle"



const ourElement = document.createElement('span')

ourElement.textContent = 'Bija jatira sniegs'

document.body.appendChild(ourElement)

function beigas() {
    alert("Drīz beigsies stunda!");
  }