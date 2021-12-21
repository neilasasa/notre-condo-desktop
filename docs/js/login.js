const loginForm = document.getElementById('login__form');
const button = document.getElementById('login__button');

button.addEventListener('click', (event) => {
    event.preventDefault();

    const email = loginForm.email.value;
    const password = loginForm.password.value;

    if (email === "admin@admin.com" && password === "admin") {
        alert("Connexion bien réussie.");
        window.location.href="accueil.html";
        // location.reload();
    } else {
        const error = document.getElementById('error-message');
        error.classList.add('error');
    }
})