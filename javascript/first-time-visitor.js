if (!window.location.pathname.includes('welcome.html')) {
  const visited = localStorage.getItem('visited');
  if (!visited) {
    window.location.replace('../pages/welcome.html');
  }
}

const finishTutorial = () => {
  localStorage.setItem('visited', 'true');
  window.location.replace('../pages/');
};

const clearStorage = () => {
  localStorage.removeItem('visited');
  window.location.replace('../pages/welcome.html');
};
