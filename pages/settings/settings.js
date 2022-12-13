if (theme) document.querySelector('.theme-selection').value = theme.value;

addEventListener('load', () => {
  let list;
  const test = JSON.parse(localStorage.getItem('fonts'));
  if (!test) {
    list = ['Nunito'];
    localStorage.setItem('fonts', JSON.stringify(list));
  } else list = test;

  generateOptions(list);
  if (font) document.querySelector('.font-selection').value = font.font;
});

const generateOptions = (list) => {
  const fontSelect = document.querySelector('.font-selection');
  fontSelect.innerHTML = '';
  list.forEach((item) => {
    let option = new Option(item, item);
    fontSelect.add(option, undefined);
  });
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
      generateOptions(fonts);
      localStorage.setItem('fonts', JSON.stringify(fonts));
    },
  });

  document.querySelector('.font-add').value = '';
};

const handleTheme = () => {
  const value = document.querySelector('.theme-selection').value;
  let theme;

  switch (value) {
    case 'light':
      theme = {
        value: 'light',
        primary: '#ffffff',
        primaryGradient: '#d9d9d9',
        secondary: '#efefef',
        accent: '#000000',
        primaryText: '#000000',
        secondaryText: '#ffffff',
      };
      break;
    case 'dark':
      theme = {
        value: 'dark',
        primary: '#292933',
        primaryGradient: '#1b1b22',
        secondary: '#21212a',
        accent: '#ffffff',
        primaryText: '#9f9fab',
        secondaryText: '#000000',
      };
      break;
    case 'green':
      theme = {
        value: 'green',
        primary: '#39ffd7',
        primaryGradient: '#18c2a0',
        secondary: '#25e1bb',
        accent: '#18c2a0',
        primaryText: '#354540',
        secondaryText: '#fcfcfc',
      };
      break;
    default:
      break;
  }

  const r = document.querySelector(':root');
  r.style.setProperty('--primary-color', theme.primary);
  r.style.setProperty('--primary-gradient-color', theme.primaryGradient);
  r.style.setProperty('--secondary-color', theme.secondary);
  r.style.setProperty('--accent-color', theme.accent);
  r.style.setProperty('--primary-text-color', theme.primaryText);
  r.style.setProperty('--secondary-text-color', theme.secondaryText);
  localStorage.setItem('theme', JSON.stringify(theme));
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
