'use strict';

const switcher = document.querySelector('.bld');

switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')

    var className = documente.body.className; 
    if (className == 'light-theme') {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
});