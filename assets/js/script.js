// tippy.js
tippy("[data-tippy-content]");

// aos.js
AOS.init({
  duration: 700,
  once: true
});

// navbar burger
document.addEventListener('DOMContentLoaded', () => {
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
});

// JavaScript
let currentImageIndex = 0;
const images = [
  "assets/img/screenshot1.png",
  "assets/img/screenshot2.png",
  "assets/img/screenshot3.png",
  "assets/img/screenshot4.png"
  // Add more image URLs here if needed
];

function openModal(imageSrc, caption) {
  var modal = document.getElementById("imageModal");
  var modalImg = document.getElementById("modalImage");
  var captionText = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = imageSrc;
  captionText.innerHTML = caption;

  var span = document.getElementsByClassName("close")[0];
  span.onclick = function () {
    modal.style.display = "none";
  };

  var screenshots = document.querySelectorAll(".screenshot-wrapper");
  screenshots.forEach(function (screenshot) {
    screenshot.classList.remove("active");
  });

  var clickedScreenshot = document.querySelector(
    '.screenshot-wrapper img[src="' + imageSrc + '"]'
  ).parentNode;
  clickedScreenshot.classList.add("active");
}




function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

function showImage(index) {
  const modalImage = document.getElementById("modalImage");
  const captionText = document.getElementById("caption");

  modalImage.src = images[index];
  captionText.innerHTML = `Screenshot ${index + 1}`;
  currentImageIndex = index;
  updateNavigationButtons();
}

function updateNavigationButtons() {
  const prevButton = document.getElementById("prevBtn");
  const nextButton = document.getElementById("nextBtn");

  prevButton.disabled = currentImageIndex === 0;
  nextButton.disabled = currentImageIndex === images.length - 1;
}

document.addEventListener("DOMContentLoaded", () => {
  updateNavigationButtons();

  document.getElementById("prevBtn").addEventListener("click", () => {
    if (currentImageIndex > 0) {
      showImage(currentImageIndex - 1);
    }
  });

  document.getElementById("nextBtn").addEventListener("click", () => {
    if (currentImageIndex < images.length - 1) {
      showImage(currentImageIndex + 1);
    }
  });

  document.querySelectorAll(".close").forEach((element) => {
    element.addEventListener("click", closeModal);
  });

  window.addEventListener("click", (event) => {
    if (event.target == document.getElementById("imageModal")) {
      closeModal();
    }
  });
});



$(document).ready(function() {
  $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
  });
});

// navbar on scroll
$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 700) {
      $("nav").addClass("nav-w");
      $(".navbar-menu").addClass("nav-w");
      $(".navbar-item").addClass("nav-dark");
      $(".navbar-link").addClass("nav-dark");
      $(".navbar-burger").removeClass("has-text-white");
      $(".navbar-burger").addClass("has-text-dark");
    } else {
      $("nav").removeClass("nav-w");
      $(".navbar-menu").removeClass("nav-w");
      $(".navbar-item").removeClass("nav-dark");
      $(".navbar-link").removeClass("nav-dark");
      $(".navbar-burger").removeClass("has-text-dark");
      $(".navbar-burger").addClass("has-text-white");
    }
  });
});

// back to top
var btn = $("#backtotop");

$(window).scroll(function () {
  if ($(window).scrollTop() > 100) {
    btn.addClass("show");
  } else {
    btn.removeClass("show");
  }
});

btn.on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: 0 }, "300");
});

// copyright year
document.getElementById("cp-year").innerHTML = new Date().getFullYear()
