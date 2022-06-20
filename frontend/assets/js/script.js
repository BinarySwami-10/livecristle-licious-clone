let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');


menu.addEventListener('click', () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scrollY > 150) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

// Nav dropdown

let dropdown = document.querySelector('.dropdown');
let category = document.querySelector('.category');

category.addEventListener('click', () => {
    dropdown.classList.toggle('displaydropdown');
});

// location dropdown

let locationDropdown = document.querySelector('.locationdropdown');
let locationDiv = document.getElementById('location');

locationDiv.addEventListener('click', () => {
    locationDropdown.classList.toggle('displaylocationdropdown');
});



// footer show_more
let showMore = document.querySelector('.show_more');
let product = document.querySelectorAll('#product');

showMore.addEventListener('click', () => {
    product.classList.toggle('productdisplay');
});