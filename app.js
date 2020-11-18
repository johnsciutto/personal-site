// Auto-update the current year in the copywright.
const yearText = document.querySelector('.copy-year');
const currentYear = new Date().getFullYear();
yearText.innerText = currentYear;
