const formLoan = document.querySelector(".form");

formLoan.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(formLoan);
  const data = Object.fromEntries(formData);
  console.log(data);
  fetch("https://paragona-pinnacle-api.onrender.com/api/v1/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});
