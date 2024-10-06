document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnSubmit').addEventListener('click', submit);    
});

function submit() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var users = JSON.parse(sessionStorage.getItem('users'));
    if(users == null) { users = []; }

    // Validate the email and password
    if (email === 'admin@smartshop.com' && password === 'pasword') {
        console.log('redirecting to product list page');
        window.location.href = "smartshop.html";  // Redirect to the homepage
    } else if(users.find(user => user.email === email && user.password === password)) {
        window.location.href = "smartshop.html";
    }
    else {
        alert('Incorrect email or password. Please try again.');
    }
}
