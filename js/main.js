const id = document.getElementById.bind(document)

const numberScreen = id('counter-number')

const btnIncrease = id('counter-btn-increase')
const btnDecrease = id('counter-btn-decrease')
const btnReset = id('counter-btn-reset')


let counter = 0
numberScreen.textContent = counter 


btnIncrease.addEventListener('click', function() {
  counter++
  numberScreen.textContent = counter

  if(counter > 0) {
    document.documentElement.style.setProperty('--color-counter', '#00ff00')
    document.documentElement.style.setProperty('--bg-color', '#009900')


  } else if(counter === 0) {
    document.documentElement.style.setProperty('--color-counter', '#444444')
    document.documentElement.style.setProperty('--bg-color', '#DDDDDD')
  }

  if(counter % 10 === 0) {
    numberScreen.style.setProperty('--animation-number', 'multiplyTen .6s alternate')
  }else{
    numberScreen.style.setProperty('--animation-number', 'none')
  }
  
})

btnDecrease.addEventListener('click', function() {
  counter--
  numberScreen.textContent = counter

  if(counter < 0) {
    document.documentElement.style.setProperty('--color-counter', '#ff0000')
    document.documentElement.style.setProperty('--bg-color', '#990000')

  } else if(counter === 0) {
    document.documentElement.style.setProperty('--color-counter', '#444444')
    document.documentElement.style.setProperty('--bg-color', '#DDDDDD')
  }

  if((counter % -10) === 0) {
    numberScreen.style.setProperty('--animation-number', 'multiplyTen .6s alternate')
  }else{
    numberScreen.style.setProperty('--animation-number', 'none')
  }
  
})

btnReset.addEventListener('click', function() {
  counter = 0
  numberScreen.textContent = counter

  document.documentElement.style.setProperty('--color-counter', '#444444')
  document.documentElement.style.setProperty('--bg-color', '#DDDDDD')

  if(counter % 10 === 0) {
    numberScreen.style.setProperty('--animation-number', 'multiplyTen .6s alternate')
  }else{
    numberScreen.style.setProperty('--animation-number', 'none')
  }
  
})


