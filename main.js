// attach an event listener to add class to html element

window.onload = function () {
    let button = document.getElementById('welcome');
    button.addEventListener('click', function() {
       let elements = document.getElementById('feather-animation');
          elements.classList.add('feathers-active');
    })
};

// read more/less functionality

function toggleSeeMore(e) {
    var parent = e.parentNode;
    parent.classList.toggle('article-more');
}

// change like-button color

function toggleLike(e) {
    // document.querySelector(".like-button").classList.toggle("liked-button")
    var parentOfButton = e.parentNode;
    parentOfButton.classList.toggle('liked-button');
}


