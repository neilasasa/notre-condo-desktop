let uniteList = [];
let montantDu;

let formater = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const coproId = JSON.parse(localStorage.getItem('coproId'));
const uniteId = JSON.parse(localStorage.getItem('uniteId'));
const uniteNo = JSON.parse(localStorage.getItem('uniteNo'));

let selectYear = document.getElementById("choose__year").value;

fetch('http://localhost:8080/api/condos/montant/' + uniteNo + '/' + coproId) //retourne le montant par mois calculer par le wervice web
    .then(function (response) {
        response.json().then(function (json) {
            montantDu = json;
            document.getElementById("noUnite").innerHTML = "Unité " + uniteNo;
            document.getElementById("mensualite").innerHTML = "Mensualité " + formater.format(montantDu);
        })
    })

fetch('http://localhost:8080/api/condos/paiement/' + selectYear + '/' + uniteId) //retourne un array de la table paiement
    .then(function (response) {
        response.json().then(function (json) {
            const table = document.querySelector(".unite__table");

            let tableRowHead = document.createElement('tr');
            tableRowHead.classList.add('unite__table-header');
            table.appendChild(tableRowHead);

            let tableHeadPaye = document.createElement('th');
            let tableHeadPayeDate = document.createElement('th');
            let tableHeadPayeDiference = document.createElement('th');

            tableHeadPayeDate.innerHTML = "Date";
            tableHeadPaye.innerHTML = "Payé";
            tableHeadPayeDiference.innerHTML = "Solde";

            tableRowHead.appendChild(tableHeadPayeDate);
            tableRowHead.appendChild(tableHeadPaye);
            tableRowHead.appendChild(tableHeadPayeDiference);

            for (const obj of json) {
                const montantPaye = obj.montant;
                const datePaye = obj.date;
                let solde = montantDu - montantPaye;


                let tableRow = document.createElement('tr');
                tableRow.classList.add('unite__row');
                table.appendChild(tableRow);

                let tableCellPaye = document.createElement('td');
                let tableCellPayeDate = document.createElement('td');
                let tableCellPayeDiference = document.createElement('td');

                let textPayeDate = document.createTextNode(datePaye);
                let textPaye = document.createTextNode(formater.format(montantPaye));
                let textPayeDiference = document.createTextNode(formater.format(montantDu - montantPaye));

                // if (solde > 0){
                //     tableRow.classList.add('attention');
                // } else{
                //     tableRow.classList.remove('attention');
                // }

                tableCellPayeDate.appendChild(textPayeDate);
                tableCellPaye.appendChild(textPaye);
                tableCellPayeDiference.appendChild(textPayeDiference);

                tableRow.appendChild(tableCellPayeDate);
                tableRow.appendChild(tableCellPaye);
                tableRow.appendChild(tableCellPayeDiference);
            }
        })
    })