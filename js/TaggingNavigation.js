const nrfButton = document.getElementById("buttonNRF");
const tcrcButton = document.getElementById("buttonTCRC");
const tpphButton = document.getElementById("buttonTPPH");

const siteNRF = document.getElementById("siteNRF");
const siteTPPH = document.getElementById("siteTPPH");
const siteTCRC = document.getElementById("siteTCRC");

function resetSelection() {
    siteNRF.style.display = "none";
    nrfButton.classList.remove("selected-button");
    siteTPPH.style.display = "none";
    tpphButton.classList.remove("selected-button");
    siteTCRC.style.display = "none";
    tcrcButton.classList.remove("selected-button");
}

function selectNRF() {
    resetSelection();
    siteNRF.style.display = "block";
    nrfButton.classList.add("selected-button");
}

function selectTCRC() {
    resetSelection();
    siteTCRC.style.display = "block";
    tcrcButton.classList.add("selected-button");
}

function selectTPPH() {
    resetSelection();
    siteTPPH.style.display = "block";
    tpphButton.classList.add("selected-button");
}

function selectTPPH_R1 () {

}

function selectTPPH_R2 () {
    
}

function selectTPPH_R3 () {
    
}