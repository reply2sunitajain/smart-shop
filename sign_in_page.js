document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btnSubmit').addEventListener('click', submit);    
});

function submit() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Validate the email and password
    if (email === 'admin@smartshop.com' && password === 'pasword') {
        console.log('redirecting to product list page');
        window.location.href = "smartshop.html";  // Redirect to the homepage
    } else {
        alert('Incorrect email or password. Please try again.');
    }
}
