// close
const close = document.getElementById("close");
// open
const open = document.getElementById("open");
// modal
const modal = document.getElementById("modal");

open.addEventListener('click', () => modal.classList.add('show-modal'));
close.addEventListener('click', () => modal.classList.remove('show-modal'));

window.addEventListener('click', e => {
    e.target === modal ? modal.classList.remove('show-modal') : false;
})

let nameField = document.getElementById("name");
let emailField = document.getElementById("email");
let passwordField = document.getElementById("password");
let password2Field = document.getElementById("password2");

function confirmFilledOut(nameField, emailField, passwordField, password2Field) {
    if (nameField.value === null) {
        nameField.style.border = '1px solid red';
    }
}
