const r = document.querySelector(':root');

const font = JSON.parse(localStorage.getItem('font'));
const theme = JSON.parse(localStorage.getItem('theme'));

if (font) {
  const families = font.families;
  r.style.setProperty('--font-family', font.family);

  WebFont.load({
    google: {
      families,
    },
    active: () => {
      const r = document.querySelector(':root');
      r.style.setProperty('--font-family', font.font);
    },
  });
}

if (theme) {
  const r = document.querySelector(':root');
  r.style.setProperty('--primary-color', theme.primary);
  r.style.setProperty('--primary-gradient-color', theme.primaryGradient);
  r.style.setProperty('--secondary-color', theme.secondary);
  r.style.setProperty('--accent-color', theme.accent);
  r.style.setProperty('--primary-text-color', theme.primaryText);
  r.style.setProperty('--secondary-text-color', theme.secondaryText);
}
