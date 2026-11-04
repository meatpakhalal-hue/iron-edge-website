/* =================================================================
   IRON EDGE: shared JavaScript for every page
   ================================================================= */


/* -----------------------------------------------------------------
   1. PHONE MENU: open and close the navigation
   ----------------------------------------------------------------- */

// Find the menu button and the navigation on the page
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

// When the button is clicked (tapped)...
menuButton.addEventListener('click', function () {
  // ...add the class "is-open" if it's missing, or remove it if it's there.
  // The CSS shows the nav only when it has "is-open".
  const isOpen = nav.classList.toggle('is-open');

  // Tell screen readers whether the menu is now open (true) or closed (false)
  menuButton.setAttribute('aria-expanded', isOpen);
});


/* -----------------------------------------------------------------
   2. FOOTER YEAR: always shows the current year automatically
   ----------------------------------------------------------------- */
document.getElementById('year').textContent = new Date().getFullYear();


/* -----------------------------------------------------------------
   3. BOOKING FORM: send it without leaving the page
   Only runs on the Contact page (other pages have no booking form).
   Without this code the form still works: the visitor would just
   see Formspree's own "thank you" page instead of our message.
   ----------------------------------------------------------------- */
const bookingForm = document.querySelector('.booking-form');

if (bookingForm) {
  const statusMessage = bookingForm.querySelector('.form-status');
  const submitButton = bookingForm.querySelector('button[type="submit"]');

  // Fill the "Preferred Monday" drop-down with the next 8 Mondays.
  // (On-site visits are Mondays only.)
  const dateSelect = bookingForm.querySelector('#date');
  const day = new Date();

  // Move forward one day at a time until we reach a Monday.
  // getDay() numbers the days: 0 = Sunday, 1 = Monday ... 6 = Saturday.
  // We always move at least one day, so if today is Monday we skip to next week.
  do {
    day.setDate(day.getDate() + 1);
  } while (day.getDay() !== 1);

  for (let i = 0; i < 8; i++) {
    const option = document.createElement('option');
    // Shows e.g. "Monday, November 9, 2026"
    option.textContent = day.toLocaleDateString('en-CA', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    dateSelect.appendChild(option);
    day.setDate(day.getDate() + 7);   // jump ahead one week
  }

  bookingForm.addEventListener('submit', async function (event) {
    // Stop the browser's normal "go to another page" behaviour
    event.preventDefault();

    // Make sure at least one "What needs sharpening?" box is ticked
    if (!bookingForm.querySelector('input[name="Items"]:checked')) {
      statusMessage.className = 'form-status is-error';
      statusMessage.textContent = 'Please tick at least one item that needs sharpening.';
      return;
    }

    // Show that something is happening, and stop double-clicks
    submitButton.disabled = true;
    submitButton.textContent = 'Sending…';

    try {
      // Send all the form answers to Formspree
      const response = await fetch(bookingForm.action, {
        method: 'POST',
        body: new FormData(bookingForm),
        headers: { Accept: 'application/json' }
      });

      if (response.ok) {
        bookingForm.reset();   // clear the form
        statusMessage.className = 'form-status is-success';
        statusMessage.textContent = 'Thank you! Your request has been sent. We\'ll be in touch soon to confirm.';
      } else {
        throw new Error('Formspree returned an error');
      }
    } catch (error) {
      // Something went wrong (no internet, wrong form ID, etc.)
      statusMessage.className = 'form-status is-error';
      statusMessage.textContent = 'Sorry, something went wrong. Please call or email us instead.';
    }

    // Put the button back to normal
    submitButton.disabled = false;
    submitButton.textContent = 'Send request';
  });
}
