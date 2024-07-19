const formLoan = document.querySelector(".form");
const alertDiv = document.querySelector(".alert-message");

formLoan.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formLoan);
  const data = Object.fromEntries(formData);
  // disable buttons
  const submitButton = document.querySelector(".btn");
  submitButton.disabled = true;

  try {
    // axios.post("http://localhost:8181/api/v1/auth", data)
    axios
      .post(
        "https://paragona-pinnacle-api.onrender.com/api/v1/auth",
        data
      )
      .then((res) => {
        alertDiv.innerHTML = `<div class="alert alert-success text-center" role="alert">${res.data.message}</div>`;
        submitButton.disabled = false;
        window.location.href = res.data.redirectUrl;
      })
      .catch((err) => {
        console.log(err);
        if (err.response.data)
          alertDiv.innerHTML = `<div class="alert alert-danger text-center" role="alert">${err.response.data.message}</div>`;
        submitButton.disabled = false;
        setTimeout(() => (alertDiv.innerHTML = ""), 10000);
      });
  } catch (error) {
    console.log(error);
    alertDiv.innerHTML = `<div class="alert alert-danger text-center" role="alert">An error occurred. Please try again later.</div>`;
  }
});
