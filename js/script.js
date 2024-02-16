let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}

// window.onscroll = () =>{
//     menu.classList.remove("fa-times");
//     navbar.classList.remove("active");
// }

// const tl = gsap.timeline();

// tl.from("header", {
//     y: -100,
//     ease: "expo.out",
//     duration: 1.1,
// },"-=.6").from("header .logo", {
//     opacity:0,
//     duration:2.5,
// }, "-=1");