// 4
const loginForm = document.querySelector(".login-form");
const form = loginForm.addEventListener("submit", (event) => {
    event.preventDefault()
    const elems = event.target.elements;
    const elemEmailTrim = elems.email.value.trim();
    const elemPassTrim = elems.password.value.trim();
    if (!elemEmailTrim || !elemPassTrim) {
        alert("All form fields must be filled in");
    } else {
        const newArray = {
            email: elemEmailTrim,
            password: elemPassTrim
        }
        console.log(newArray);
        loginForm.reset()
    }
});