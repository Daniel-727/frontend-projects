const email_regex = /[\w /.]+@\w+.com$|.edu$|.net$/;
const form = document.querySelector('[data-id="form"]');
const email_input = document.querySelector('[data-id="email_input"]');
const error_message = document.querySelector('[data-id="error"]');

/* const data = FormData(form); */

/* const input_value = new FormData(form); */

const baseUrl = "http://localhost:8000";

const validEmail = () => {
  let result = email_regex.test(email_input.value);

  if (result) {
    email_input.classList.remove("input_error");
    error_message.classList.add("hidden");
    return true;
  } else {
    email_input.classList.add("input_error");
    error_message.classList.remove("hidden");
    return false;
  }
};

email_input.addEventListener("input", () => validEmail());

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (validEmail()) {
    fetch(baseUrl, {
      method: "GET",
      body: email_input.value,
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));

    /* form.submit(); */
  }
});
