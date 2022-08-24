let elem = document.querySelector("#email-input");
let warning = document.querySelector("#invalid-warning");
warning.style.visibility = "hidden";

function HandleInvalid() {
    elem.style.border = "1px solid red";
    warning.style.visibility = "visible";

}
