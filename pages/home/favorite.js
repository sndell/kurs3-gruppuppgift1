let showFavorites = false;

const toggleFavorite = (id) => {
  const notes = JSON.parse(localStorage.getItem('notes'));
  const note = notes.find((note) => note.id === id.toString());
  note.favorite = !note.favorite;
  localStorage.setItem('notes', JSON.stringify(notes));
  selectNote();
  selectNote(id);
  generateTagList();
};

const toggleShowFavorite = () => {
  const favoriteShow = document.querySelector('.favorite-hide');
  const favoriteHide = document.querySelector('.favorite-show');

  if (showFavorites) {
    favoriteShow.classList.remove('hidden');
    favoriteHide.classList.add('hidden');
  } else {
    console.log('here');
    favoriteHide.classList.remove('hidden');
    favoriteShow.classList.add('hidden');
  }

  showFavorites = !showFavorites;
  generateTagList();
};
