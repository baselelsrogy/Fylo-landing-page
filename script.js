const input = document.querySelector('.access_card-input');
const btn = document.querySelector('.access_card-button');
const messageErr = document.querySelector('.access_card-err');

btn.addEventListener('click', function (e) {
  e.preventDefault();

  const email = input.value.trim();
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!regex.test(email)) {
    messageErr.textContent = 'Please enter a valid email';
    messageErr.classList.add('error');
  } else {
    messageErr.textContent = 'Email is valid :)';
    messageErr.classList.remove('error');
    messageErr.classList.add('valid');
  }
});
