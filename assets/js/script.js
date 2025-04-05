'use strict';

/**
 * Navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  elem.forEach(item => {
    item.addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  });
};

navToggleEvent(navElemArr);

// Закриваємо меню при натисканні на посилання та переходимо на сторінку
navLinks.forEach(link => {
  link.addEventListener("click", function (event) {
    const href = link.getAttribute("href");

    // Якщо посилання не веде на "#" (тобто не порожнє), переходимо на сторінку
    if (href !== "#") {
      navbar.classList.remove("active");
      overlay.classList.remove("active");

      // Переходимо на нову сторінку (не потрібно для стандартних <a> тегів, але корисно для JS-оброблених SPA)
      window.location.href = href;
    }
  });
});

/**
 * Header sticky & go to top
 */
const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }
});

/**
 * Show/Hide additional text
 */
function toggleText(event) {
  event.preventDefault();
  const text = event.target.previousElementSibling;
  const link = event.target;

  if (text.style.display === "none") {
    text.style.display = "inline";
    link.textContent = "Згорнути";
  } else {
    text.style.display = "none";
    link.textContent = "Читати далі";
  }
}
document.getElementById('searchForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Запобігає стандартній відправці форми

  const query = document.getElementById('searchQuery').value;
  
  // Перевірка на порожній запит
  if (query.trim() === '') {
    document.getElementById('searchResults').innerHTML = 'Будь ласка, введіть запит для пошуку.';
    return;
  }

  // Створення AJAX-запиту
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'search_results.php?query=' + encodeURIComponent(query), true);
  xhr.onload = function() {
    if (xhr.status === 200) {
      // Вивести результати пошуку в div
      document.getElementById('searchResults').innerHTML = xhr.responseText;
    } else {
      document.getElementById('searchResults').innerHTML = 'Помилка пошуку.';
    }
  };
  xhr.send();
});
