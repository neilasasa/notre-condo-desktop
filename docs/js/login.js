const loginForm = document.getElementById('login__form');
const button = document.getElementById('login__button');
const error = document.getElementById('error-message');
const isError = true;
let uniteID;


button.addEventListener('click', async (event) => {
    event.preventDefault();

    const user = loginForm.user.value;
    const password = loginForm.password.value;


    const data = {
        username: user,
        password: password
    };

    await fetch('http://localhost:8080/api/condos/login', {
            // Adding method type   
            method: 'POST',

            // Adding body or contents to send
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json; charset=UTF-8'
            }
        })

        .then(function (response) {
            response.json().then(function (json) {
                localStorage.setItem('coproId', json.id);
                localStorage.setItem('uniteId', json.listUnite[0].id); 
                localStorage.setItem('uniteNo', json.listUnite[0].numeroUnite);               

                window.location.href = "accueil.html";
                error.classList.remove('error');                
            })
        })

    error.classList.add('error');
})