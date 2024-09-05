const burger = document.getElementById('burger');
const burgerList = document.querySelector('.burgerList');
const navburgerItem = document.querySelectorAll('navburger-item')
const listItems = burgerList.querySelectorAll('a');

burger.addEventListener('click', function() {
    burgerList.classList.toggle('hidden')
})

listItems.forEach(function(item) {
    item.addEventListener('click', function() {
      burgerList.classList.add('hidden');
    });
  });


document.addEventListener('DOMContentLoaded', function() {

  const signUpBtn = document.getElementById('signUpLink');
  const loginBtn = document.getElementById('loginLink')
  const login = document.getElementById('loginWrap');
  const signUp = document.getElementById('signUpWrap');

// Hides login or signup section
  signUpBtn.onclick = function(){
    login.style.zIndex = '0';
    login.style.opacity = '0';
    signUp.style.opacity = '1';
    signUp.style.zIndex = '1';
  }

  loginBtn.onclick = function(){
    login.style.zIndex = "1";
    login.style.opacity = "1";
    signUp.style.opacity = "0";
    signUp.style.zIndex = "0";
  }
  

});






