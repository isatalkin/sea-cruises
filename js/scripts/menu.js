'use strict';

(function (){

  var header = document.querySelector('.header  .wrapper');
  var headerNav = document.querySelector('.header__nav');

  var menuButton = document.createElement('button');
  menuButton.classList.add('header__burger');
  header.insertBefore(menuButton, headerNav);

  menuButton.addEventListener('click', function() {
    headerNav.classList.toggle('header__nav--show');
  });

})();
