const urlParams = new URLSearchParams(window.location.search);
const note = JSON.parse(localStorage.getItem('notes')).find(
  (note) => note.id === urlParams.get('id')
);

const textarea = document.querySelector('.editor-textarea');
const text = document.querySelector('.editor-text');
const handleText = (value) => {
  // console.log(text2.selectionStart);
  // console.log((value.match(/\n/g) || []).length);
  // console.log(value);
  console.log(textarea.selectionStart);
  convertToHTML(value);
};

const convertToHTML = (value) => {
  const lines = value.split('\n');
  console.log(lines);
  const html = [];
  lines.forEach((line, index) =>
    html.push(`<div class="line" line-nr="${index}">${line || '<br />'}</div>`)
  );
  let htmlString = '';
  html.forEach((line) => (htmlString += line));
  console.log(html);
  text.innerHTML = htmlString;
};

let selection;

// document.body.onmouseup = function () {
//   console.log(selection);
// };

document.onselectionchange = () => {
  const temp = window.getSelection();
  // selection = window.getSelection();

  if (temp.anchorNode.parentElement.classList.contains('line')) {
    const row = parseInt(temp.anchorNode.parentElement.getAttribute('line-nr'));
    const offset = temp.anchorOffset;
    console.log(temp);
    handleTextarea(row, offset);
  } else if (temp.anchorNode.classList.contains('line')) {
    const row = parseInt(temp.anchorNode.getAttribute('line-nr'));
    const offset = 0;
    handleTextarea(row, offset);
  }
};

const handleTextarea = (row, offset) => {
  const lines = textarea.value.split('\n').splice(0, row + 1);
  lines[row] = lines[row].slice(0, offset);
  let total = '';
  lines.forEach((line) => (total += line));
  const caretOffset = total.length + row;
  textarea.focus();
  textarea.selectionStart = caretOffset;
  textarea.selectionEnd = caretOffset;
};
