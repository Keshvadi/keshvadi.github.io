// Write JS here
document.querySelector("h1").innerHTML = "Click to turn it On";
function turnOn() {
  if (document.querySelector('img').src == 'https://tinyurl.com/4d26vbz5') {
    document.querySelector('img').src = 'https://tinyurl.com/4225uhzk';
  } else {
    document.querySelector('img').src = 'https://tinyurl.com/4d26vbz5';
  }
}

document.querySelector('img').addEventListener('click', turnOn);
