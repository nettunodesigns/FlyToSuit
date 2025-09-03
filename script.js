/*
 document.querySelectorAll(".animazione-fadeIn").forEach(element => {
   element.style.opacity = 1;
});
*/

function changeLanguage(countryCode, languageName) {
    const button = document.getElementById('languageButton');
    button.className = `language-button ${countryCode}`;
}
