import tags from "./TagData.json" assert { type: 'json' };

const vgButton = document.getElementById("buttonVG");
const asButton = document.getElementById("buttonAS");
const hqButton = document.getElementById("buttonHQ");

const nrfButton = document.getElementById("buttonNRF");
const tcrcButton = document.getElementById("buttonTCRC");
const tpphButton = document.getElementById("buttonTPPH");

const encounterHQ = document.getElementById("headquarters");

const siteNRF = document.getElementById("siteNRF");
const siteTPPH = document.getElementById("siteTPPH");
const siteTCRC = document.getElementById("siteTCRC");

const tagList = document.getElementById("taglist");

function resetEncounters() {
    encounterHQ.style.display = "none";
}

function resetVGSites() {

}

function resetASSites() {

}

function resetHQSites() {
    siteNRF.style.display = "none";
    nrfButton.classList.remove("selected-button");
    siteTPPH.style.display = "none";
    tpphButton.classList.remove("selected-button");
    siteTCRC.style.display = "none";
    tcrcButton.classList.remove("selected-button");
}

function selectVG() {
    resetEncounters();

}

function selectAS() {
    resetEncounters();
    
}

function selectHQ() {
    resetEncounters();
    encounterHQ.style.display = "block";
}

function selectNRF() {
    resetHQSites();
    siteNRF.style.display = "block";
    nrfButton.classList.add("selected-button");
}

function selectTCRC() {
    resetHQSites();
    siteTCRC.style.display = "block";
    tcrcButton.classList.add("selected-button");
}

function selectTPPH() {
    resetHQSites();
    siteTPPH.style.display = "block";
    tpphButton.classList.add("selected-button");
}

function selectTPPH_R1 () {

}

function selectTPPH_R2 () {
    
}

function selectTPPH_R3 () {
    
}

// TODO - Add functions for wave buttons, make function parameterisable to call the json to display in taglist
function selectWave (encounter, site, room, wave) {
    console.log(tags);
}