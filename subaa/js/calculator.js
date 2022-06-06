//Author Name : Subaa
//Project-Start-Date : 02-06-2022
//Project-End-Date : 04-06-2022


const input = document.getElementById("result")
     

//displaying value in input
function display(value) {
   input.value += value;
}

//calculating the input value
function calculate() {
 input.value = eval(input.value);
}

//clearing the input value
clearInput=()=> {
 input.value = ''
}

//removing number from right one-by-one
slice=()=>{
    input.value = input.value.slice(0, -1)
}

//function for dark and white mode
let color = ["white","black"]
var i = 0;
document.querySelector("button").addEventListener("click",function(){
    i = i <color.length ? ++i : 0;
    document.querySelector(".calculator").style.background = color[i]
    document.querySelector(".rows").style.color = color[i]
    document.querySelector("#btnTog").style.background = color[i]
    document.querySelector("#btnCircle").style.color = color[i]
    const hover = document.querySelectorAll("#hover");
    for (let i = 0; i < hover.length; i++) {
        hover[i].style.border = "none";
        hover[i].addEventListener('mouseover',function(){
            hover[i].style.border = "black";
            hover[i].style.color = "black"
        })
        hover[i].addEventListener('mouseout',function(){
            hover[i].style.border = "none";
            hover[i].style.color = "black"
        })
        document.getElementById("result").style.color = "black"
}
})


//function for displaying hidded themes
colorFun=()=>{
    let col = document.getElementById('themes')
    if (col.style.display === "flex"){
        col.style.display = "none"
    }
    else{
        col.style.display = 'flex'
    }
}

//function for clicking red theme
let red = document.getElementById("flexRed").addEventListener('click',function(){
    document.body.style.background = "radial-gradient(circle, rgba(219,0,0,1) 17%, rgba(60,6,6,1) 100%)"
    document.getElementById("calculator").style.background = " linear-gradient(90deg, rgba(255,0,0,1) 0%, rgba(121,9,9,1) 39%, rgba(68,18,18,1) 100%)"
    const hover = document.querySelectorAll("#hover");
    for (let i = 0; i < hover.length; i++) {
        hover[i].style.border = "none";
        hover[i].addEventListener('mouseover',function(){
            hover[i].style.border = "3px solid rgb(108,9,9)";
            hover[i].style.color = "rgb(108,9,9)"
        })
        hover[i].addEventListener('mouseout',function(){
            hover[i].style.border = "none";
            hover[i].style.color = "black"
        })
        document.getElementById("result").style.color = "rgb(108,9,9)"
}
})

//function for clicking Yellow
let yellow = document.getElementById("flexYellow").addEventListener('click',function(){
    document.body.style.background = "linear-gradient(to top right, #ffff00 28%, #333300 87%)"
    document.getElementById("calculator").style.background = "yellow"
    const hover = document.querySelectorAll("#hover");
        for (let i = 0; i < hover.length; i++) {
            hover[i].style.border = "none";
            hover[i].addEventListener('mouseover',function(){
                hover[i].style.border = "3px solid #e4ce04";
                hover[i].style.color = "#e4ce04"
            })
            hover[i].addEventListener('mouseout',function(){
                hover[i].style.border = "none";
                hover[i].style.color = "black"
            })
        document.getElementById("result").style.color = "#e4ce04"
}
})

//function for clicking blue themes
let blue = document.getElementById("flexBlue").addEventListener('click',function(){
    document.body.style.background = "linear-gradient(to bottom left, #00ffcc -27%, #000066 103%)"
    document.getElementById("calculator").style.background = " linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 42%, rgba(0,212,255,1) 100%)"
    const hover = document.querySelectorAll("#hover");
    for (let i = 0; i < hover.length; i++) {
        hover[i].style.border = "none";
        hover[i].addEventListener('mouseover',function(){
            hover[i].style.border = "3px solid #000066";
            hover[i].style.color = "#000066"
        })
        hover[i].addEventListener('mouseout',function(){
            hover[i].style.border = "none";
            hover[i].style.color = "black"
        })
    document.getElementById("result").style.color = "#00d3d6"
}
})