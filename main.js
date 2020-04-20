const mainNav = document.querySelector(".main-nav");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", () => {
  mainNav.classList.toggle("open");
});

gsap.fromTo(".hero-clipped", { scaleX: 0 }, { duration: 1.8, scaleX: 1 });
AOS.init({
  easing: "ease",
  duration: 1800,
  once: true,
});

$(document).ready(function () {
  $("").on("click", function () {
    $("html, body").animate();
  });

  $("#up").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      2000
    );
  });
  $('nav a[href*="#"]').on("click", function () {
    $("html,body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top - 100,
      },
      2000
    );
  });
});
