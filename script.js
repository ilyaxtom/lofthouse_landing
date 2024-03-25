const navBtn = document.querySelector(".nav-icon-btn");
const navIcon = document.querySelector(".nav-icon");

navBtn.addEventListener("click", () => {
    navIcon.classList.toggle("nav-icon--active");
})

/* Phone mask */
mask('[input-tel]');

const phoneInputs = document.querySelectorAll('[input-tel]');

phoneInputs.forEach((input) => {
    input.addEventListener('input', () => {
        if (input.value == '+') input.value = '';
    })
    input.addEventListener('blur', () => {
        if (input.value == '+') input.value = '';
    })
})