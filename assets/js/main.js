
document.addEventListener("DOMContentLoaded", function () {
  // Select the stats section
  const statsSection = document.querySelector(".statistic-container");
  const counters = document.querySelectorAll(".stats-number");

  // Define the observer options
  const options = {
    root: null, // The viewport
    threshold: 0.2 // Start counting when 20% of the section is visible
  };

  // Define the observer callback
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounting();
        observer.unobserve(statsSection); // Stop observing once counting starts
      }
    });
  }, options);

  // Attach observer to the stats section
  observer.observe(statsSection);

  function startCounting() {
    // Get the highest target to synchronize all counters
    const maxTarget = Math.max(...Array.from(counters).map(counter => +counter.innerText));
    const duration = 2000; // Total duration in ms
    const steps = 60; // Number of steps
    const incrementTime = duration / steps;

    counters.forEach(counter => {
      const target = +counter.innerText;
      const increment = target / steps;
      counter.innerText = "0";
      let count = 0;

      function updateCounter() {
        if (count < steps) {
          counter.innerText = Math.ceil(count * increment);
          count++;
          setTimeout(updateCounter, incrementTime);
        } else {
          counter.innerText = target; // Ensure exact target number
        }
      }

      updateCounter();
    });
  }
});

(function () {
  "use strict";

  // ======= Sticky
  window.onscroll = function () {
    const ud_header = document.querySelector(".ud-header");
    const sticky = ud_header.offsetTop;
    const logo = document.querySelector(".navbar-brand img");
    const nav_text = document.querySelectorAll(".nav-text");
    const translate_button = document.querySelector(".ud-main-btn")
    const togglerIcons = document.querySelectorAll('.toggler-icon');

    if (document.documentElement.scrollTop > 10 || document.body.scrollTop > 10) {
      ud_header.classList.add("sticky");
    } else {
      ud_header.classList.remove("sticky");
    }
    const ud_hero = document.querySelector(".ud-hero");
    const heroHeight = ud_hero ? ud_hero.offsetHeight : 0;
    if (document.body.scrollTop > heroHeight || document.documentElement.scrollTop > heroHeight) {
      ud_header.classList.add("sticky2");
      ud_header.classList.remove("sticky");
      nav_text.forEach(nav_text => {
        nav_text.classList.add("color-gray");
      });
      translate_button.classList.add("color-translate")
      togglerIcons.forEach(icon => {
        icon.style.backgroundColor = "gray"; // Change to the specified color
      });
    } else {
      togglerIcons.forEach(icon => {
        icon.style.backgroundColor = "white" ; // Change to the specified color
      });
      ud_header.classList.add("sticky");
      ud_header.classList.remove("sticky2");
      nav_text.forEach(nav_text => {
        nav_text.classList.remove("color-gray");
      });
      translate_button.classList.remove("color-translate")
    }



    // === logo change
    if (ud_header.classList.contains("sticky")) {
      logo.src = "logo192.png";
    } else {
      logo.src = "logo192.png";
    }

    // show or hide the back-top-top button
    const backToTop = document.querySelector(".back-to-top");
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      backToTop.style.display = "flex";
    } else {
      backToTop.style.display = "none";
    }
  };

  //===== close navbar-collapse when a  clicked
  let navbarToggler = document.querySelector(".navbar-toggler");
  const navbarCollapse = document.querySelector(".navbar-collapse");

  document.querySelectorAll(".ud-menu-scroll").forEach((e) =>
    e.addEventListener("click", () => {
      navbarToggler.classList.remove("active");
      navbarCollapse.classList.remove("show");
    })
  );
  navbarToggler.addEventListener("click", function () {
    navbarToggler.classList.toggle("active");
    navbarCollapse.classList.toggle("show");
  });

  // ===== submenu
  const submenuButton = document.querySelectorAll(".nav-item-has-children");
  submenuButton.forEach((elem) => {
    elem.querySelector("a").addEventListener("click", () => {
      elem.querySelector(".ud-submenu").classList.toggle("show");
    });
  });


  // ====== scroll top js
  function scrollTo(element, to = 0, duration = 500) {
    const start = element.scrollTop;
    const change = to - start;
    const increment = 20;
    let currentTime = 0;

    const animateScroll = () => {
      currentTime += increment;

      const val = Math.easeInOutQuad(currentTime, start, change, duration);

      element.scrollTop = val;

      if (currentTime < duration) {
        setTimeout(animateScroll, increment);
      }
    };

    animateScroll();
  }

  Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  document.querySelector(".back-to-top").onclick = () => {
    scrollTo(document.documentElement);
  };
})();
function showInitial() {
  document.getElementById("firstButton").classList.add("selected-button");
  document.getElementById("firstButton").classList.remove("non-selected-button");
  document.getElementById("secondButton").classList.add("non-selected-button");
  document.getElementById("secondButton").classList.remove("selected-button");
  document.getElementById("initialSection").style.display = "flex"
  document.getElementById("secondarySection").style.display = "none"
}

function showSecondary() {
  document.getElementById("firstButton").classList.add("non-selected-button");
  document.getElementById("firstButton").classList.remove("selected-button");
  document.getElementById("secondButton").classList.add("selected-button");
  document.getElementById("secondButton").classList.remove("non-selected-button");
  document.getElementById("initialSection").style.display = "none"
  document.getElementById("secondarySection").style.display = "flex"
}

//Slider start 
const carouselElement = document.getElementById('carouselExampleCaptions');
const carouselInstance = new bootstrap.Carousel(carouselElement, {
  interval: 9000,
  touch: true,
});
