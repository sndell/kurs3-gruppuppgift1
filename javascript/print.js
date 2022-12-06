const printDiv = (noteTitle, divId) => {
  let printContents = document.getElementById(divId).innerHTML;
  let originalContents = document.body.innerHTML;
  document.body.innerHTML = printContents;
  document.title = noteTitle;
  window.print();
  document.body.innerHTML = originalContents;
};
