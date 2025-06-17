let users = JSON.parse(localStorage.getItem('users')) || [];

const userForm = document.getElementById('userForm');

if (userForm) {
  userForm.addEventListener('submit', function (e) {
    e.preventDefault();

    
    if (!userForm.checkValidity()) {
      userForm.classList.add('was-validated');
      return;
    }

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const userId = document.getElementById('userId').value.trim();

    const user = { name, email, id: userId };

    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));

    userForm.reset();
    userForm.classList.remove('was-validated');

    window.location.href = 'users.html';
  });
}

const userTableBody = document.getElementById('userTableBody');

if (userTableBody) {
  userTableBody.innerHTML = '';

  users.forEach(user => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.id}</td>
    `;
    userTableBody.appendChild(row);
  });
}
