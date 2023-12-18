// 5
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
const bodyBg = document.querySelector("body");
const btn = document.querySelector(".change-color");
const colorText = document.querySelector(".color");
btn.addEventListener("click", (event) => {
    const randColor = getRandomHexColor();
    bodyBg.style.backgroundColor = randColor;
    colorText.textContent = randColor;
});