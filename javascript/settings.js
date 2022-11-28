const log = console.log;

const sizeSaved = JSON.parse(localStorage.getItem('font-size'));
log(sizeSaved);
const familySaved = JSON.parse(localStorage.getItem('font-family'));
log(familySaved);
const weightSaved = JSON.parse(localStorage.getItem('font-weight'));
log(weightSaved);
const colorSaved = JSON.parse(localStorage.getItem('font-color'));
log(colorSaved);

const BackgroundColorSaved = JSON.parse(localStorage.getItem('background-color'));
log(BackgroundColorSaved);

const darkModeStateSaved = JSON.parse(localStorage.getItem('darkModeState'));
log("darkMode = " + darkModeStateSaved);

window.addEventListener("load", () => {
    let body = document.body;
    body.style.setProperty('font-size', sizeSaved);
    body.style.setProperty('font-family', familySaved);
    body.style.setProperty('font-weight', weightSaved);

    body.style.setProperty('color', colorSaved);

    body.style.setProperty('background-color', BackgroundColorSaved);

    if (darkModeStateSaved == true) {
        checkb.checked = true;
        document.body.classList.toggle('dark');
    }
})

function changeFontSize() {
    var size = document.getElementById("font-size").value;
    /* let body = document.body;
    body.style.setProperty('font-size', size);
    log(size); */
    localStorage.setItem('font-size', JSON.stringify(size));
    window.location.reload();
}
function resetFontSize() {
    localStorage.removeItem("font-size");
    window.location.reload();
    /* log("removed font size"); */
}


function changeFontFamily() {
    var family = document.getElementById("font-family").value;
    /* let body = document.body;
    body.style.setProperty('font-family', family);
    log(family); */
    localStorage.setItem('font-family', JSON.stringify(family));
    window.location.reload();
}
function resetFontFamily() {
    localStorage.removeItem("font-family");
    window.location.reload();
    /* log("removed font family"); */
}


function changeFontWeight() {
    var weight = document.getElementById("font-weight").value;
    /* let body = document.body;
    body.style.setProperty('font-weight', weight);
    log(weight); */
    localStorage.setItem('font-weight', JSON.stringify(weight));
    window.location.reload();
}
function resetFontWeight() {
    localStorage.removeItem("font-weight");
    window.location.reload();
    /* log("removed font weight"); */
}


function changeFontColor() {
    var color = document.getElementById("font-color").value;
    localStorage.setItem('font-color', JSON.stringify(color));
    window.location.reload();
}
function resetFontColor() {
    localStorage.removeItem("font-color");
    window.location.reload();
    /* log("removed font color"); */
}


function changeBackgroundColor() {
    var backgroundColor = document.getElementById("background-color").value;
    localStorage.setItem('background-color', JSON.stringify(backgroundColor));
    window.location.reload();
}
function resetBgColor() {
    localStorage.removeItem("background-color");
    window.location.reload();
    /* log("removed bg color"); */
}



function resetSettings() {
    /* let itemsToRemove = ["font-size", "font-family", "font-weight", "font-color", "background-color"]; */
    let itemsToRemove = ["font-size", "font-family", "font-weight", "font-color", "background-color", "darkModeState", "themeIDSaved", "themesArray"];

    for (item of itemsToRemove) {
        localStorage.removeItem(item);
        log("removed selected items")
    }
    window.location.reload();
}

/* DARKMODE SWITCH */

/* This solution works terribly */

/* function changeDmode() {
    const checkb = document.getElementById("checkb");
    darkMode = darkModeStateSaved;

    if (checkb.checked) {
        document.body.classList.toggle("dark");
        darkMode = true;
        log("checked");
    } else {
        document.body.classList.toggle("dark");
        darkMode = false;
        log("not checked");
    }
    localStorage.setItem('darkModeState', JSON.stringify(darkMode));
} */

/* const checkb = document.getElementById('checkb'); */
let checkb = document.getElementById('checkb');

darkMode = darkModeStateSaved;

if (darkMode == null) {
    darkMode = false;
    log(darkMode);
}

checkb.addEventListener('click', () => {
	document.body.classList.toggle('dark');
    if (darkMode == false) {
        darkMode = true;
    } else if (darkMode == true) {
        darkMode = false;
    }
    log("darkMode = " + darkMode);

    localStorage.setItem('darkModeState', JSON.stringify(darkMode));
});

/* CUSTOM THEME MODAL */

/* Getting modal, close button & button */
var modal = document.getElementById("websiteModal");
var modalBtn = document.getElementById("modalBtn");
var closeBtn = document.getElementsByClassName("closeBtn")[0];

modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", clickOutside);

function openModal(){
    modal.style.display = "block";
}

function closeModal(){
    modal.style.display = "none";
}

function clickOutside(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
}

function submitTheme() {

    /* Get selected choices */
    var themeName  = document.getElementById("modal-themeName").value;
    var themeFontS  = document.getElementById("modal-fontS").value;
    var themeFontF  = document.getElementById("modal-fontF").value;
    var themeFontW  = document.getElementById("modal-fontW").value;
    var themeFontC  = document.getElementById("modal-fontC").value;
    var themeBackC  = document.getElementById("modal-backgroundC").value;

    /* This code should be buildable upon */

    const themeIDSaved = JSON.parse(localStorage.getItem('themeIDSaved'));
    log("previous id was " + themeIDSaved);

    var themeID = 0;

    if (themeIDSaved != null) {
        themeID = themeIDSaved + 1;
        log("selected id: " + themeID);
        localStorage.setItem('themeIDSaved', JSON.stringify(themeID));
    } else {
        themeID = themeID + 1;
        log("selected id: " + themeID);
        localStorage.setItem('themeIDSaved', JSON.stringify(themeID));
    }

    /* For JSON format */


    /* themeJSON = themeID

    themeJSON = { */
        /* id: themeID, */
        /* fontsize: themeFontS,
        fontfamily: themeFontF,
        fontweight: themeFontW,
        fontcolor: themeFontC,
        backgroundcolor: themeBackC,
    } */

    /* themeNameJSON = {
        id: themeID,
        type: "name",
        value: themeName,
    }
    themeFontSJSON = {
        id: themeID,
        type: "font-size",
        value: themeFontS,
    }
    themeFontFJSON = {
        id: themeID,
        type: "font-family",
        value: themeFontF,
    }
    themeFontWJSON = {
        id: themeID,
        type: "font-weight",
        value: themeFontW,
    }
    themeFontCJSON = {
        id: themeID,
        type: "color",
        value: themeFontC,
    }
    themeBackCJSON = {
        id: themeID,
        type: "background-color",
        value: themeBackC,
    } */


    /* Logging all JSON JS objects */

    /* let itemsToGet = [themeNameJSON, themeFontSJSON, themeFontFJSON, themeFontWJSON, themeFontCJSON, themeBackCJSON];

    for (item of itemsToGet) {
        log(item);
    } */

    /* Saving and parsing the JSON JS objects */

    /* localStorage.setItem('themeNameJSON', JSON.stringify(themeNameJSON));
    localStorage.setItem('themeFontSJSON', JSON.stringify(themeFontSJSON));
    localStorage.setItem('themeFontFJSON', JSON.stringify(themeFontFJSON));
    localStorage.setItem('themeFontWJSON', JSON.stringify(themeFontWJSON));
    localStorage.setItem('themeFontCJSON', JSON.stringify(themeFontCJSON));
    localStorage.setItem('themeBackCJSON', JSON.stringify(themeBackCJSON)); */


    /* This is just for represenation, these should be grouped together if possible and parsed at window load */

    /* Code below commented out for now */

    /* const themeNameSaved = JSON.parse(localStorage.getItem('themeNameJSON'));
    const themeFontSSaved = JSON.parse(localStorage.getItem('themeFontSJSON'));
    const themeFontFSaved = JSON.parse(localStorage.getItem('themeFontFJSON'));
    const themeFontWSaved = JSON.parse(localStorage.getItem('themeFontWJSON'));
    const themeFontCSaved = JSON.parse(localStorage.getItem('themeFontCJSON'));
    const themeBackCSaved = JSON.parse(localStorage.getItem('themeBackCJSON')); */

    /* Logging all saved JSON JS objects after parse */

    /* let savedThemesToGet = [themeNameSaved, themeFontSSaved, themeFontFSaved, themeFontWSaved, themeFontCSaved, themeBackCSaved];

    log("summary of saved data after JSON parse: ");

    for (saves of savedThemesToGet) {
        log(saves);
    } */



    /* EXPERIMENTING */

    let themesJSON = [];

    let themeJSON = {
    fontsize: themeFontS,
    fontfamily: themeFontF,
    fontweight: themeFontW,
    fontcolor: themeFontC,
    backgroundcolor: themeBackC,
    }

    themesJSON.push(themeJSON);

    localStorage.setItem("themesArray", JSON.stringify(themesJSON));

    log(themesJSON);









}

const themesArraySaved = JSON.parse(localStorage.getItem('themesArray'));
log(themesArraySaved);