
// SOLUTION TEMPORAIRE EN ATTENDANT D'ETRE CONNECTé AU BACKEND ------------------------------

function affichePV(){
    let selectPV = document.getElementById("pvSelect").value;
    if (selectPV ="procesVerbaux2021"){
        window.open("img/proces_verbal.pdf");

    }else{
        alert("En construction")
    }
}

function afficheBudget() {
    let selectBudget = document.getElementById("budgetSelect").value;
    if (selectBudget = "budget2021") {
        //window.location.href = "img/budget2021.pdf";
        window.open("img/budget2021.pdf"); //included code to open in a new window

    } else {
        alert("En construction")
    }
}

function afficheAvis() {
    let selectAvis = document.getElementById("convocSelect").value;
    if (selectAvis = "avis2021") {
        //window.location.href = "img/Avis_de_Convocation.pdf";
        window.open("img/Avis_de_Convocation.pdf"); //included code to open in a new window

    } else {
        alert("En construction")
    }
}