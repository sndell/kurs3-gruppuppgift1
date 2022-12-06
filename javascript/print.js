const printDiv = (noteTitle, divId) => {
  const printContents = document.getElementById(divId).innerHTML;
  const originalContents = document.querySelector('.preview-content');
  document.body.innerHTML = '';
  document.body.append(originalContents);
  document.title = noteTitle;
  window.print();
  document.body.innerHTML = originalContents;
};
