
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");
var body = document.querySelector("body");
const text = document.querySelectorAll('.phone h1')
const menubar = document.querySelectorAll('ul li a')

//segundo container
btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})


let idx = 0;

function changeName(){
    idx++;

    if(idx > text.length - 1)
        idx = 0;

    text.forEach((sec) => {
        sec.classList.remove('active')
    })

    text[idx].classList.add('active')
    

}

setInterval(changeName, 2000);

//cor da header

function selectL(){
    menubar.forEach((item)=> 
        item.classList.remove('cor')
    )
    this.classList.add('cor')
}

menubar.forEach((item)=>
    item.addEventListener('click',selectL)
)

//scroll suave

function distanceTop(element){
   const id = element.getAttribute("href");
   return document.querySelector(id).offsetTop;
}

function nativeScroll(distanceFromTheTop){
    window.scroll({
        top: distanceFromTheTop,
        behavior:"smooth"
    });
}

function scrollToSection(event){
    event.preventDefault();
    const distanceFromTheTop = distanceTop(event.target) - 90;
    nativeScroll(distanceFromTheTop);
   
}

menubar.forEach((link)=>{
    link.addEventListener("click", scrollToSection)
})





