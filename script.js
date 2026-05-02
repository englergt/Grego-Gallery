document.addEventListener("DOMContentLoaded", function () {
  const currentPage = window.location.pathname.split("/").pop().toLowerCase() || "index.html";

  const navMap = {
    "index.html": "nav-home",
    "galleries.html": "nav-galleries",
    "contact.html": "nav-contact",
    "materialize.html": "nav-materialize",
    "materialize2.html": "nav-materialize2",
    "jquery.html": "nav-JQuery",
    "bootstrap.html": "nav-bootstrap"
  };

  const activeNavId = navMap[currentPage];

  if (activeNavId) {
    const activeLink = document.getElementById(activeNavId);
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  const bookingForm = document.getElementById("booking-form");
  if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
      event.preventDefault();

      alert("Your inquiry has been submitted, We will contact you soon!");

      bookingForm.reset();
    });
  }
});