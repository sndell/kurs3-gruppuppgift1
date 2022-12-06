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
const fontFamilySaved = JSON.parse(localStorage.getItem('font-family'));

/* GETTING DARKMODE STATUS */

const darkModeStateSaved = JSON.parse(localStorage.getItem('darkModeState'));
log("darkMode = " + darkModeStateSaved);

/* CODE TO RUN ON LOAD */

window.addEventListener("load", () => {

    /* DEFINING BODY */

    let body = document.body;

    /* APPLYING DARKMODE */

    if (darkModeStateSaved == true) {
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
        "--secondary-text-color": secondaryTextColorSaved,
        "--font-family": fontFamilySaved,
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
    r.style.setProperty('--secondary-text-color', secondaryTextColorSaved); */
})