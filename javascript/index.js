let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-bar');
let sections = document.querySelector('section');
let navlinks = document.querySelector('header nav a');


window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top > offset && top < offset + height){{
            navlinks.forEach(links =>{

            })
        }
    }