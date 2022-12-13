const stat = document.querySelector('.stat');

const amount = JSON.parse(localStorage.getItem('notes')).length;
stat.innerHTML = `Total amount of notes: ${amount}`;
