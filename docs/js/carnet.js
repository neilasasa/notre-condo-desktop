function clearScreen() {
    emptyMaj.innerHTML = "";
    emptyMin.innerHTML = "";
    emptyPrev.innerHTML = "";
}

function afficheEntretienMajeure() {
    let selectEntretien = document.getElementById("entretien__year").value;
    emptyMaj.innerHTML = "";
    fetch('http://localhost:8080/api/condos/entretiens/' + selectEntretien)
        .then(function (responseServer) {
            return responseServer.json();
        })
        .then(function (messageServer) {
            for (const obj of messageServer) {
                const entretien = document.querySelector(".entretienMaj__post");
                const entretienID = obj.id;
                const entretienNom = obj.titre;
                const entretienMontant = obj.montant;
                const entretienDate = obj.date;
                const entretienType = obj.type;

                if (entretienType == "majeur") {
                    let textBox = document.createElement('div');
                    textBox.classList.add('accueil__box');
                    entretien.appendChild(textBox);

                    let text = document.createElement('p');
                    text.classList.add('soumission__post--text');

                    let textNom = document.createTextNode(entretienNom);
                    let textID = document.createTextNode('Entretien no: ' + entretienID);
                    let textMontant = document.createTextNode('Montant: ' + entretienMontant + " $");
                    let textDate = document.createTextNode('Date: ' + entretienDate);

                    text.appendChild(textNom);
                    text.appendChild(document.createElement("br"));
                    text.appendChild(textID);
                    text.appendChild(document.createElement("br"));
                    text.appendChild(textMontant);
                    text.appendChild(document.createElement("br"));
                    text.appendChild(textDate);
                    textBox.appendChild(text);
                }
            }
        })
}

function afficheEntretienMineure() {
    let selectEntretien = document.getElementById("entretien__year").value;
    emptyMaj.innerHTML = "";
    fetch('http://localhost:8080/api/condos/entretiens/' + selectEntretien)
        .then(function (responseServer) {
            return responseServer.json();
        })
        .then(function (messageServer) {
            for (const obj of messageServer) {
                const entretien = document.querySelector(".entretienMin__post");
                const entretienID = obj.id;
                const entretienNom = obj.titre;
                const entretienMontant = obj.montant;
                const entretienDate = obj.date;
                const entretienType = obj.type;

                if (entretienType == "mineur") {
                    let textBox = document.createElement('div');
                    textBox.classList.add('accueil__box');
                    entretien.appendChild(textBox);

                    let text = document.createElement('p');
                    text.classList.add('soumission__post--text');

                    let textNom = document.createTextNode(entretienNom);
                    let textID = document.createTextNode('Entretien no: ' + entretienID);
                    let textMontant = document.createTextNode('Montant: ' + entretienMontant + " $");
                    let textDate = document.createTextNode('Date: ' + entretienDate);

                    text.appendChild(textNom);
                    text.appendChild(document.createElement("br"));
                    text.appendChild(textID);
                    text.appendChild(document.createElement("br"));
                    text.appendChild(textMontant);
                    text.appendChild(document.createElement("br"));
                    text.appendChild(textDate);
                    textBox.appendChild(text);
                }
            }
        })
}

function afficheEntretienPrevention() {
    let selectEntretien = document.getElementById("entretien__year").value;
    emptyMaj.innerHTML = "";
    fetch('http://localhost:8080/api/condos/entretiens/' + selectEntretien)
        .then(function (responseServer) {
            return responseServer.json();
        })
        .then(function (messageServer) {
            for (const obj of messageServer) {
                const entretien = document.querySelector(".entretienPrev__post");
                const entretienID = obj.id;
                const entretienNom = obj.titre;
                const entretienMontant = obj.montant;
                const entretienDate = obj.date;
                const entretienType = obj.type;

                if (entretienType == "prevention") {
                    let textBox = document.createElement('div');
                    textBox.classList.add('accueil__box');
                    entretien.appendChild(textBox);

                    let text = document.createElement('p');
                    text.classList.add('soumission__post--text');

                    let textNom = document.createTextNode(entretienNom);
                    let textID = document.createTextNode('Entretien no: ' + entretienID);
                    let textMontant = document.createTextNode('Montant: ' + entretienMontant + " $");
                    let textDate = document.createTextNode('Date: ' + entretienDate);

                    text.appendChild(textNom);
                    text.appendChild(document.createElement("br"));
                    text.appendChild(textID);
                    text.appendChild(document.createElement("br"));
                    text.appendChild(textMontant);
                    text.appendChild(document.createElement("br"));
                    text.appendChild(textDate);
                    textBox.appendChild(text);
                }
            }
        })
}