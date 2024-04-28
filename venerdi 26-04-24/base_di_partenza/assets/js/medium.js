window.addEventListener("scroll", function() {
    const navbar = document.querySelector('.navbar');
    if (window.pageYOffset > 50) { 
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });


