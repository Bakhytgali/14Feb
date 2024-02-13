const yesButton = document.querySelector(".yes");
const noButton = document.querySelector(".no");

const title = document.querySelector(".title");
const question = document.querySelector(".question");

const gif = document.querySelector(".gif");

yesButton.addEventListener("click", () => {

    title.innerHTML = "Yay! I knew it!";
    question.innerHTML = "Love you babe <3";

    yesButton.style.display="none";
    noButton.style.display="none";

    gif.setAttribute("src", "./gifs/gif2.gif");
});

noButton.addEventListener("click", () => {
    let currentRight = parseFloat(noButton.style.right) || 0;
    let currentLeft = parseFloat(noButton.style.left) || 0;
    let currentTop = parseFloat(noButton.style.top) || 0;
    let currentBottom = parseFloat(noButton.style.bottom) || 0;

    let newRight = Math.min(Math.max(currentRight + (Math.random() * 100 - 50), 0), window.innerWidth - noButton.offsetWidth);
    let newLeft = Math.min(Math.max(currentLeft + (Math.random() * 100 - 50), 0), window.innerWidth - noButton.offsetWidth);
    let newTop = Math.min(Math.max(currentTop + (Math.random() * 100 - 50), 0), window.innerHeight - noButton.offsetHeight);
    let newBottom = Math.min(Math.max(currentBottom + (Math.random() * 100 - 50), 0), window.innerHeight - noButton.offsetHeight);

    noButton.style.right = `${newRight}px`;
    noButton.style.left = `${newLeft}px`;
    noButton.style.top = `${newTop}px`;
    noButton.style.bottom = `${newBottom}px`;
});