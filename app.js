// Dark and light modes
'use strict'

// $(document).ready( function(){

$(window).on('load',() => {
    //const switchButton = document.querySelector('.btn');
    const switchButton = document.getElementById('dark-mode');

    //console.log(switchButton);
    //const switchAlso = document.querySelector('.btn-dark');

    switchButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');

        let currentClassName = document.body.className;

        if(currentClassName == 'dark-mode') {
            switchButton.innerHTML = "<span style='color: blue;'> Make it Light Mode </span>"
        } else {
            switchButton.innerHTML = "Make it dark mode"
        }
    });

    
});



