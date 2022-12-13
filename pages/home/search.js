const search = document.querySelector('.menu-actions__search');

search.addEventListener('input', (e) => {
  const input = e.currentTarget.value.trim().toLowerCase();
  const notes = document.querySelectorAll('.note__title');

  notes.forEach((note) =>
    note.parentElement.parentElement.parentElement.classList.remove('hidden')
  );

  if (input) {
    notes.forEach((note) => {
      if (!note.innerText.toLowerCase().includes(input)) {
        console.log(input);
        const remove = note.parentElement.parentElement.parentElement;
        remove.classList.add('hidden');
      }
    });
  }
});
