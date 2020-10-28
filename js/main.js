const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

function toggleModal() {
  modal.classList.toggle("is-open");
}

const buttonAuth = document.querySelector('.button-auth');
const modalAuth = document.querySelector('.modal-auth');
const closeAuth = document.querySelector('.close-auth');
const loginForm = document.querySelector('#logInForm');
const loginInput = document.querySelector('#login');
const userName = document.querySelector('.user-name');
const buttonOut = document.querySelector('.button-out');

let login = localStorage.getItem('deliveryLogin');

function toggleModalAuth() {
  modalAuth.classList.toggle('is-open');
}

buttonAuth.addEventListener('click', () => {
  toggleModalAuth();
});

closeAuth.addEventListener('click', () => {
  toggleModalAuth();
});

loginForm.addEventListener('submit', (e) => {
  logIn(e);
});

function autorized() {
  userName.textContent = login;
  buttonAuth.style.display = `none`;
  userName.style.display = `inline`;
  buttonOut.style.display = `block`;

  buttonOut.addEventListener('click', () => {
    logOut();
  });

  console.log('autorized');
}

function notAutorized() {
  console.log('notAutorized');
}

function logIn(e) {
  e.preventDefault();
  if (loginInput.value != ``) {
    login = loginInput.value;
    localStorage.setItem('deliveryLogin', login);
    buttonAuth.removeEventListener('click', () => toggleModalAuth);
    closeAuth.removeEventListener('click', () => toggleModalAuth);
    loginForm.removeEventListener('submit', () => logIn);
    loginForm.reset();
  
    toggleModalAuth();
    checkAuth();
  } else {
    loginInput.style.borderColor = `red`;
  }
}

function logOut() {
  login = null;
  buttonAuth.style.display = ``;
  userName.style.display = ``;
  buttonOut.style.display = ``;

  localStorage.removeItem('deliveryLogin');
  buttonOut.removeEventListener('click', () => logOut);

  checkAuth();
}

function checkAuth() {
  if (login) {
    autorized();
  } else {
    notAutorized();
  }
}

checkAuth();