document.title = "project-js-5";
let input_1 = document.querySelector(".name-1");
let input_2 = document.querySelector(".name-2");
let input_3 = document.querySelector(".name-3");
let input_4 = document.querySelector(".name-4");
window.onload = function () {
    if (input_1.value === "") {
        input_1.value = window.sessionStorage.getItem("input_1");
    }; 
    if (input_2.value === "") {
        input_2.value = window.sessionStorage.getItem("input_2");
    }; 
    if (input_3.value === "") {
        input_3.value = window.sessionStorage.getItem("input_3");
    }; 
    if (input_4.value === "") {
        input_4.value = window.sessionStorage.getItem("input_4");
    }; 
    input_1.focus();
};
input_1.addEventListener("blur",function () {
    input_2.focus();
});
input_2.addEventListener("blur",function () {
    input_3.focus();
});
input_3.addEventListener("blur",function () {
    input_4.focus();
});
input_1.onmouseleave = function () {
    window.sessionStorage.setItem("input_1", this.value);
};
input_2.onmouseleave = function () {
    window.sessionStorage.setItem("input_2", this.value);
};
input_3.onmouseleave = function () {
    window.sessionStorage.setItem("input_3", this.value);
};
input_4.onmouseleave = function () {
    window.sessionStorage.setItem("input_4", this.value);
};
input_1.addEventListener("blur", function () {
    window.sessionStorage.setItem("input_1", this.value);
});
input_2.addEventListener("blur", function () {
    window.sessionStorage.setItem("input_2", this.value);
});
input_3.addEventListener("blur", function () {
    window.sessionStorage.setItem("input_3", this.value);
});
input_4.addEventListener("blur", function () {
    window.sessionStorage.setItem("input_4", this.value);
});
let nameInput = document.getElementById("name");
let passwordInput = document.getElementById("password");
let mailInput = document.getElementById("mail");
document.forms[0].addEventListener("submit", function (event) {
    let nameValid = false;
    let passwordValid = false;
    let mailValid = false;
    if (nameInput.value !== "" && 7 <= nameInput.value.length) {
        nameValid = true;
    }
    if (passwordInput.value !== "" && 11 <= passwordInput.value.length) {
        passwordValid = true;
    }
    if (mailInput.value !== "") {
        mailValid = true;
    }
    if (nameValid === false || passwordValid === false || mailValid === false) {
        event.preventDefault();
    }
});
document.getElementById("register").onsubmit = function () {
    let phoneInput = document.getElementById("phone").value;
    let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
    let validationResult_1 = phoneRe.test(phoneInput);
    if (validationResult_1 === false) {
        return false;
    }
    return true;
};