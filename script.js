const form = document.getElementById('user-details');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  
  localStorage.setItem('name', name);
  localStorage.setItem('age', age);
  localStorage.setItem('gender', gender);
  
  alert('Details saved successfully');
  
  window.location.href = 'album.html';
});

