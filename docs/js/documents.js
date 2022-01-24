function clearScreen() {
    emptyAssemble.innerHTML = "";
    emptyBudget.innerHTML = "";
}

function afficheAssemble() {
    let selectAnnee = document.getElementById("choose__year").value;
    fetch('http://localhost:8080/api/condos/archives/' + selectAnnee)
        .then(function (responseServer) {
            return responseServer.json();
        })
        .then(function (messageServer) {
            for (const obj of messageServer) {
                const proces = document.querySelector(".assemble__post");
                const procesID = obj.id;
                const procesTitre = obj.titre;
                const procesDate = obj.anneeBudgetaire;
                const procesDocument = obj.document;
                const procesCopro = obj.copro_id;
                const procesType = obj.type;

                if (procesType == "assemblee") {
                    let textBox = document.createElement('div');
                    textBox.classList.add('accueil__box');
                    proces.appendChild(textBox);

                    let text = document.createElement('div');
                    text.classList.add('assemble__post--text');

                    let textTitre = document.createElement('p');
                    textTitre.innerHTML = procesTitre;

                    let textDate = document.createElement('p');
                    textDate.innerHTML = 'Date: ' + procesDate;

                    text.appendChild(textTitre);
                    text.appendChild(textDate);

                    let img = document.createElement('img');
                    img.src = "./img/icon-download.svg";
                    let linkText = document.createTextNode(procesDocument);
                    img.alt = linkText;

                    let a = document.createElement('a');
                    a.classList.add('title__anchor');
                    a.href = "archives/" + procesDocument;
                    a.target = "_blank";
                    a.rel = "noopener noreferrer";
                    a.appendChild(img);

                    let box = document.createElement('div');
                    box.classList.add('soumission-carnet__result--button');
                    box.appendChild(a);
                    text.appendChild(box);

                    textBox.appendChild(text);
                }
            }
        })
}

function afficheBudget() {
    let selectAnnee = document.getElementById("choose__year").value;
    fetch('http://localhost:8080/api/condos/archives/' + selectAnnee)
        .then(function (responseServer) {
            return responseServer.json();
        })
        .then(function (messageServer) {
            for (const obj of messageServer) {
                const proces = document.querySelector(".budget__post");
                const procesID = obj.id;
                const procesTitre = obj.titre;
                const procesDate = obj.anneeBudgetaire;
                const procesDocument = obj.document;
                const procesCopro = obj.copro_id;
                const procesType = obj.type;

                if (procesType == "budget") {
                    let textBox = document.createElement('div');
                    textBox.classList.add('accueil__box');
                    proces.appendChild(textBox);

                    let text = document.createElement('div');
                    text.classList.add('budget__post--text');

                    let textTitre = document.createElement('p');
                    textTitre.innerHTML = procesTitre;

                    let textDate = document.createElement('p');
                    textDate.innerHTML = 'Date: ' + procesDate;

                    text.appendChild(textTitre);
                    text.appendChild(textDate);

                    let img = document.createElement('img');
                    img.src = "./img/icon-download.svg";
                    let linkText = document.createTextNode(procesDocument);
                    img.alt = linkText;

                    let a = document.createElement('a');
                    a.classList.add('title__anchor');
                    a.href = "archives/" + procesDocument;
                    a.target = "_blank";
                    a.rel = "noopener noreferrer";
                    a.appendChild(img);

                    let box = document.createElement('div');
                    box.classList.add('soumission-carnet__result--button');
                    box.appendChild(a);
                    text.appendChild(box);

                    textBox.appendChild(text);
                }
            }
        })
}