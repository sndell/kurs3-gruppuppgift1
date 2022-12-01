/* CONSOLE.LOG */

const log = console.log;

/* GETTING CHOSEN FONTSIZE */

const fontSizeSaved = JSON.parse(localStorage.getItem('font-size'));
log(fontSizeSaved);

/* GETTING SAVED THEME COLORS */

const primaryColorSaved = JSON.parse(localStorage.getItem('primary-color'));
const secondaryColorSaved = JSON.parse(localStorage.getItem('secondary-color'));
const backgroundSaved = JSON.parse(localStorage.getItem('background-color'));
const tertiarySaved = JSON.parse(localStorage.getItem('tertiary-color'));
const accentSaved = JSON.parse(localStorage.getItem('accent-color'));
const primaryTextColorSaved = JSON.parse(localStorage.getItem('primary-text-color'));
const secondaryTextColorSaved = JSON.parse(localStorage.getItem('secondary-text-color'));

/* GETTING DARKMODE STATUS */

const darkModeStateSaved = JSON.parse(localStorage.getItem('darkModeState'));
log("darkMode = " + darkModeStateSaved);

/* CODE TO RUN ON LOAD */

window.addEventListener("load", () => {

  /* DEFINING BODY */

    let body = document.body;

    /* APPLYING DARKMODE */

    if (darkModeStateSaved == true) {
        checkb.checked = true;
        document.body.classList.toggle('dark');
    }

    /* APPLYING FONT SIZE */

    body.style.setProperty('font-size', fontSizeSaved);


    /* DEFINING R FOR :ROOT */

    const r = document.querySelector(':root');

    /* APPLYING THEME */

    const setProperty = {
      "--primary-color": primaryColorSaved,
      "--secondary-color": secondaryColorSaved,
      "--background-color": backgroundSaved,
      "--tertiary-color": tertiarySaved,
      "--accent-color": accentSaved,
      "--primary-text-color": primaryTextColorSaved,
      "--secondary-text-color": secondaryTextColorSaved
    }
    for (property in setProperty) {
      r.style.setProperty(property, setProperty[property]);
    };

    /* r.style.setProperty('--primary-color', primaryColorSaved);
    r.style.setProperty('--secondary-color', secondaryColorSaved);
    r.style.setProperty('--background-color', backgroundSaved);
    r.style.setProperty('--tertiary-color', tertiarySaved);
    r.style.setProperty('--accent-color', accentSaved);
    r.style.setProperty('--primary-text-color', primaryTextColorSaved);
    r.style.setProperty('secondary-text-color', secondaryTextColorSaved); */

    const setValue = {
      "primary": primaryColorSaved,
      "secondary": secondaryColorSaved,
      "tertiary": tertiarySaved,
      "accent": accentSaved,
      "background": backgroundSaved,
      "primaryTextColor": primaryTextColorSaved,
      "secondaryTextColor": secondaryTextColorSaved
    }
    for (property in setValue) {
      document.getElementById(property).value = setValue[property];
    };

    /* document.getElementById("primary").value = primaryColorSaved;
    document.getElementById("secondary").value = secondaryColorSaved;
    document.getElementById("tertiary").value = tertiarySaved;
    document.getElementById("accent").value = accentSaved;
    document.getElementById("background").value = backgroundSaved;
    document.getElementById("primaryTextColor").value = primaryTextColorSaved;
    document.getElementById("secondaryTextColor").value = secondaryTextColorSaved; */
})

/* CHANGING FONTSIZE */

function changeFontSize() {
    var size = document.getElementById("font-size").value;
    localStorage.setItem('font-size', JSON.stringify(size));
    window.location.reload();
}

/* CLEARING ALL SETTINGS JSON */

function resetSettings() {
    let itemsToRemove = ["font-size", "darkModeState", "themeIDSaved", "themeArray", "primary-color", "secondary-color", "background-color", "tertiary-color", "accent-color", "accent-color", "primary-text-color", "secondary-text-color"];

    for (item of itemsToRemove) {
        localStorage.removeItem(item);
    }
    window.location.reload();
}

/* DARKMODE SWITCH */

/* DEFINING BUTTON */

let checkb = document.getElementById('checkb');

darkMode = darkModeStateSaved;

/* IF DARKMODE STATE HAS NOT BEEN SET, IE NULL, THEN DARKMODE STATE = FALSE */

if (darkMode == null) {
    darkMode = false;
    localStorage.setItem('darkModeState', JSON.stringify(darkMode));
}

/* IF BUTTON IS CLICKED, TOGGLE "DARK" CLASS ON BODY, AND TOGGLE DARKMODE STATE */

checkb.addEventListener('click', () => {
	document.body.classList.toggle('dark');
    if (darkMode == false) {
        darkMode = true;
    } else if (darkMode == true) {
        darkMode = false;
    }
    log("darkMode = " + darkMode);

    /* SAVE DARKMODE STATE SO IT CAN BE CALLED GATHERED */

    localStorage.setItem('darkModeState', JSON.stringify(darkMode));
});

/* THEME */

/* DEFINING R FOR :ROOT */

const r = document.querySelector(':root');

/* GETTING SELECTED COLOR & SAVING */

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
      r.style.setProperty('--secondary-text-color', color);
      localStorage.setItem("secondary-text-color", JSON.stringify(color));
      break;
  }
};