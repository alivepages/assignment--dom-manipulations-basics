
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Hola mundo!!</h2>";
})

document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var answerPTagWithValue = document.querySelector('#compoundInvestment')
  answerPTagWithValue.textContent = parseInt(answerPTagWithValue.textContent) * 2;
  // you do the rest

})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  document.querySelector('#circle-bw').classList.toggle('black');
})

var aumenta = true;
document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
  var circle = document.querySelector(".circle-red");
  var w = circle.offsetWidth;
  if (w >= '320') {
    aumenta = false;
  } else if (w <= 40) {
    aumenta = true;
  }
  if (aumenta) {
    w *= 2;
  } else {
    w /= 2;
  }
  circle.style.width = w + 'px';
  circle.style.height = w + 'px';
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var rem;
  while (rem = document.querySelector("#remove li.inactive")) {
    rem.remove();
  }
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  document.querySelector('#reverse-squares .answer-box').classList.toggle('invert');
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var ul = document.querySelector('#tasks').children;
  for (var i=0; i<ul.length; i++) {
    ul[i].innerHTML = ul[i].innerHTML.split('').reverse().join('');
  }


})

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
   var img = document.querySelector('#city-img');
   var src = img.getAttribute('src');
   var num = parseInt(src.split('-')[2].split('.')[0]);
   num = (num % 10) + 1;
   img.setAttribute('src', './images/city-photo-' + num + '.jpg')
})
