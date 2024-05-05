document.addEventListener("DOMContentLoaded", () => {
 fetch('/components/navbar/navbar.html')
  .then(response => response.text())
  .then(html => {
   document.getElementById("navbar").innerHTML = html;
   handleNavLinks();
  })
  .catch(error => {
   console.error('Error fetching HTML:', error);
  });
});


window.addEventListener("scroll", function () {
 const logoSelector = document.getElementById("logo");
 if (window.scrollY > 45) {
  logoSelector.src = "/img/logo-horizontal.png";
 } else {
  logoSelector.src =
   "/img/logo-horizontallogo-horizontal-bw.png";
 }
});

function handleNavLinks() {
 const navLinks = document.querySelectorAll(".nav-item.nav-link");
 navLinks.forEach((link) => {
  const href = link.getAttribute("href")
  if (JSON.stringify(window.location.pathname) === JSON.stringify(`/${href}`)) {
   link.classList.add("active");
   return;
  } else {
   link.classList.remove("active")
  }
 });
}