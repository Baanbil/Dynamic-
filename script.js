const input = document.getElementById('input');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  document.body.style.backgroundColor = input.value;
})
