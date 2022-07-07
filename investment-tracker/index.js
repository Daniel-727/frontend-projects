//selecting elements
let investment;
let interest;
let years;
const submit_btn = document.querySelector("#submit");
let return_value = document.querySelector(".return_value");
const form = document.querySelector("form");

//submit button event listener
submit_btn.addEventListener("click", submit());

//submit function
function submit() {
    investment = parseInt(document.getElementById("invested").value, 10);
    interest = parseInt(document.getElementById("interest").value, 10) * 0.01;
    years = parseInt(document.getElementById("years").value, 10);
    calculate(investment, interest, years);
}

//calculate function
function calculate(invested, interest, years) {
    //if you keep investing every year
    let total = invested + invested * interest;
    for (let i = 1; i < years; i++) {
        let new_amount = total + invested;
        let new_interest = new_amount * interest;
        total = new_amount + new_interest;
    }
    console.log(total);
    //if you don't invest anymore
    /* let total = invested + invested * interest;
    for (let i = 1; i < years; i++) {
        total = total + total * interest;
    }
    console.log(total); */
    return_value.textContent = `Your total investment after ${years} years will be ${total} dollars.`;
}

form.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        submit();
    }
});
