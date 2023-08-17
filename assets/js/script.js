// JavaScript for Mobile Menu

const bars = document.getElementById("bars");
const mobile_menu = document.getElementById("mobile-menu");

bars.addEventListener("click", () => {
    bars.classList.toggle("active");
    mobile_menu.classList.toggle("active")
})


// Owl Carousel JavaScript for Hero Slider

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots: false,
    items:1,
    autoplay: true,
    autoplayTimeout: 3000,
  })