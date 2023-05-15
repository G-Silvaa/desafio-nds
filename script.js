
var btnSignin = document.querySelector("#signin");
var btnSignup = document.querySelector("#signup");
var body = document.querySelector("body");


btnSignin.addEventListener("click", function () {
   body.className = "sign-in-js"; 
});

btnSignup.addEventListener("click", function () {
    body.className = "sign-up-js";
})

const text = document.querySelectorAll('.phone h1')
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

const menubar = document.querySelectorAll('ul li a')

function selectL(){
    menubar.forEach((item)=> 
        item.classList.remove('cor')
    )
    this.classList.add('cor')
}

menubar.forEach((item)=>
    item.addEventListener('click',selectL)
)





