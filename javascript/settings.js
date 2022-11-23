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

window.addEventListener("load", () => {
    let body = document.body;
    body.style.setProperty('font-size', sizeSaved);
    body.style.setProperty('font-family', familySaved);
    body.style.setProperty('font-weight', weightSaved);

    body.style.setProperty('color', colorSaved);

    body.style.setProperty('background-color', BackgroundColorSaved);
})

function changeFontSize() {
    var size = document.getElementById("font-size").value;
    /* let body = document.body;
    body.style.setProperty('font-size', size);
    log(size); */
    localStorage.setItem('font-size', JSON.stringify(size));
    window.location.reload();
}

function changeFontFamily() {
    var family = document.getElementById("font-family").value;
    /* let body = document.body;
    body.style.setProperty('font-family', family);
    log(family); */
    localStorage.setItem('font-family', JSON.stringify(family));
    window.location.reload();
}

function changeFontWeight() {
    var weight = document.getElementById("font-weight").value;
    /* let body = document.body;
    body.style.setProperty('font-weight', weight);
    log(weight); */
    localStorage.setItem('font-weight', JSON.stringify(weight));
    window.location.reload();
}

function changeFontColor() {
    var color = document.getElementById("font-color").value;
    localStorage.setItem('font-color', JSON.stringify(color));
    window.location.reload();
}

function changeBackgroundColor() {
    var backgroundColor = document.getElementById("background-color").value;
    localStorage.setItem('background-color', JSON.stringify(backgroundColor));
    window.location.reload();
}

function resetSettings() {
    let itemsToRemove = ["font-size", "font-family", "font-weight", "font-color", "background-color"];

    for (item of itemsToRemove) {
        localStorage.removeItem(item);
        log("removed all items")
    }
    window.location.reload();
}