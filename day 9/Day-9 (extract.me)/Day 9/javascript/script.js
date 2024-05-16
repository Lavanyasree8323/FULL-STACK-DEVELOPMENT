




function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simple validation rules
    
    if (username === '' || password === '') {
      alert('Please fill in all fields');
      return false;
    }

    // You can add more complex validation rules here

    // If all validation passes, the form will be submitted
    return true;
  }