
document.addEventListener("DOMContentLoaded", () => {
  fetch('/components/footer/footer.html')
    .then(response => response.text())
    .then(html => {
      document.getElementById("footer").innerHTML = html;
    })
    .catch(error => {
      console.error('Error fetching HTML:', error);
    });
});