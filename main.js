window.onload = function () {
    let button = document.getElementById('welcome');
    button.addEventListener('click', function() {
       let elements = document.getElementById('feather-animation');
          elements.classList.add('feathers-active');
    })
};
