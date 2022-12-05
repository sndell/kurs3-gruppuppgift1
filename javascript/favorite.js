let showFavorites = false;

const addToFavorite = (id) => {
  const notes = JSON.parse(localStorage.getItem("notes"));
  const note = notes.find((note) => note.id === id.toString());
  note.favorite = !note.favorite;
  localStorage.setItem("notes", JSON.stringify(notes));
  selectNote(id);
  generateNoteList();
};

const ToggleFavorite = () => {
  showFavorites = !showFavorites;
  generateNoteList();
};
