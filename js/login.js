const loginForm = document.getElementById('loginForm');

const userToken = localStorage.getItem(window.USER_TOKEN_KEY);

if (userToken) {
  navigateToIndex(userToken);
}

const onSubmit = async (event) => {
  event.preventDefault();
  const inputEmail = document.getElementById('inputEmail');
  const inputPassword = document.getElementById('inputPassword');

  const errors = [];

  if (inputEmail.value === "") {
    errors.push('please enter your mail');
  }
  if (inputPassword.value === "") {
    errors.push('please enter your password');
  }
  if (errors.length) {
    alert(errors);
    return;
  }

  const result = await window.ApiService.login(inputEmail.value, inputPassword.value) 

  if (result && result.token) {

    ;
    navigateToIndex(result.token);
  }

};
loginForm.addEventListener('submit', onSubmit);
