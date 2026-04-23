// The DOM elements that display the countdown values
const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.querySelector('.loading');

// Current year (e.g., 2026)
const currentYear = new Date().getFullYear();

// Create a Date object for next New Year's Day at midnight
const newYearTime = new Date(`January 01, ${currentYear + 1} 00:00:00`);

// set background year
year.innerHTML = currentYear + 1;

// Function to update the countdown timer
function updateCountdown() {
  
  const currentTime = new Date();

  // The  differnce  in milliseconds between now and New Year
  const diff = newYearTime - currentTime;
  console.log(diff);

  // Convert milliseconds into days, hours, minutes, and seconds
  const d = Math.floor(diff / 1000 / 60 / 60 / 24);      // Total days left
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;      // Remaining hours
  const m = Math.floor(diff / 1000 / 60) % 60;           // Remaining minutes
  const s = Math.floor(diff / 1000) % 60;                // Remaining seconds

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;               // Add leading zero if needed
  minutes.innerHTML = m < 10 ? '0' + m : m;          // Add leading zero if needed  
  seconds.innerHTML = s < 10 ? '0' + s : s;          // Add leading zero if needed  

}

// show spinner before countdown
setTimeout(() => {
  loading.remove();
  countdown.style.display = 'flex';
}, 1000);


// Run updateCountdown() every second 
setInterval(updateCountdown, 1000);
