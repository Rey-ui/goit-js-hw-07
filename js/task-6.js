//6
const input = document.querySelector('#controls input[type="number"]');
const btnCreate = document.querySelector("[data-create]");
const btnDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector("#boxes");
function createBoxes(amount) {
    for (let i = 0; i < amount; i++) {
        const boxSize = 30 + i * 10;
        boxes.insertAdjacentHTML("afterbegin", `<div <div style="background-color: ${getRandomHexColor()}; width: ${boxSize}px; height: ${boxSize}px;"></div>`);
    }
}
function destroyBoxes() {
    boxes.innerHTML = "";
}
btnCreate.addEventListener("click", (event) => {
    const inputNum = parseInt(input.value);
    if (inputNum <= 100 && inputNum >= 0) {
        createBoxes(inputNum);
    } else {
        alert("Не вірно введене число")
    }
    input.value = "";
})
btnDestroy.addEventListener("click", destroyBoxes)