document.getElementById('mode').addEventListener('click', () => {

  document.body.classList.toggle('dark');
  localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');

});

if (localStorage.getItem('theme') === 'dark' || localStorage.getItem('theme') != 'light') {

  document.body.classList.add('dark');

}
