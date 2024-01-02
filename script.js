// scroll section

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active"); 
}


let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            // active navabar links
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
            // active sections for animations on scrolls
            sec.classList.add("show-animate");
        }
        // if you want to use animation that repeats in scroll use this
        // else {
        //     sec.classList.remove("show-animate");
        // }
    });
    // sticky header
    let header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 100);

    // removing toggle icon and navabar when click navbar links(when scroll)
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active"); 
}

// Google sheet for Contact form
const scriptURL = 'https://script.google.com/macros/s/AKfycbwyJnJ2nvTMujPYxX1VyXpAAxUVDnoi3DF2d1QsiuFGNJ0NN8bqtrw-SC5pzctoKnQ0bA/exec'
const form = document.forms['submit-to-google-sheet']
const msg= document.getElementById("msg")

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        }, 4000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})