// Simple script to toggle the mobile dropdown menu
// This code is beginner-friendly and uses basic JavaScript

document.addEventListener('DOMContentLoaded', function() {
  // Get the hamburger button and navbar
  var navToggle = document.querySelector('.nav-toggle');
  var navbar = document.querySelector('.navbar');

  // When the button is clicked, toggle the 'show' class on the navbar
  navToggle.addEventListener('click', function() {
    navbar.classList.toggle('show');
  });
});
