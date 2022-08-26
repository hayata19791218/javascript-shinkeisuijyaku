let field = document.getElementById("field");

let cards = [
  "A","2","3","4","5","6","7","8","9","10","J","Q","K",
  "A","2","3","4","5","6","7","8","9","10","J","Q","K",
];



let count = 0;
let mekuri = 0;
let clock = document.getElementById("clock");



function rand(min,max){
  return Math.floor(Math.random()*(max-min+1)) + min;
}

for(let i=cards.length - 1;i > 0;i --){
  let r = rand(0,i);
  let tmp = cards[i];
  cards[i] = cards[r];
  cards[r] = tmp;
}

for(let i=0;i < cards.length;i++){
  let elm = document.createElement("div");
  elm.className = "card";
  elm.innerHTML = "";
  elm.index = i;
  field.appendChild(elm);
  elm.onclick = click;
}

let first = null;
let second = null;
let timer = null;

function click(e){
  let elm = e.target;
  elm.innerHTML = cards[elm.index];

  if(timer){
    clearTimeout(timer);
    judge();
  }
  if(!first){
    first = elm;
  }else if(first.index == elm.index){
    return;
  }else{
    second = elm;
    timer = setTimeout(judge,1000);
  }
}

function judge(){
  if(first.innerHTML == second.innerHTML){
    first.style.visibility = "hidden";
    second.style.visibility = "hidden";


    mekuri += 2;
    if(mekuri == cars.length) clearInterval(timer2);

  }else{
    first.innerHTML = "";
    second.innerHTML = "";
  }
  first = null;
  second = null;
  timer = null;
}


let timer2 = setInterval(function(){
  clock.innerText = "経過時間" + (++count) + "秒";
},1000);
