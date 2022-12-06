let currentNote = '';

const selectNote = (id = undefined) => {
  if (id && currentNote !== id.toString()) {
    document.querySelector('.preview').classList.remove('hidden');
    currentNote = id.toString();
    const notes = JSON.parse(localStorage.getItem('notes'));
    const note = notes.find((note) => note.id === id.toString());
    const previewDiv = document.querySelector('.preview');
    const created = new Date(parseInt(note.created)).toLocaleDateString(
      'en-US'
    );
    const modified = new Date(parseInt(note.modified)).toLocaleDateString(
      'en-US'
    );

    previewDiv.innerHTML = `
    <div class="preview-header">
      <h1>${note.title}</h1>
      <div class="preview-header-actions">
        <i class="fa-solid fa-pen" onclick='editNote(${note.id})'></i>
        <i class="fa-solid fa-trash" onclick='deleteNote(${note.id})'></i>
        <i ${
          note.favorite
            ? 'class="fa-solid fa-star style="color: orange"'
            : 'class="fa-regular fa-star"'
        } onclick='addToFavorite(${note.id})'></i>
        <i class="fa-solid fa-print" onclick="printDiv('${
          note.title
        }', 'print-note')"></i>
        <i class="fa-solid fa-xmark" onclick='selectNote()'></i>
     </div>
      <div class="preview-header-dates">
        <p class="preview-header-dates__date">Created ${created}</p>
        <p class="preview-header-dates__date">Modified ${modified}</p>
      </div>
    </div>
    <hr />
    <div class="preview-content" id="print-note">
    </div>
    `;

    const viewer = new toastui.Editor({
      el: document.querySelector('.preview-content'),
      initialValue: note.content,
    });
  } else {
    document.querySelector('.preview').innerHTML = '';
    document.querySelector('.preview').classList.add('hidden');
    currentNote = '';
  }
};

const newNote = () => {
  const id = Date.now().toString();
  const note = {
    id,
    title: 'New note',
    created: id,
    content: '',
    modified: id,
    tags: ['tag1', 'tag2'],
    favorite: false,
  };

  let notes = JSON.parse(localStorage.getItem('notes'));
  if (notes) notes.unshift(note);
  else notes = [note];

  localStorage.setItem('notes', JSON.stringify(notes));

  generateNoteList();
};

const deleteNote = (id) => {
  const notes = JSON.parse(localStorage.getItem('notes'));
  const noteIndex = notes.findIndex((note) => note.id === id.toString());
  notes.splice(noteIndex, 1);
  localStorage.setItem('notes', JSON.stringify(notes));

  generateNoteList();
  selectNote();
};

const editNote = (id) => {
  window.location.href = `../pages/edit/?id=${id}`;
};

let selectedTag;

const generateTagList = () => {
  const noteTagsDiv = document.querySelector('.notes-tags');
  noteTagsDiv.innerHTML = '';

  let notes = showFavorites
    ? JSON.parse(localStorage.getItem('notes')).filter((note) => note.favorite)
    : JSON.parse(localStorage.getItem('notes'));
  let tags = [];
  let filteredNotes;
  notes.forEach((note) => (tags = [...tags, ...note.tags]));
  tags = [...new Set(tags)];
  console.log(selectedTag);

  tags.forEach((tag) => {
    const tagDiv = document.createElement('div');
    tagDiv.classList.add('notes-tag');
    tagDiv.innerHTML = `#${tag}`;
    tagDiv.onclick = () => {
      if (selectedTag === tag) {
        filteredNotes = notes;
        selectedTag = undefined;
      } else {
        filteredNotes = notes.filter((note) => note.tags.includes(tag));
        selectedTag = tag;
      }

      generateNoteList(filteredNotes);
    };
    noteTagsDiv.appendChild(tagDiv);
  });
};

const generateNoteList = (notes = undefined) => {
  if (!notes) {
    notes = showFavorites
      ? JSON.parse(localStorage.getItem('notes')).filter(
          (note) => note.favorite
        )
      : JSON.parse(localStorage.getItem('notes'));
  }
  const notesList = document.querySelector('.notes-list');
  notesList.innerHTML = '';

  if (notes) {
    notes.forEach((note) => {
      const noteDiv = document.createElement('div');
      noteDiv.innerHTML = `
        <div class="note" onclick="selectNote(${note.id})">
          <h1 class="note__title">${note.title} <i class='fa-${
        note.favorite ? 'solid' : 'regular'
      } fa-star right' style='color: ${
        note.favorite ? 'orange' : 'black'
      }' onclick='addToFavorite(${note.id})'></i></h1>
          <p class="note__preview">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas quo, quas neque asperiores laborum aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
          <div class="note-tags-container">
          <div class="note-tags">
            ${generateTags(note.tags)}
          </div>
          <i class="fa-solid fa-plus" onclick="createTag(${note.id})"></i>
          </div>
        </div>`;

      notesList.appendChild(noteDiv);
    });
  }

  generateTagList();
};

const generateTags = (tags) => {
  let tagDivs = '';
  tags.forEach((tag) => {
    tagDivs += `<div class='notes-tag notes-tag-dark'>#${tag}</div>`;
  });

  return tagDivs;
};

generateNoteList();
