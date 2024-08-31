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