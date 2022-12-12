const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const notes = JSON.parse(localStorage.getItem('notes'));
const note = notes.find((note) => note.id === id.toString());

const title = document.querySelector('.header__title');
title.innerHTML = note.title;

title.addEventListener('keydown', (e) => {
  if (e.keyCode === 13) {
    title.blur();
    e.preventDefault();
  }
});

title.addEventListener('input', () => {
  const html = title.innerHTML.replace('<br>', '');
  if (html) note.title = html;
  note.modified = Date.now().toString();
  updateLocalStorage();
});

title.addEventListener('paste', (e) => {
  e.preventDefault();
});

function createExportButton() {
  const button = document.createElement('button');

  button.className = 'toastui-editor-toolbar-icons';
  button.style.backgroundImage = 'none';
  button.style.margin = '0';
  button.style.fontSize = '18px';
  button.style.color = '#333';
  button.innerHTML = `<i class="fa-solid fa-copy"></i>`;
  button.addEventListener('click', () => {
    navigator.clipboard.writeText(editor.getMarkdown());
  });

  return button;
}

function createStyleButton() {
  const button = document.createElement('button');
  button.className = 'toastui-editor-toolbar-icons last';
  button.style.backgroundImage = 'none';
  button.style.margin = '0';
  button.style.fontSize = '18px';
  button.style.color = '#333';
  button.innerHTML = `<i class="fa-solid fa-paint-roller"></i>`;
  button.addEventListener('click', () => {
    console.log('helo');
  });

  return button;
}

const editor = new toastui.Editor({
  el: document.querySelector('.editor'),
  height: '100%',
  previewStyle: 'vertical',
  initialEditType: 'wysiwyg',
  initialValue: note.content,
  hideModeSwitch: true,
  autofocus: true,
  toolbarItems: [
    ['heading', 'bold', 'italic'],
    ['ul', 'ol', 'image'],
    [
      {
        el: createExportButton(),
        tooltip: 'Copy note as markdown',
      },
      {
        el: createStyleButton(),
        tooltip: 'Change note font',
      },
    ],
  ],
  events: {
    change: () => {
      note.content = editor.getMarkdown();
      note.modified = Date.now().toString();
      updateLocalStorage();
    },
  },
});

const closeEditor = () => {
  window.location.href = `../home/?selected=${id}`;
};

const updateLocalStorage = () => {
  localStorage.setItem('notes', JSON.stringify(notes));
};
