const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  alert('Con successo!');
});


const cookiePopup = document.querySelector('#cookie-popup');
const acceptCookiesButton = document.querySelector('#accept-cookies');


setTimeout(() => {
  cookiePopup.style.display = 'block';
}, 5000);

acceptCookiesButton.addEventListener('click', () => {
  cookiePopup.style.display = 'none';
});

const button = document.querySelector('a');

button.addEventListener('click', (event) => {
  event.preventDefault();

  const targetId = event.target.getAttribute('href');

  const targetElement = document.querySelector(targetId);

  targetElement.scrollIntoView({
    behavior: 'smooth',
  });
});