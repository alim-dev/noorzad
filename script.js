document.addEventListener("DOMContentLoaded", () => {

    const card = document.querySelector(".card");

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";

    setTimeout(() => {
        card.style.transition = "all .8s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }, 150);

});


const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "translateY(-3px) scale(1.02)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "translateY(0) scale(1)";
    });

});