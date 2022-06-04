
//  open and close the theme box 

let colortheme = document.querySelector(".color-theme");
let coloricon = document.querySelector(".color-icons");

coloricon.addEventListener("click", () =>{
    colortheme.classList.toggle("open");
});
// dark mode js 

let mode = document.querySelector(".toggle");
 mode.addEventListener("click",() =>{
     document.body.classList.toggle("dark")
    
    if (document.body.classList.contains("dark")){
         colortheme.style.display ="none";
         return;
    }
      colortheme.style.display ="flex";
      let secimg =document.querySelector(".sec-img")     

 })

//  blue color theme code 

let blue = document.querySelector(".blue");
blue.addEventListener("click", () =>{
    document.body.classList.remove("green","sandal","orange")
    document.body.classList.toggle("blue")
})


 

//  orange color theme code 

 let orange = document.querySelector(".orange");
 orange.addEventListener("click", () =>{
     document.body.classList.remove("green","sandal","blue")
     document.body.classList.toggle("orange")
 })

//  green color theme code 

let green = document.querySelector(".green");
 green.addEventListener("click", () =>{
    document.body.classList.remove("blue","sandal","orange")
     document.body.classList.toggle("green")
 })

 //  sandal color theme code 

let sandal = document.querySelector(".sandal");
sandal.addEventListener("click", () =>{
    document.body.classList.remove("blue","green","orange")
    document.body.classList.toggle("sandal")
})





// to target the button to show actived color

let buttons = document.querySelectorAll(".btn");

for (var button of buttons) {
    button.addEventListener("click",(e) =>{
        let target = e.target;

        // automatically close when trageted color is choosen
    
        let open = document.querySelector(".open"); 
        if(open) open.classList.remove("open");  

        document.querySelector(".active").classList.remove("active");
        target.classList.add("active");

    });
}





// auto typing done in perviews project 



let i = 0;
let placeholder = '';
const txt = ["Find the colour of the Cals!"];
const speed = 100;

const sleep = (ms = speed) => new Promise(resolve => setTimeout(resolve, ms))

const length = txt.length

async function type() {
    for (let j = 0; j < txt.length; j++) {
        for (let i = 0; i < txt[j].length; i++) {
            placeholder += txt[j].charAt(i);
            document.getElementById("search-input").setAttribute("placeholder", placeholder);
            await sleep()
        }
        placeholder = ''
        await sleep(500)
    }
    type()
}

type();
