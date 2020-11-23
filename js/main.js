L.mapquest.key = "KEY";

// 'map' refers to a <div> element with the ID map
L.mapquest.map("map-quest", {
  center: [-4.0466494, 39.6614455],
  layers: L.mapquest.tileLayer("map"),
  zoom: 13
});

// target navbar items
const home = document.querySelector('#home-item');
const what = document.querySelector('#what-item');
const who = document.querySelector('#who-item');
const contact = document.querySelector('#contact-item');
const navbar = document.querySelector('#navbar');

// add Event listener to home
home.addEventListener('mousedown', function () {
  // Smoothscroll
  window.scroll({
    top: 0,
    behavior: 'smooth'
  })
})

what.addEventListener('mousedown', function (e) {

  if (e.clientX < 200) {
    window.scroll({
      top: 800,
      left: 0,
      behavior: 'smooth'
    })
  } else {
    window.scroll({
      top: 600,
      left: 0,
      behavior: 'smooth'
    })
  }
})

who.addEventListener('mousedown', function (e) {
  console.log(e.clientX);
  if ( e.clientX < 260) {
    window.scroll({
      top: 1550,
      left: 0,
      behavior: 'smooth'
    })
  } else {
    window.scroll({
      top: 1060,
      left: 0,
      behavior: "smooth",
    });
  }
})
contact.addEventListener('mousedown', function(e) {
  if (e.clientX < 385) {
    window.scroll({
      top: 2300,
      left: 0,
      behavior: 'smooth'
    })
  } else {
    window.scroll({
      top: 1750,
      left: 0,
      behavior: "smooth",
    });
  }
})

window.addEventListener('scroll', function (e) {
  if (scrollY > 150) {
    navbar.style.opacity = 0.9;
  } else {
    navbar.style.opacity = 1;
  }
})

