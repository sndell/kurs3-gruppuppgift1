const notes = JSON.parse(localStorage.getItem('notes'));

const createTag = (id) => {
  const modal = document.createElement('div');
  modal.classList.add('tag-modal');
  modal.innerHTML = `
    <div class="tag-modal-container">
      <input type="text" class='tag-modal__input'/>
      <button onclick="handleCreate(${id})">create</button>
      <button onclick="handleCancel()">cancel</button>
    </div>
  `;

  document.getElementsByTagName('main')[0].appendChild(modal);
  // document.appendChild(modal);
};

const handleCreate = (id) => {
  const note = notes.find((note) => note.id === id.toString());
  const input = document.querySelector('.tag-modal__input');
  if (input.value) {
    const tags = input.value.split(',');
    note.tags = [...note.tags, ...tags];
    note.tags = [...new Set(note.tags)];
    localStorage.setItem('notes', JSON.stringify(notes));
    document.querySelector('.tag-modal').remove();
    generateNoteList();
  }
};

const handleCancel = () => {
  document.querySelector('.tag-modal').remove();
};
