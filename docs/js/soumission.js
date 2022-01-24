function clearScreen() {
    emptyExt.innerHTML = "";
    emptyInt.innerHTML = "";
    emptyCompt.innerHTML = "";
}

function afficheSoumissionExt() {
    let selectSoumission = document.getElementById("choose__year").value;
    emptyExt.innerHTML = "";
    fetch('http://localhost:8080/api/condos/soumissions/' + selectSoumission)
        .then(function (responseServer) {
            return responseServer.json();
        })
        .then(function (messageServer) {
            for (const obj of messageServer) {
                const soumission = document.querySelector(".soumissionExt__post");
                const soumissionID = obj.id;
                const soumissionNom = obj.nom;
                const soumissionMontant = obj.montant;
                const soumissionDate = obj.anneeBugetaire;
                const soumissionImage = obj.image;
                const soumissionType = obj.type;

                if (soumissionType == "exterieur") {
                    let textBox = document.createElement('div');
                    textBox.classList.add('accueil__box');
                    soumission.appendChild(textBox);

                    let text = document.createElement('p');
                    text.classList.add('soumission__post--text');

                    let textNom = document.createTextNode(soumissionNom);
                    let textID = document.createTextNode('Soumission no: ' + soumissionID);
                    let textMontant = document.createTextNode('Montant: ' + soumissionMontant + " $");
                    let textDate = document.createTextNode('Date: ' + soumissionDate);
                    let a = document.createElement('a');

                    let linkText = document.createTextNode('Fichier: ' + soumissionImage);
                    a.appendChild(linkText);
                    a.classList.add('title__anchor');
                    a.href = "soumission/" + soumissionImage;                    
                    a.target = "_blank";
                    a.rel = "noopener noreferrer";

                    text.appendChild(textNom);
                    text.appendChild(document.createElement("br"));
                    text.appendChild(textID);
                    text.appendChild(document.createElement("br"));
                    text.appendChild(textMontant);
                    text.appendChild(document.createElement("br"));
                    text.appendChild(textDate);
                    text.appendChild(document.createElement("br"));
                    text.appendChild(a);
                    textBox.appendChild(text);
                }
            }
        })
}


function afficheSoumissionInt() {
    let selectSoumission = document.getElementById("choose__year").value;
    emptyInt.innerHTML = "";
    fetch('http://localhost:8080/api/condos/soumissions/' + selectSoumission)
        .then(function (responseServer) {
            return responseServer.json();
        })
        .then(function (messageServer) {
            for (const obj of messageServer) {
                const soumission = document.querySelector(".soumissionInt__post");
                const soumissionID = obj.id;
                const soumissionNom = obj.nom;
                const soumissionMontant = obj.montant;
                const soumissionDate = obj.anneeBugetaire;
                const soumissionImage = obj.image;
                const soumissionType = obj.type;

                if (soumissionType == "interieur") {
                    let textBox = document.createElement('div');
                    textBox.classList.add('accueil__box');
                    soumission.appendChild(textBox);

                    let text = document.createElement('p');
                    text.classList.add('soumission__post--text');
                    
                    let textNom = document.createTextNode(soumissionNom);                    
                    let textID = document.createTextNode('Soumission no: ' + soumissionID);
                    let textMontant = document.createTextNode('Montant: ' + soumissionMontant);
                    let textDate = document.createTextNode('Date: ' + soumissionDate);
                    let a = document.createElement('a');

                    let linkText = document.createTextNode('Fichier: ' + soumissionImage);
                    a.appendChild(linkText);
                    a.classList.add('title__anchor');
                    a.href = "soumission/" + soumissionImage;            
                    a.target = "_blank";
                    a.rel = "noopener noreferrer";

                    text.appendChild(textNom);
                    text.appendChild(document.createElement("br"));
                    text.appendChild(textID);
                    text.appendChild(document.createElement("br"));
                    text.appendChild(textMontant);
                    text.appendChild(document.createElement("br"));
                    text.appendChild(textDate);
                    text.appendChild(document.createElement("br"));
                    text.appendChild(a);
                    textBox.appendChild(text);
                }
            }
        })
}


function afficheSoumissionCompt() {
    let selectSoumission = document.getElementById("choose__year").value;
    emptyCompt.innerHTML = "";
    fetch('http://localhost:8080/api/condos/soumissions/' + selectSoumission)
        .then(function (responseServer) {
            return responseServer.json();
        })
        .then(function (messageServer) {
            for (const obj of messageServer) {
                const soumission = document.querySelector(".soumissionCompt__post");
                const soumissionID = obj.id;
                const soumissionNom = obj.nom;
                const soumissionMontant = obj.montant;
                const soumissionDate = obj.anneeBugetaire;
                const soumissionImage = obj.image;
                const soumissionType = obj.type;

                if (soumissionType == "comptabilite") {
                    let textBox = document.createElement('div');
                    textBox.classList.add('accueil__box');
                    soumission.appendChild(textBox);

                    let text = document.createElement('p');
                    text.classList.add('soumission__post--text');

                    let textNom = document.createTextNode(soumissionNom);
                    let textID = document.createTextNode('Soumission no: ' + soumissionID);
                    let textMontant = document.createTextNode('Montant: ' + soumissionMontant);
                    let textDate = document.createTextNode('Date: ' + soumissionDate);
                    let a = document.createElement('a');

                    let linkText = document.createTextNode('Fichier: ' + soumissionImage);
                    a.appendChild(linkText);
                    a.classList.add('title__anchor');
                    a.href = "soumission/" + soumissionImage;
                    a.target = "_blank";
                    a.rel = "noopener noreferrer";
                    
                    text.appendChild(textNom);
                    text.appendChild(document.createElement("br"));
                    text.appendChild(textID);
                    text.appendChild(document.createElement("br"));
                    text.appendChild(textMontant);
                    text.appendChild(document.createElement("br"));
                    text.appendChild(textDate);
                    text.appendChild(document.createElement("br"));
                    text.appendChild(a);
                    textBox.appendChild(text);
                }
            }
        })
}