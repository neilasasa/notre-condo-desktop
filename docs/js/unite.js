let unite = [{
        Mois: "Janvier",
        État: "Payé"
    },
    {
        Mois: "Janvier",
        État: "Payé"
    },
    {
        Mois: "Février",
        État: "Payé"
    },
    {
        Mois: "Mars",
        État: "Payé"
    },
    {
        Mois: "Avril",
        État: "Payé"
    },
    {
        Mois: "Mai",
        État: "Payé"
    },
    {
        Mois: "Juin",
        État: "Payé"
    },
    {
        Mois: "Juillet",
        État: "Payé"
    },
    {
        Mois: "Aout",
        État: "Payé"
    },
    {
        Mois: "Septembre",
        État: "Payé"
    },
    {
        Mois: "Octobre",
        État: "Payé"
    },
    {
        Mois: "Novembre",
        État: "Payé"
    },
    {
        Mois: "Décembre",
        État: "Payé"
    }
];

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    row.classList.add('unite__table-header');

    for (let key of data) {
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}

function generateTable(table, data) {
    for (let element of data) {
        let row = table.insertRow();
        row.classList.add('unite__row');
        for (key in element) {
            let cell = row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.classList.add('unite__cell');
            cell.appendChild(text);
        }
    }
}

let table = document.querySelector("table");
let data = Object.keys(unite[0]);
generateTable(table, unite);
generateTableHead(table, data);