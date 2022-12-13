const printNote = (title) => {
  console.log(title);
  const printContent = document.querySelector('.preview-viewer');
  const originalContent = document.body.innerHTML;
  const originalTitle = document.title;
  const r = document.querySelector(':root');
  var rs = getComputedStyle(r);
  const originalColor = rs.getPropertyValue('--primary-text-color');

  document.body.innerHTML = '';
  document.body.append(printContent);
  document.title = title;

  r.style.setProperty('--primary-text-color', '#000000ff');
  window.print();

  r.style.setProperty('--primary-text-color', originalColor);
  document.body.innerHTML = originalContent;
  document.title = originalTitle;
};
