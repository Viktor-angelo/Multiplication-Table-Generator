const root = document.documentElement;
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", () => {
    const isDark = root.getAttribute("data-tema") === 'escuro';

    if (isDark) {
        root.removeAttribute("data-tema");
    } else {
        root.setAttribute("data-tema", "escuro");
    }
});

const resultDiv = document.getElementById("result");
const numberInput = document.getElementById("number-input");
const limitInput = document.getElementById("limit-input");
const calculateBtn = document.getElementById("calculate-btn");

calculateBtn.addEventListener("click", function () {

    const number = Number(numberInput.value);
    let limit = Number(limitInput.value);

    if (limit > 100) {
        alert("The maximum limit is 100 to avoid crashes.");
        limit = 100;
        limitInput.value = 100;
    }

    if (limit <= 0 || isNaN(limit)) {
        alert("Enter a value greater than 0.");
        return;
    }

    let multiplicationHTML = "";

    for (let i = 1; i <= limit; i++) {
        const result = number * i;
        multiplicationHTML += `<p>${number} x ${i} = ${result}</p>`;
    }

    resultDiv.innerHTML = multiplicationHTML;
});