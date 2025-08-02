let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const day = document.getElementById("calenderDates");
const currDate = document.getElementById("currentDate");

const months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "july",
  "Augest",
  "September",
  "October",
  "November",
  "December",
];

let clickedDay = null;
let selectedDatElement = null;

const manipulare = () => {
  let dayOne = new Date(year, month, 1).getDay();
  let lastDate = new Date(year, month + 1, 0).getDate();
  let dayEnd = new Date(year, month, lastDate).getDay();
  let monthLastDate = new Date(year, month, 0).getDate();

  let lit = "";

  for (let i = dayOne; i > 0; i--) {
    lit += `<li class="inactive">${monthLastDate - i + 1}</li>`;
  }

  for (let i = 1; i <= lastDate; i++) {
    let isToday =
      i === date.getDate() &&
      month === new Date().getMonth() &&
      year === new Date().getFullYear()
        ? "active"
        : "";

    let highlightClass = clickedDay === i ? "highlight" : "";

    li += `<li class="${isToday} ${highlightClass}" date-day="${i}">${i}</li>`;
  }

  for (let i = dayEnd; i < 6; i++) {
    lit += `<li class="inactive">${i = dayEnd + 1}</li>`;
  }

  currDate.innerText = `${months[month]} ${year}`;
  day.innerHTML = lit;

  addClickListenerToDaus();
};

function addClickListenerToDays() {
    const allDays = day.
}
