const notes = JSON.parse(localStorage.getItem('notes'));

const createTag = (id) => {
  window.event.stopPropagation();

  const modal = document.createElement('div');
  modal.classList.add('tag-modal');
  modal.innerHTML = `
  <div class="tag-modal">
    <div class="tag-modal-container">
      <input
        type="text"
        class="tag-modal__input"
        placeholder="Enter tag name"
      />
      <button class="tag-modal__cancel" onclick="handleCancel()">Cancel</button>
      <button class="tag-modal__confirm" onclick="handleCreate(${id})">Add</button>
    </div>
  </div>
  `;

  document.body.appendChild(modal);
  document.querySelector('.tag-modal__input').focus();
  document.querySelector('.tag-modal').addEventListener('keydown', (e) => {
    if (e.keyCode === 13) handleCreate(id);
  });
};

const handleCreate = (id) => {
  const note = notes.find((note) => note.id === id.toString());
  const input = document.querySelector('.tag-modal__input');
  if (input.value.trim()) {
    const tags = input.value.split(', ');
    note.tags = [...new Set([...note.tags, ...tags])];
    // note.tags = [...new Set(note.tags)];
    localStorage.setItem('notes', JSON.stringify(notes));
    document.querySelector('.tag-modal').remove();
    generateTagList();
  } else {
    input.value = '';
    input.focus();
  }
};

const removeTag = (id, tag) => {
  window.event.stopPropagation();
  const note = notes.find((note) => note.id === id.toString());
  note.tags.splice(note.tags.indexOf(tag), 1);
  localStorage.setItem('notes', JSON.stringify(notes));
  generateTagList();
};

const handleCancel = () => {
  document.querySelector('.tag-modal').remove();
};
