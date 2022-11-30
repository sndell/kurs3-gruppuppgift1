const log = console.log;

const fontSizeSaved = JSON.parse(localStorage.getItem('font-size'));
log(fontSizeSaved);

const primaryColorSaved = JSON.parse(localStorage.getItem('primary-color'));
const secondaryColorSaved = JSON.parse(localStorage.getItem('secondary-color'));
const backgroundSaved = JSON.parse(localStorage.getItem('background-color'));
const tertiarySaved = JSON.parse(localStorage.getItem('tertiary-color'));
const accentSaved = JSON.parse(localStorage.getItem('accent-color'));
const primaryTextColorSaved = JSON.parse(localStorage.getItem('primary-text-color'));
const secondaryTextColorSaved = JSON.parse(localStorage.getItem('secondary-text-color'));

const darkModeStateSaved = JSON.parse(localStorage.getItem('darkModeState'));
log("darkMode = " + darkModeStateSaved);

window.addEventListener("load", () => {
    let body = document.body;

    if (darkModeStateSaved == true) {
        checkb.checked = true;
        document.body.classList.toggle('dark');
    }

    body.style.setProperty('font-size', fontSizeSaved);

    const r = document.querySelector(':root');

    r.style.setProperty('--primary-color', primaryColorSaved);
    r.style.setProperty('--secondary-color', secondaryColorSaved);
    r.style.setProperty('--background-color', backgroundSaved);
    r.style.setProperty('--tertiary-color', tertiarySaved);
    r.style.setProperty('--accent-color', accentSaved);
    r.style.setProperty('--primary-text-color', primaryTextColorSaved);
    r.style.setProperty('secondary-text-color', secondaryTextColorSaved);

    document.getElementById("primary").value = primaryColorSaved;
    document.getElementById("secondary").value = secondaryColorSaved;
    document.getElementById("tertiary").value = tertiarySaved;
    document.getElementById("accent").value = accentSaved;
    document.getElementById("background").value = backgroundSaved;
    document.getElementById("primaryTextColor").value = primaryTextColorSaved;
    document.getElementById("secondaryTextColor").value = secondaryTextColorSaved;
})

function changeFontSize() {
    var size = document.getElementById("font-size").value;
    localStorage.setItem('font-size', JSON.stringify(size));
    window.location.reload();
}

function resetSettings() {
    let itemsToRemove = ["font-size", "darkModeState", "themeIDSaved", "themeArray", "primary-color", "secondary-color", "background-color", "tertiary-color", "accent-color", "accent-color", "primary-text-color", "secondary-text-color"];

    for (item of itemsToRemove) {
        localStorage.removeItem(item);
        log("removed selected items")
    }
    window.location.reload();
}

/* DARKMODE SWITCH */

let checkb = document.getElementById('checkb');

darkMode = darkModeStateSaved;

if (darkMode == null) {
    darkMode = false;
    localStorage.setItem('darkModeState', JSON.stringify(darkMode));
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
/* var modal = document.getElementById("websiteModal");
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
} */

/* Theme */

const r = document.querySelector(':root');

const handleColor = (property, color) => {
    log(property + " " + color);

  switch (property) {
    case 'primary':
      r.style.setProperty('--primary-color', color);
      localStorage.setItem("primary-color", JSON.stringify(color));
      break;
    case 'secondary':
      r.style.setProperty('--secondary-color', color);
      localStorage.setItem("secondary-color", JSON.stringify(color));
      break;
    case 'background':
      r.style.setProperty('--background-color', color);
      localStorage.setItem("background-color", JSON.stringify(color));
      break;
    case 'tertiary':
      r.style.setProperty('--tertiary-color', color);
      localStorage.setItem("tertiary-color", JSON.stringify(color));
      break;
    case 'accent':
      r.style.setProperty('--accent-color', color);
      localStorage.setItem("accent-color", JSON.stringify(color));
      break;
    case 'primaryTextColor':
      r.style.setProperty('--primary-text-color', color);
      localStorage.setItem("primary-text-color", JSON.stringify(color));
      break;
    case 'secondaryTextColor':
      r.style.setProperty('secondary-text-color', color);
      localStorage.setItem("secondary-text-color", JSON.stringify(color));
      break;
  }
};

    /* EXPERIMENTING */

    /* const themeIDSaved = JSON.parse(localStorage.getItem('themeIDSaved'));
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
    } */

    /* let themeArray = [];

    let savedTheme = [{
        fontsize: themeFontS,
        fontfamily: themeFontF,
        fontweight: themeFontW,
        fontcolor: themeFontC,
        backgroundcolor: themeBackC,
    }];

    savedTheme.forEach((item, i) => {
        item.id = i + 1;
    });

    log(savedTheme);

    localStorage.setItem("savedTheme", JSON.stringify(savedTheme)); */