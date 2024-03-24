const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-icon");

navBtn.addEventListener("click", () => {
    navIcon.classList.toggle("nav-icon--active");
})