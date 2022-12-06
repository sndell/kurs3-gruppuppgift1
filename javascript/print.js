const printDiv = (noteTitle, divId) => {
  const printContents = document.querySelector('.preview-content');
  const originalContents = document.body.innerHTML;
  document.body.innerHTML = '';
  document.body.append(printContents);
  document.title = noteTitle;
  window.print();
  document.body.innerHTML = originalContents;
};
