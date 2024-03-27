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