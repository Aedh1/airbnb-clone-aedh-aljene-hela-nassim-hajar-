// JavaScript loaded
console.log("JavaScript loaded");

// Toggle profile popup and overlay
const accountIcon = document.getElementById('account');
const profilePopup = document.getElementById('user-profile-popup');
const overlay = document.getElementById('overlay');
const closeBtn = document.querySelector('.close-btn');
const body = document.body;

accountIcon.addEventListener('click', () => {
  profilePopup.classList.toggle('show');
  overlay.classList.toggle('show');
  body.classList.toggle('no-scroll'); // Prevent body scrolling when popup is active
});

closeBtn.addEventListener('click', () => {
  profilePopup.classList.remove('show');
  overlay.classList.remove('show');
  body.classList.remove('no-scroll'); // Restore body scrolling when popup is closed
});

// Close popup and overlay if clicked outside
window.addEventListener('click', function(event) {
  if (!accountIcon.contains(event.target) && !profilePopup.contains(event.target) && !closeBtn.contains(event.target)) {
    profilePopup.classList.remove('show');
    overlay.classList.remove('show');
    body.classList.remove('no-scroll'); // Restore body scrolling
  }
});


// Date Picker Popup
const dateBtn = document.getElementById('date-btn');
const datePopup = document.getElementById('date-popup');
const overlayDate = document.getElementById('overlay-date');
const closeBtnDate = document.querySelector('.close-btn-date');

dateBtn.addEventListener('click', () => {
    datePopup.classList.toggle('show');
    overlayDate.classList.toggle('show');
    body.classList.toggle('no-scroll'); // Prevent body scrolling when popup is active
});

closeBtnDate.addEventListener('click', () => {
    datePopup.classList.remove('show');
    overlayDate.classList.remove('show');
    body.classList.remove('no-scroll'); // Restore body scrolling when popup is closed
});

// Close popup and overlay if clicked outside
window.addEventListener('click', function(event) {
    if (!dateBtn.contains(event.target) && !datePopup.contains(event.target) && !closeBtnDate.contains(event.target)) {
        datePopup.classList.remove('show');
        overlayDate.classList.remove('show');
        body.classList.remove('no-scroll'); // Restore body scrolling
    }
});
