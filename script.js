let currentYear = document.querySelector("#current-year");

let now = new Date();

let year = now.getFullYear();

currentYear.innerHTML = `${year}`;
