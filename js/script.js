{
    const changeValue = (event) => {
        event.preventDefault();
        const cashValue = document.querySelector(".js-cashValue");
        const plnValue = document.querySelector(".js-plnValue");

        const resultValue = document.querySelector(".js-result");
        const cash = cashValue.value;
        const pln = plnValue.value;

        const result = cash * pln;

        resultValue.innerText = result.toFixed(2);
    };

    const init = () => {
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", changeValue);
    };

    init();
}