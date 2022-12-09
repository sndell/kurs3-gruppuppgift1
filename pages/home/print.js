const printNote = (title) => {
  console.log(title);
  const printContent = document.querySelector('.preview-viewer');
  const originalContent = document.body.innerHTML;
  const originalTitle = document.title;

  document.body.innerHTML = '';
  document.body.append(printContent);
  document.title = title;
  window.print();

  document.body.innerHTML = originalContent;
  document.title = originalTitle;
};
