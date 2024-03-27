const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-icon");
const navBody = document.querySelector('.nav-body');
const body = document.body;

navBtn.addEventListener("click", () => {
    navIcon.classList.toggle("nav-icon--active");
    navBody.classList.toggle("active");
    body.classList.toggle('lock');
})



// 

// navBtn.addEventListener('click', () => {
//     navBody.classList.toggle('active');
//     body.classList.toggle('lock');
// })

const anchors = document.querySelectorAll('a[href*="#"');

anchors.forEach(anchor => {
    anchor.addEventListener('click', event => {
        navIcon.classList.toggle("nav-icon--active");
        navBody.classList.toggle("active");
        body.classList.toggle('lock');
        event.preventDefault();

        const blockID = anchor.getAttribute('href').substring(1);

        document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
})