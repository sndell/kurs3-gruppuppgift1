const visited = localStorage.getItem('visited');
console.log(visited);

if (!visited) {
  window.location.replace('../welcome');
}
