//selecting elements
let investment_field = document.getElementById("invested");
let interest_field = document.getElementById("interest");
let years_field = document.getElementById("years");
const submit_btn = document.querySelector("#submit");
const reset_btn = document.querySelector("#reset");
let return_value = document.querySelector(".return_value");
const form = document.querySelector("form");

//submit button event listener
submit_btn.addEventListener("click", submit); //remove the parentheses if you don't want the function to be called when the page loads

//submit function
function submit() {
    investment = parseInt(investment_field.value, 10);
    interest = parseInt(interest_field.value, 10) * 0.01;
    years = parseInt(years_field.value, 10);
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

    //formatting output to make it more presentable
    //let two_decimal = total.toFixed(2); toFixed lets us round to x decimal place, but isn't required as toLocaleString has options to do that for us
    let formatted_total = total.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    return_value.textContent = `Your total investment after ${years} years will be $${formatted_total} dollars.`;
}

form.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        submit();
    }
});

//reset button event listener
reset_btn.addEventListener("click", () => {
    investment_field.value = "";
    interest_field.value = "5%";
    years_field.value = "";
    return_value.textContent = "";
});
