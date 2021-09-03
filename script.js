const images = [
  'url(images/background1.jpg)',
  'url(images/background2.jpg)',
  'url(images/background3.jpg)',
  'url(images/background4.jpg)',
  'url(images/background5.jpg)',
  'url(images/background6.jpg)',
]

let delay = 5000;
const body = document.querySelector('body');

function changeBg (){
  body.style.backgroundImage = images[0];
  let img = images.shift();
  images.push(img);
  setTimeout(() => {
    changeBg();
  }, delay);
}
changeBg();