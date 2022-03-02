const signupForm = document.querySelector('#sign-up-form');
const emailInput = document.getElementsByName('email')[0];
const passwordInput = document.getElementsByName('password')[0];
const passwordConfirmInput = document.getElementsByName('confirm_password')[0];

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
