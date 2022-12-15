addEventListener('load', () => {
  let list;
  const test = JSON.parse(localStorage.getItem('fonts'));
  if (!test) {
    list = ['Nunito'];
    localStorage.setItem('fonts', JSON.stringify(list));
  } else list = test;

  getThemes();
  getFonts(list);
});

const getThemes = async () => {
  const themeSelect = document.querySelector('.theme-selection');
  const themes = await fetch('../../styles/themes.json').then((res) =>
    res.json()
  );

  themeSelect.innerHTML = '';

  themes.forEach((theme) => {
    let option = new Option(theme.name, theme.name);
    themeSelect.add(option, undefined);
  });

  if (theme) themeSelect.value = theme.name;
};

const handleTheme = async () => {
  const r = document.querySelector(':root');
  const themes = await fetch('../../styles/themes.json').then((res) =>
    res.json()
  );

  const value = document.querySelector('.theme-selection').value;
  const theme = themes.find((theme) => theme.name === value);

  r.style.setProperty('--primary-color', theme.primary);
  r.style.setProperty('--primary-gradient-color', theme.primaryGradient);
  r.style.setProperty('--secondary-color', theme.secondary);
  r.style.setProperty('--accent-color', theme.accent);
  r.style.setProperty('--primary-text-color', theme.primaryText);
  r.style.setProperty('--secondary-text-color', theme.secondaryText);

  localStorage.setItem('theme', JSON.stringify(theme));
};

const getFonts = (list) => {
  const fontSelect = document.querySelector('.font-selection');
  fontSelect.innerHTML = '';
  list.forEach((item) => {
    let option = new Option(item, item);
    fontSelect.add(option, undefined);
  });
  if (font) fontSelect.value = font.font;
};

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
      getFonts(fonts);
      localStorage.setItem('fonts', JSON.stringify(fonts));
    },
  });

  document.querySelector('.font-add').value = '';
};

const handleFont = () => {
  const value = document.querySelector('.font-selection').value;

  const families = [`${value}:300,400,700`];
  const family = value;

  // switch (value) {
  //   case 'nunito':
  //     families = ['Nunito:300,400,700'];
  //     family = "'Nunito', sans-serif";
  //     break;
  //   case 'roboto':
  //     families = ['Roboto:300,400,700'];
  //     family = "'Roboto', sans-serif";
  //     break;
  //   case 'chivomono':
  //     families = ['Chivo Mono:300,400,700'];
  //     family = "'Chivo Mono', monospace";
  //     break;
  //   case 'indieflower ':
  //     families = ['Indie Flower:300,400,700'];
  //     family = "'Indie Flower', cursive";
  //     break;
  //   default:
  //     break;
  // }

  WebFont.load({
    google: {
      families,
    },
    active: () => {
      const r = document.querySelector(':root');
      r.style.setProperty('--font-family', family);
    },
  });

  localStorage.setItem(
    'font',
    JSON.stringify({
      font: value,
      families,
    })
  );
};
