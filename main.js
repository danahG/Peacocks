// attach an event listener to add class to html element

window.onload = function () {
    let button = document.getElementById('welcome');
    button.addEventListener('click', function() {
       let elements = document.getElementById('feather-animation');
          elements.classList.add('feathers-active');
    })
};

// read more/less functionality

function toggleSeeMoreOne() {
    if(document.getElementById("textarea-one").style.display == 'none') {
        document.getElementById("textarea-one").style.display = 'inline-block';
        document.getElementById("seeMore-one").innerHTML = '<i class="fa fa-angle-double-up" aria-hidden="true"></i>';
    } else {
        document.getElementById("textarea-one").style.display = 'none';
        document.getElementById("seeMore-one").innerHTML = '<i class="fa fa-angle-double-down" aria-hidden="true"></i>';
    }
}

function toggleSeeMoreTwo() {
    if(document.getElementById("textarea-two").style.display == 'none') {
        document.getElementById("textarea-two").style.display = 'inline-block';
        document.getElementById("seeMore-two").innerHTML = '<i class="fa fa-angle-double-up" aria-hidden="true"></i>';
    } else {
        document.getElementById("textarea-two").style.display = 'none';
        document.getElementById("seeMore-two").innerHTML = '<i class="fa fa-angle-double-down" aria-hidden="true"></i>';
    }
}

function toggleSeeMoreThree() {
    if(document.getElementById("textarea-three").style.display == 'none') {
        document.getElementById("textarea-three").style.display = 'inline-block';
        document.getElementById("seeMore-three").innerHTML = '<i class="fa fa-angle-double-up" aria-hidden="true"></i>';
    } else {
        document.getElementById("textarea-three").style.display = 'none';
        document.getElementById("seeMore-three").innerHTML = '<i class="fa fa-angle-double-down" aria-hidden="true"></i>';
    }
}

