const btn = document.getElementById('btn')
const btnColor = document.getElementById('btnColor')
const swapBtn = document.getElementById('swapBtn')
const counterBtn = document.getElementById('counter')
const swapInput = document.getElementById('swapInput')
const userInput = document.getElementById('userInput')
const hideAll = document.getElementById('hideAll')
const main = document.getElementById('main')
const numberInput = document.getElementById('numberInput')
const poweInput = document.getElementById('poweInput')
const btnPow = document.getElementById('btnPow')
const span = document.getElementsByClassName('span')
const textinput = document.getElementsByClassName('textinput')
const save = document.getElementById('save')
const timer = document.getElementById('timer')
const start = document.getElementById('start')
const stop = document.getElementById('stop')
const reset = document.getElementById('reset')

const colors = ['red', 'blue', 'purple', 'brown', 'orange']

const h3 = document.createElement('h3')
let user
let textValue = ''
let count = 0
let arrClasslist = [];


const getRandomNum = (arr) => {
    return Math.floor(Math.random() * arr.length)
}

document.body.appendChild(h3)

h3.classList.add('hideName')

const btnListener = () => {
    user = userInput.value
    h3.innerText = `Hello, ${user}!`
    h3.classList.toggle('hideName')
}

const colorBtnListener = () => {
    let index = getRandomNum(colors)
    h3.style.color = colors[index]
}

const swapHandler = () => {
    // temp = swapInput.value
    // swapInput.value = userInput.value
    // userInput.value = temp

    [swapInput.value, userInput.value] = [userInput.value, swapInput.value]
}

btn.addEventListener('click', btnListener)

btnColor.addEventListener('click', colorBtnListener)

swapBtn.addEventListener('click', swapHandler)

userInput.onfocus = function () {
    userInput.value = textValue
}

userInput.onblur = function () {
    textValue = userInput.value
    userInput.value = 'write here'
}

counterBtn.onclick = function () {
    count++
    this.innerText = count.toString()
}

document.addEventListener('click', (e) => {
    console.log(document.querySelector('[data-age]').dataset.age)
})

///// 1)

const hiden = () =>{
     main.classList.toggle('hideName');
     if(main.classList.contains('hideName')){
         hideAll.innerText = 'show all';
    }else{
         hideAll.innerText = 'Hide all';        
     }
}

hideAll.addEventListener('click', hiden);


////// 2)

btnPow.onclick = function(){
    poweInput.value = numberInput.value ** 2;
}

///// 3)

save.onclick = () =>{
    let x = [];
    for(let i = 0; i < textinput.length; i++){
        if(textinput[i].value.length < 4) {
            span[i].innerHTML = "Error";
            x.push(i);
        }
    }
    x.forEach((i) =>{
        setTimeout(() => (span[i].innerHTML = ""), 3000);
    })
};



//// 4)


/////  5)
class Timer{
  constructor(count){
      this.interval;
      this.count = count;
      this.ifStop = false;
  }
  timerStart(){
    this.interval = setInterval(() => {
        this.count++;
        timer.innerHTML = this.count;
        this.ifStop = false;
    }, 1000);
  }
  timerStop(){
      clearInterval(this.interval);
      this.ifStop = true;
  }
  timerReset(){
     if(this.ifStop === true){
        this.count = 0;
        timer.innerHTML = count;
     }
  }
};

const newTimer = new Timer(0);

start.onclick = () =>{
    newTimer.timerStart();
    start.classList.add('hideName');
}

stop.onclick = () =>{
    newTimer.timerStop();
    start.classList.remove('hideName');
}

reset.onclick = () =>{
    newTimer.timerReset();
}
