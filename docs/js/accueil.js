const buttonSondage = document.getElementById('sondage-button');
const sondage = document.getElementById('sondage');

buttonSondage.addEventListener('click', (event) => {
    event.preventDefault();

    const radios = document.querySelectorAll('input[name="rep"]');
    let selectedValue;

    for (const radio in radios) {
        if (radio.checked) {
            alert(radio.valueOf)
            selectedValue = radio.value;
            break;
        }
    }

    alert(selectedValue);
    // location.reload();
})