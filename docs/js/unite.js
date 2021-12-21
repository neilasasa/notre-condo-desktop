let unite=[
    {Mois: "Janvier", Etat:"Payé" },
    { Mois: "Janvier", Etat:"Payé" },
    { Mois: "Février", Etat:"Payé" },
    { Mois: "Mars", Etat:"Payé" },
    { Mois: "Avril", Etat:"Payé" },
    { Mois: "Mai", Etat:"Payé" },
    { Mois: "Juin", Etat:"Payé" },
    { Mois: "Juillet", Etat:"Payé" },
    { Mois: "Aout", Etat:"Payé" },
    { Mois: "Septembre", Etat:"Payé" },
    { Mois: "Octobre", Etat:"Payé" },
    { Mois: "Novembre", Etat:"Payé" },
    { Mois: "Décembre", Etat:"Payé" }
];

function generateTableHead(table, data){
    let thead=table.createTHead();
    let row = thead.insertRow();
    for (let key of data){
        let th = document.createElement("th");
        let text = document.createTextNode(key);
        th.appendChild(text);
        row.appendChild(th);
    }
}



function generateTable(table, data){
    for(let element of data){
        let row = table.insertRow();
        for(key in element){
            let cell=row.insertCell();
            let text = document.createTextNode(element[key]);
            cell.appendChild(text);
        }
    }
}

let table = document.querySelector("table");
let data = Object.keys(unite[0]);
generateTable(table, unite);
generateTableHead(table, data);
