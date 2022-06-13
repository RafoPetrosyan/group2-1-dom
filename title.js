const ulList = document.getElementById('ulList');

let newLi;
let newSpan;
let htmlLi;

 function addlist(title, id){
        newLi = document.createElement('li');
        newLi.innerHTML = title;
        ulList.appendChild(newLi);
        newSpan = document.createElement('span');
        newSpan.innerHTML = id;
        newLi.appendChild(newSpan);
        newSpan.classList.add('hideName');
}

function click(){
    htmlLi =  document.getElementsByTagName("lI");
    for(let i = 0; i < htmlLi.length; i++){
        htmlLi[i].addEventListener('click', ()=>{
            htmlLi[i].classList.toggle('colorRed');
            document.getElementsByTagName('span')[i].classList.toggle('hideName');
        })
    }
}
            
fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(result => result.forEach(value =>{
    addlist(value.title, value.id);
}))
.then(() => click());

