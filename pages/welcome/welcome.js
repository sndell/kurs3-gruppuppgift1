let page = 0;

const getCurrentTutorial = () => {
  const listElement = document.querySelector('.content-list');
  const titleElement = document.querySelector('.header__title');
  const pageElement = document.querySelector('.header__page');

  switch (page) {
    case 0:
      console.log('here');
      listElement.innerHTML = `
        <li>Press 'Create note' to make a new note</li>
        <li>Click the title in the top left to change the note title</li>
        <li>Write the note using the editor</li>
        <li>Click close when done, the note automatically saves</li>
      `;
      titleElement.innerHTML = 'Notes';
      pageElement.innerHTML = '1 / 4';
      break;
    case 1:
      console.log('here');
      listElement.innerHTML = `
        <li>Select a note in the list to view it</li>
        <li>Click the trashcan to delete the note</li>
        <li>Click the pen to edit the note</li>
        <li>Click the printer to print the note</li>
        <li>Click the star to add the note to favorites</li>
      `;
      titleElement.innerHTML = 'Note tools';
      pageElement.innerHTML = '2 / 4';
      break;
    case 2:
      console.log('here');
      listElement.innerHTML = `
        <li>Use the searchbar to filter notes by their name</li>
        <li>
          Click on the star next to the searchbar to toggle view of favorited
          notes
        </li>
      `;
      titleElement.innerHTML = 'Filtering';
      pageElement.innerHTML = '3 / 4';
      break;
    case 3:
      console.log('here');
      listElement.innerHTML = `
        <li>Click on the plus button on a note to add a new tag</li>
        <li>Click on a tag on a note to remove it</li>
        <li>
          Click on a tag under the searchbar to only show notes with that tag
        </li>
      `;
      titleElement.innerHTML = 'Tags';
      pageElement.innerHTML = '4 / 4';
      break;
    default:
      break;
  }
};

const nextPage = () => {
  button = document.querySelector('.button__confirm');
  button.innerHTML = 'Next';

  if (page === 3) {
    window.location.href = '../home/';
    localStorage.setItem('visited', 'true');
  }
  page++;
  if (page > 3) page--;
  if (page === 3) button.innerHTML = 'Finish';
  getCurrentTutorial();
};

const previousPage = () => {
  button = document.querySelector('.button__confirm');
  button.innerHTML = 'Next';
  page--;
  if (page < 0) page++;
  getCurrentTutorial();
};

getCurrentTutorial();
