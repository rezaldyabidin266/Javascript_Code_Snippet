// For Loops
let forLoopHtml = document.getElementById("forLoop");
const btnForLoop = document.getElementById("btnForLoop");

btnForLoop.addEventListener("click", () => {
for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
    forLoopHtml.innerText += `no: ${i} \n`;
    }, i * 800);
}
});
// End For Loops

// While Loops
let whileLoopsHtml = document.getElementById("whileLoop");
const btnWhileLoop = document.getElementById("btnWhileLoop");
btnWhileLoop.addEventListener("click", () => {
let i = 6;
while (i <= 10) {
    (function (i) {
    setTimeout(function () {
        whileLoopsHtml.innerText += `no: ${i} \n`;
    }, 700 * i);
    })(i++);
}
});
// EndWhile Loops

// Do While Loops
let doWhileHtml = document.getElementById("doWhile");
const btnDoWhileLoop = document.getElementById("btnDoWhileLoop");
let i = 11;
btnDoWhileLoop.addEventListener("click", () => {
do {
    (function (i) {
    setTimeout(function () {
        doWhileHtml.innerText += `no: ${i} \n`;
    }, 700 * i);
    })(i++);
} while (i <= 15);
});

// End Do While Loops