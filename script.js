let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

const typed = new Typed('.multiple-text', {
    strings: ['Fullstack Developer', 'Frontend Developer', 'Backend Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


//contact form
const form = document.querySelector("form");
const fullname = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullname.value} <br>
                         Email: ${email.value} <br>
                         Phone Number: ${phone.value} <br>
                         Message: ${message.value}`;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kranthikumarpeerikatla@gmail.com",
        Password : "E9DEC99A199466D86AD1054AD3AA0E25E1F5",
        To : 'kranthikumarpeerikatla@gmail.com',
        From : "kranthikumarpeerikatla@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => alert(message)
    );
}

form.addEventListener("submit", (error) => {
    error.preventDefault();

    sendEmail();
});