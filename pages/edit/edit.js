const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const notes = JSON.parse(localStorage.getItem('notes'));
const note = notes.find((note) => note.id === id.toString());

const title = document.querySelector('.header__title');
// const editor = document.querySelector('.editor');
// const boldButton = document.querySelector('.bold');
// const italicButton = document.querySelector('.italic');

// let editingTitle = false;

title.innerHTML = note.title;

// editor.innerHTML = note.content.html;

// const handleBold = () => {
//   boldButton.classList.toggle('bold-active');
//   document.execCommand('bold', false, null);
// };

// const handleItalic = () => {
//   italicButton.classList.toggle('italic-active');
//   document.execCommand('italic', false, null);
// };

// document.onselectionchange = () => {
//   boldButton.classList.remove('bold-active');
//   const selection = window.getSelection();

//   if (checkStyle(selection, 'B')) boldButton.classList.add('bold-active');
//   else boldButton.classList.remove('bold-active');

//   if (checkStyle(selection, 'I')) italicButton.classList.add('italic-active');
//   else italicButton.classList.remove('italic-active');
// };

// const checkStyle = (selection, tag) => {
//   if (selection.anchorNode.parentElement.parentElement.tagName === tag)
//     return true;
//   else if (selection.anchorNode.parentElement.tagName === tag) return true;
//   else if (selection.anchorNode.tagName === tag) return true;
//   else return false;
// };

// const handleInput = () => {
//   note.content = { ...note.content, html: editor.innerHTML };
//   note.modified = Date.now().toString();
//   updateLocalStorage();
// };

// title.addEventListener('keydown', (e) => {
//   if (e.keyCode === 13) {
//     title.blur();
//     e.preventDefault();
//   }
// });

// title.addEventListener('input', () => {
//   const html = title.innerHTML.replace('<br>', '');
//   console.log(html);
//   if (html) note.title = html;
//   note.modified = Date.now().toString();
//   updateLocalStorage();
// });

// title.addEventListener('paste', (e) => {
//   e.preventDefault();
// });

const editor = new toastui.Editor({
  el: document.querySelector('#editor'),
  height: '100vh',
  initialEditType: 'wysiwyg',
  usageStatistics: false,
  initialValue: note.content,
  previewHighlight: false,
  previewStyle: 'vertical',
  events: {
    change: () => {
      note.content = editor.getMarkdown();
      updateLocalStorage();
    },
  },
});

const updateLocalStorage = () => {
  localStorage.setItem('notes', JSON.stringify(notes));
};
