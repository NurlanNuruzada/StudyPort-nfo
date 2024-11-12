import en from './Translate/en.js';
import ru from './Translate/ru.js';
import az from './Translate/az.js';

const translations = { en, ru, az };

// Elements
const dropdownButton = document.getElementById('LanguageButton');
const dropdownMenu = document.getElementById('dropdownMenu');
const arrowIcon = dropdownButton.querySelector('svg');
const buttonText = document.getElementById('lang-text');

// Open and close the dropdown menu on button click
dropdownButton.addEventListener('click', (event) => {
    event.stopPropagation();
    dropdownMenu.classList.toggle('show');
    arrowIcon.classList.toggle('arrow-down');
});

// Close the dropdown if clicking outside
window.addEventListener('click', (event) => {
    if (!event.target.closest('#LanguageButton')) {
        dropdownMenu.classList.remove('show');
        arrowIcon.classList.remove('arrow-down');
    }
});

// Translate elements based on selected language
function applyTranslations(lang) {
    document.querySelectorAll('[data-i18n-key]').forEach((element) => {
        const key = element.getAttribute('data-i18n-key');
        if (translations[lang] && translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });
}

// Change language and update UI
window.changeLanguage = function (lang) {
    buttonText.innerHTML = lang === 'en' ? 'En' : lang === 'ru' ? 'Ru' : 'Az';
    dropdownMenu.classList.remove('show');
    arrowIcon.classList.remove('arrow-down');

    // Apply the translations
    applyTranslations(lang);
};

// Initialize page with default language
document.addEventListener("DOMContentLoaded", () => {
    changeLanguage('en'); // Default language
});
