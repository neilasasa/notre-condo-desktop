    let idSondage;
    let idChoixSondage;
    let coproId = JSON.parse(localStorage.getItem('coproId'));

    function clearScreen() {
        newPost.value = "";
    }

    function loadPage() {
        location.reload();
    }

    //GET TODAY DATE    
    function dateToday() {
        const dateNow = new Date();
        const year = dateNow.getFullYear();
        let month = dateNow.getMonth() + 1;
        const date = dateNow.getDate();

        if (date < 10) {
            date = '0' + date;
        }

        if (month < 10) {
            month = '0' + month;
        }

        return yearMonthDate = year + '-' + month + '-' + date;
    }


    // *** FOND PREVOYANCE ***
    let montantFondPrevoyance = document.getElementById('fond-prevoyance');
    const fondPrevoyance = document.getElementById('fond');

    fetch('http://localhost:8080/api/condos/fondPrev')
        .then(function (responseServer) {
            responseServer.json().then(function (messageServer) {
                montantFondPrevoyance.innerHTML = messageServer.solde + ' $';
                montantFondPrevoyance.classList.add('fond__montant');
                dateFondPrevoyance = document.createElement('p');
                dateFondPrevoyance.innerHTML = 'Modifié le : ' + messageServer.dateModification;
                dateFondPrevoyance.classList.add('fond__date');
                fondPrevoyance.appendChild(dateFondPrevoyance);
            })
        });



    // *** MESSAGE ***
    let messageAdm = document.getElementById('admin_msg');

    fetch('http://localhost:8080/api/condos/msgAdmin')
        .then(function (responseServer) {
            responseServer.json().then(function (messageServer) {
                messageAdm.innerHTML = messageServer.message;
                date = messageServer.date;
                dateFormat = date.slice(0, 10);
                dateMessageAdm = document.createElement('p');
                dateMessageAdm.innerHTML = 'Publié le : ' + dateFormat;
                dateMessageAdm.classList.add('message__text-date');
                messageAdm.appendChild(dateMessageAdm);
            })
        });


    // *** SONDAGE ***
    // *** 1) AFFICHER QUESTION DE LA SONDAGE ***
    let questionSondage = document.getElementById('question-sondage');

    fetch('http://localhost:8080/api/condos/sondage')
        .then(function (responseServer) {
            responseServer.json().then(function (messageServer) {
                questionSondage.innerHTML = messageServer.question;
                idSondage = messageServer.id;

                // *** DATE = NULL on web service ***
                // let dateCreationSondage = document.createElement('p');
                // dateCreationSondage.innerHTML = 'Publié le : ' + messageServer.date;
                // dateCreationSondage.classList.add('babillard__post--date');

                // questionSondage.appendChild(dateCreationSondage);
            })
        });

    // *** 2) AFFICHER REPONSES À CHOISIR DE LA SONDAGE ***
    let choixReponseSondage = document.getElementById('choix-reponse-sondage');

    fetch('http://localhost:8080/api/condos/choixRep')
        .then(function (responseServer) {
            responseServer.json().then(function (messageServer) {
                for (const obj of messageServer) {
                    const choixReponseBox = document.getElementById('choix-reponse-sondage');
                    const choixReponse = obj.choix;

                    let textBox = document.createElement('div');
                    textBox.classList.add('choix');
                    choixReponseBox.appendChild(textBox);

                    let inputText = document.createElement('input');
                    inputText.type = "radio";
                    inputText.name = "rep";
                    textBox.appendChild(inputText);

                    let labelText = document.createElement('label');
                    let t = document.createTextNode(choixReponse);
                    labelText.classList.add('sondage__label');
                    labelText.appendChild(t);
                    textBox.appendChild(labelText);

                    idChoixSondage = obj.id;
                }
            })
        });


    // *** 3) AJOUTER LA REPONSE DE LA SONDAGE AU SERVEUR *** 
    const buttonSondage = document.getElementById('sondage-button');
    const sondage = document.getElementById('sondage');

    buttonSondage.addEventListener('click', (event) => {
        event.preventDefault();
        const radio = document.querySelector('input[name="rep"]:checked');

        const data = {
            'copro_id': coproId,
            'sondage_id': idSondage,
            'choixReponse_id': idChoixSondage
        };

        console.log(`id sondage : ${idSondage}, radio : ${idChoixSondage}, copro : ${coproId}`);

        fetch('http://localhost:8080/api/condos/reponseCoproSondage', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json; charset=UTF-8'
                }
            })
            .then(function (response) {
                response.json().then(function (json) {
                    // if(json.sondage_id == idSondage && json.copro_id == coproId){

                    // }

                    // *** NOT ABLE TO AVOID COPRO TO ANSWER 2X FOR NOW ***

                    console.log(json);

                    alert("Merci d'avoir participé au sondage !");
                })
            })

    });


    // *** BABILLARD ***
    const babillardForm = document.getElementById('babillard__new');
    const button = document.getElementById('babillard__submit');

    button.addEventListener('click', (event) => {
        event.preventDefault();

        let babillard = babillardForm.newPost.value;
        console.log(babillard)

        const data = {
            'text': babillard,
            'date': dateToday(),
            'copro_id': coproId
        };

        fetch('http://localhost:8080/api/condos/posterMessage', {
                // Adding method type        
                method: 'POST',

                // Adding body or contents to send
                body: JSON.stringify(data),

                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
            .then(function (response) {
                response.json().then(function (json) {
                    generateBabillard();
                    window.location.refresh;
                })
            })

        babillardPost.innerHTML = "";
        newPost.value = "";
    });


    function generateBabillard() {
        fetch('http://localhost:8080/api/condos/message')
            .then(function (response) {
                response.json().then(function (json) {
                    for (const obj of json) {

                        let objArray = obj.reaction;
                        let countLike = 0;
                        let countDislike = 0;

                        for (let i = 0; i < objArray.length; i++) {

                            if (obj.reaction[i].etat == true) {
                                countLike++;
                            } else {
                                countDislike++;
                            }
                        }

                        const babillard = document.querySelector(".babillard__post");
                        const babillardText = obj.text;

                        let form = document.createElement('form');
                        form.classList.add('babillard__post--form');
                        babillard.appendChild(form);

                        let textBox = document.createElement('div');
                        textBox.classList.add('accueil__box');
                        form.appendChild(textBox);

                        let text = document.createElement('p');
                        text.classList.add('message__text', 'babillard__post--text');
                        let t = document.createTextNode(babillardText);

                        let dateBabillard = document.createElement('p');
                        dateBabillard.innerHTML = 'Publié le : ' + obj.date;
                        dateBabillard.classList.add('babillard__post--date');

                        text.appendChild(t);
                        text.appendChild(dateBabillard);
                        textBox.appendChild(text);

                        let boxButtons = document.createElement('div');
                        boxButtons.classList.add('form--buttons');
                        form.appendChild(boxButtons);

                        let boxButtonLike = document.createElement('div');
                        boxButtonLike.classList.add('buttonsLikeDislike');
                        boxButtons.appendChild(boxButtonLike);

                        buttonLike = document.createElement('input');
                        buttonLike.setAttribute('type', 'button');
                        buttonLike.setAttribute('name', 'like');
                        buttonLike.classList.add('like', 'button_like-dislike');
                        boxButtonLike.appendChild(buttonLike);

                        let txtLike = document.createElement('span');
                        let nbrLike = document.createTextNode(countLike);
                        txtLike.classList.add('txtLikeDislike');
                        txtLike.appendChild(nbrLike);
                        boxButtonLike.appendChild(txtLike);

                        let boxButtonDislike = document.createElement('div');
                        boxButtonDislike.classList.add('buttonsLikeDislike');
                        boxButtons.appendChild(boxButtonDislike);

                        buttonDislike = document.createElement('input');
                        buttonDislike.setAttribute('type', 'button');
                        buttonDislike.setAttribute('name', 'dislike');
                        buttonDislike.classList.add('dislike', 'button_like-dislike');
                        boxButtonDislike.appendChild(buttonDislike);

                        let txtDislike = document.createElement('span');
                        let nbrDislike = document.createTextNode(countDislike);                        
                        txtDislike.classList.add('txtLikeDislike');
                        txtDislike.appendChild(nbrDislike);
                        boxButtonDislike.appendChild(txtDislike);
                    }
                })
            });
    }

    generateBabillard();