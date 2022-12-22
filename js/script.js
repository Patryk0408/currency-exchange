let cashValue = document.querySelector(".js-cashValue");
let plnValue = document.querySelector(".js-plnValue");
let form = document.querySelector(".js-form");
let resultValue = document.querySelector(".js-result");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    let cash = cashValue.value;
    let pln = plnValue.value;

    let result = cash * pln;

    resultValue.innerText = result.toFixed(2);
});