const Openbtn = document.querySelector('.openbtn');
const Closebtn = document.querySelector('.closebtn');
const Navbar = document.querySelector('.nav');
const body = document.querySelector('body');

Openbtn.addEventListener('click',()=>{
    Navbar.classList.add('show');
    body.classList.add('Turnofthescroll');
})

Closebtn.addEventListener('click',()=>{
    Navbar.classList.remove('show');
    body.classList.remove('Turnofthescroll');
})