// document.addEventListener("DOMContentLoaded", function(){
//     console.log("Page has finished loading");
// });

//window.onload = function () {
document.addEventListener("DOMContentLoaded", function () {
    console.log("Page has finished loading");

    var tags = null;

    $.getJSON('data/tagData.json', function (data) {
        //console.log(data);
        tags = data;
    });
    // $.getJSON('https://bennehr.github.io/IncursionTool/TagData.json', function (data) {
    //     console.log(data);
    //     tags = data;
    // });

    const vgButton = document.getElementById("buttonVG");
    const asButton = document.getElementById("buttonAS");
    const hqButton = document.getElementById("buttonHQ");

    vgButton.addEventListener("click", selectVG);
    asButton.addEventListener("click", selectAS);
    hqButton.addEventListener("click", selectHQ);

    const nrfButton = document.getElementById("buttonNRF");
    const tcrcButton = document.getElementById("buttonTCRC");
    const tpphButton = document.getElementById("buttonTPPH");

    const siteNRF = document.getElementById("siteNRF");
    const siteTPPH = document.getElementById("siteTPPH");
    const siteTCRC = document.getElementById("siteTCRC");

    nrfButton.addEventListener("click", selectNRF);
    tcrcButton.addEventListener("click", selectTCRC);
    tpphButton.addEventListener("click", selectTPPH);

    const nrfWave1 = document.getElementById("nrfWave1");
    const nrfWave2 = document.getElementById("nrfWave2");
    const nrfWave3 = document.getElementById("nrfWave3");
    const nrfWave4 = document.getElementById("nrfWave4");

    nrfWave1.addEventListener("click", function (e) { selectWave("HQ", "NRF", 1, 1); resetNRFWaves(); nrfWave1.classList.add("selected-button") });
    nrfWave2.addEventListener("click", function (e) { selectWave("HQ", "NRF", 1, 2); resetNRFWaves(); nrfWave2.classList.add("selected-button") });
    nrfWave3.addEventListener("click", function (e) { selectWave("HQ", "NRF", 1, 3); resetNRFWaves(); nrfWave3.classList.add("selected-button") });
    nrfWave4.addEventListener("click", function (e) { selectWave("HQ", "NRF", 1, 4); resetNRFWaves(); nrfWave4.classList.add("selected-button") });

    const tpphRoom1 = document.getElementById("tpphRoom1");
    const tpphRoom2 = document.getElementById("tpphRoom2");
    const tpphRoom3 = document.getElementById("tpphRoom3");
    const tpphWaveBlock = document.getElementById("siteTPPHBlock");
    const tpphWaves = document.getElementById("siteTPPHWaves");

    tpphRoom1.addEventListener("click", function (e) { selectWave("HQ", "TPPH", 1, 1); resetTPPHRooms(); tpphRoom1.classList.add("selected-button"); tpphWaveBlock.style.display = "grid"; tpphWaves.style.display = "none" });
    tpphRoom2.addEventListener("click", function (e) { selectWave("HQ", "TPPH", 2, 1); resetTPPHRooms(); tpphRoom2.classList.add("selected-button"); tpphWaveBlock.style.display = "grid"; tpphWaves.style.display = "none" });
    tpphRoom3.addEventListener("click", function (e) { selectWave("HQ", "TPPH", 3, 1); resetTPPHRooms(); tpphRoom3.classList.add("selected-button"); tpphWaveBlock.style.display = "none"; tpphWaves.style.display = "grid" });

    const tpphWave1 = document.getElementById("tpphWave1");
    const tpphWave2 = document.getElementById("tpphWave2");
    const tpphWave3 = document.getElementById("tpphWave3");

    tpphWave1.addEventListener("click", function (e) { selectWave("HQ", "TPPH", 3, 1); resetTPPHWaves(); tpphWave1.classList.add("selected-button") });
    tpphWave2.addEventListener("click", function (e) { selectWave("HQ", "TPPH", 3, 2); resetTPPHWaves(); tpphWave2.classList.add("selected-button") });
    tpphWave3.addEventListener("click", function (e) { selectWave("HQ", "TPPH", 3, 3); resetTPPHWaves(); tpphWave3.classList.add("selected-button") });

    const encounterHQ = document.getElementById("headquarters");
    const tagListNumbers = document.getElementById("taglistnumbers");
    const tagListLetters = document.getElementById("taglistletters");
    const tagListDDD = document.getElementById("taglistddd");
    const tagListX = document.getElementById("taglistx");
    const tagListTower = document.getElementById("taglisttower");

    function selectWave(encounter, site, room, wave) {
        wave = wave - 1;
        room = room - 1;
        // console.log(encounter, site, room, wave);
        // console.log(tags[encounter][site]["Rooms"][room]["Waves"][wave]);

        var numberTags = tags[encounter][site]["Rooms"][room]["Waves"][wave]["Numbers"];
        var letterTags = tags[encounter][site]["Rooms"][room]["Waves"][wave]["Letters"];
        var dddTags = tags[encounter][site]["Rooms"][room]["Waves"][wave]["DDD"];
        var xTags = tags[encounter][site]["Rooms"][room]["Waves"][wave]["X"];
        var towerTags = tags[encounter][site]["Rooms"][room]["Waves"][wave]["Tower"];
        console.log(`Encounter: ${encounter} | Site: ${site} | Room: ${room + 1} | Wave: ${wave + 1}`, 
                    `\nNumbers: ${numberTags}`, 
                    `\nLetters: ${letterTags}`, 
                    `\nDDD: ${dddTags}`,
                    `\nX: ${xTags}`,
                    `\nTower: ${towerTags}`);

        if ($(tagListNumbers).length != 0) { while (tagListNumbers.firstChild) tagListNumbers.removeChild(tagListNumbers.firstChild); }
        if ($(tagListLetters).length != 0) { while (tagListLetters.firstChild) tagListLetters.removeChild(tagListLetters.firstChild); }
        if ($(tagListDDD).length != 0) { while (tagListDDD.firstChild) tagListDDD.removeChild(tagListDDD.firstChild); }
        if ($(tagListX).length != 0) { while (tagListX.firstChild) tagListX.removeChild(tagListX.firstChild); }
        if ($(tagListTower).length != 0) { while (tagListTower.firstChild) tagListTower.removeChild(tagListTower.firstChild); }

        // Set number tags
        if (numberTags != undefined) {
            const nodeHeader = document.createElement("li");
            const nodeHeaderText = document.createTextNode("Numbers")
            nodeHeader.appendChild(nodeHeaderText);
            tagListNumbers.appendChild(nodeHeaderText);

            tags[encounter][site]["Rooms"][room]["Waves"][wave]["Numbers"].forEach(target => {
                const nodeLI = document.createElement("li");
                const nodeLIText = document.createTextNode(target);
                nodeLI.appendChild(nodeLIText);
                tagListNumbers.appendChild(nodeLI);
            });
        }

        // Set letter tags
        if (letterTags != undefined) {
            const nodeHeader = document.createElement("li");
            const nodeHeaderText = document.createTextNode("Letters")
            nodeHeader.appendChild(nodeHeaderText);
            tagListLetters.appendChild(nodeHeaderText);

            tags[encounter][site]["Rooms"][room]["Waves"][wave]["Letters"].forEach(target => {
                const nodeLI = document.createElement("li");
                const nodeLIText = document.createTextNode(target);
                nodeLI.appendChild(nodeLIText);
                tagListLetters.appendChild(nodeLI);
            });
        }

        //Set DDD tags
        if (dddTags != undefined) {
            const nodeHeader = document.createElement("li");
            const nodeHeaderText = document.createTextNode("DDD")
            nodeHeader.appendChild(nodeHeaderText);
            tagListDDD.appendChild(nodeHeaderText);

            tags[encounter][site]["Rooms"][room]["Waves"][wave]["DDD"].forEach(target => {
                const nodeLI = document.createElement("li");
                const nodeLIText = document.createTextNode(target);
                nodeLI.appendChild(nodeLIText);
                tagListDDD.appendChild(nodeLI);
            });
        }

        // Set X tags
        if (xTags != undefined) {
            const nodeHeader = document.createElement("li");
            const nodeHeaderText = document.createTextNode("X - Do not shoot")
            nodeHeader.appendChild(nodeHeaderText);
            tagListX.appendChild(nodeHeaderText);

            const nodeLI = document.createElement("li");
            const nodeLIText = document.createTextNode(tags[encounter][site]["Rooms"][room]["Waves"][wave]["X"]);
            nodeLI.appendChild(nodeLIText);
            tagListX.appendChild(nodeLI);
        }

        // Set tower tags
        if (towerTags != undefined) {
            const nodeHeader = document.createElement("li");
            const nodeHeaderText = document.createTextNode("Tower")
            nodeHeader.appendChild(nodeHeaderText);
            tagListTower.appendChild(nodeHeaderText);

            
            const nodeLI = document.createElement("li");
            const nodeLIText = document.createTextNode(tags[encounter][site]["Rooms"][room]["Waves"][wave]["Tower"]);
            nodeLI.appendChild(nodeLIText);
            tagListTower.appendChild(nodeLI);
        }



        
    }


    function resetEncounters() {
        encounterHQ.style.display = "none";
        hqButton.classList.remove("selected-button");
        asButton.classList.remove("selected-button");
        vgButton.classList.remove("selected-button");
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

    function resetNRFWaves() {
        nrfWave1.classList.remove("selected-button");
        nrfWave2.classList.remove("selected-button");
        nrfWave3.classList.remove("selected-button");
        nrfWave4.classList.remove("selected-button");
    }

    function resetTPPHRooms() {
        tpphRoom1.classList.remove("selected-button");
        tpphRoom2.classList.remove("selected-button");
        tpphRoom3.classList.remove("selected-button");
    }

    function resetTPPHWaves() {
        tpphWave1.classList.remove("selected-button");
        tpphWave2.classList.remove("selected-button");
        tpphWave3.classList.remove("selected-button");
    }

    function selectVG() {
        resetEncounters();
        vgButton.classList.add("selected-button");
    }

    function selectAS() {
        resetEncounters();
        asButton.classList.add("selected-button");
    }

    function selectHQ() {
        resetEncounters();
        encounterHQ.style.display = "block";
        hqButton.classList.add("selected-button");
    }

    function selectNRF() {
        resetHQSites();
        siteNRF.style.display = "block";
        nrfButton.classList.add("selected-button");
    }

    function selectTCRC() {
        resetHQSites();
        selectWave("HQ", "TCRC", 1, 1);
        siteTCRC.style.display = "block";
        tcrcButton.classList.add("selected-button");
    }

    function selectTPPH() {
        resetHQSites();
        siteTPPH.style.display = "block";
        tpphButton.classList.add("selected-button");
    }

    function selectTPPH_R1() {

    }

    function selectTPPH_R2() {

    }

    function selectTPPH_R3() {

    }
});
