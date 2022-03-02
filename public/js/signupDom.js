const signupForm = document.querySelector('.signup-form');
const loginForm = document.querySelector('.login-form');
const emailInput = document.getElementsByName('email')[0];
const passwordInput = document.getElementsByName('password')[0];
const passwordConfirmInput = document.getElementsByName('confirm_password')[0];
const loginLink = document.querySelector('.login-link');
const signupLink = document.querySelector('.signup-link');

signupForm.addEventListener('submit', e => {
  e.preventDefault();
  const email = emailInput.value;
  const password = passwordInput.value;
  const passwordConfirm = passwordConfirmInput.value;

  if (!email) {
    emailInput.classList.add('error');
    emailInput.setAttribute('placeholder', 'Email is required');
    return;
  }

  if (!password) {
    passwordInput.classList.add('error');
    passwordInput.setAttribute('placeholder', 'Password is required');
    return;
  }

  if (password !== passwordConfirm) {
    passwordInput.classList.add('error');
    passwordInput.setAttribute('placeholder', 'Passwords do not match');
    passwordConfirmInput.classList.add('error');
    passwordConfirmInput.value = '';
    passwordConfirmInput.setAttribute('placeholder', 'Passwords do not match');
    return;
  }

  window.location.href = '/home';
});

loginLink.addEventListener('click', e => {
  e.preventDefault();
  signupForm.classList.add('hidden');
  loginLink.classList.add('hidden');
  document.querySelector('.login-form').classList.remove('hidden');
});

signupLink.addEventListener('click', e => {
  e.preventDefault();
  signupForm.classList.remove('hidden');
  loginLink.classList.remove('hidden');
  document.querySelector('.login-form').classList.add('hidden');
});

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  const emailInput = loginForm.querySelector('input[name="email"]');
  const passwordInput = loginForm.querySelector('input[name="password"]');

  const email = emailInput.value;
  console.log(email);
  const password = passwordInput.value;

  if (!email) {
    emailInput.classList.add('error');
    emailInput.setAttribute('placeholder', 'Email is required');
    return;
  }

  if (!password) {
    passwordInput.classList.add('error');
    passwordInput.setAttribute('placeholder', 'Password is required');
    return;
  }

  if (email !== 'admin@gmail.com' || password !== 'admin') {
    passwordInput.classList.add('error');
    passwordInput.value = '';
    passwordInput.setAttribute('placeholder', 'Invalid email or password');
    return;
  }

  window.location.href = '/home';
});
