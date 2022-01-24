const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('menu__nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('show');
});


function logout(){
    localStorage.clear();
}