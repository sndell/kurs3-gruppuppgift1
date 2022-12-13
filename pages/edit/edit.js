const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');
const notes = JSON.parse(localStorage.getItem('notes'));
const note = notes.find((note) => note.id === id.toString());

const title = document.querySelector('.header__title');
title.innerHTML = note.title;

const updateLocalStorage = () => {
  localStorage.setItem('notes', JSON.stringify(notes));
};

addEventListener('load', () => {
  let list;
  const test = JSON.parse(localStorage.getItem('fonts'));
  if (!test) {
    list = ['Nunito'];
    localStorage.setItem('fonts', JSON.stringify(list));
  } else list = test;

  generateOptions(list);
  document.querySelector('.font-selection').value = note.font;
  loadNoteFont(note.font);
});

const handleAdd = () => {
  const text = document.querySelector('.font-add').value;

  let fonts = JSON.parse(localStorage.getItem('fonts'));
  console.log(fonts);

  WebFont.load({
    google: {
      families: [`${text}:300,400,700`],
    },
    active: () => {
      if (fonts) fonts = [...fonts, text];
      else fonts = [text];
      generateOptions(fonts);
      localStorage.setItem('fonts', JSON.stringify(fonts));
    },
  });

  document.querySelector('.font-add').value = '';
};

const generateOptions = (list) => {
  const fontSelect = document.querySelector('.font-selection');
  fontSelect.innerHTML = '';
  list.forEach((item) => {
    let option = new Option(item, item);
    fontSelect.add(option, undefined);
  });
};

const handleClose = () => {
  document.querySelector('.modal').classList.add('hidden');
};

const handleFont = () => {
  const value = document.querySelector('.font-selection').value;
  note.font = value;
  loadNoteFont(value);
  updateLocalStorage();
};

const loadNoteFont = (font) => {
  WebFont.load({
    google: {
      families: [`${font}:300,400,700`],
    },
    active: () => {
      const r = document.querySelector(':root');
      r.style.setProperty('--note-font-family', font);
    },
  });
};

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
    document.querySelector('.modal').classList.remove('hidden');
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
