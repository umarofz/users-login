let elForm = document.querySelector(".form");
let elLoginInput = document.querySelector(".form__login");
let elPasswordInput = document.querySelector(".form__password");

let login = "umarov"
let password = "abdulaziz"

elForm.addEventListener("submit", function(evt) {
    evt.preventDefault();
    
    let formLogin = elLoginInput.value.trim();
    let formPassword = elPasswordInput.value.trim();

    if (checkIn(formLogin, formPassword)) {
        localStorage.setItem("token", "ok")
        window.location.href = "/index.html"
    } else {
        alert("ERROR")
    }
    elLoginInput.value = null;
    elPasswordInput.value = null;
})

function checkIn(loginV, passwordV) {
    if (loginV == login && passwordV == password) {
        return true
    } else {
       return false
    }
}