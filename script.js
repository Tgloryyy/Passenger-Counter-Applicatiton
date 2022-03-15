


let c=0

function increment(){
    c=c+1
    document.getElementById("count").innerText=c
}

function decrement(){
    c=c-1
    document.getElementById("count").innerText=c
}


function save(){
    let savestr=c + " "
    document.getElementById("save").textContent+=savestr
    
    c=0
    document.getElementById("count").innerText=0
}

