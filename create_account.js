document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('btnSubmit').addEventListener('click', submit);
});

function submit() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var users = JSON.parse(sessionStorage.getItem('users'));
    if(users == null) {
        users = [];
    }

    users.push({'email': email, 'password': password});

    sessionStorage.setItem('users', JSON.stringify(users));
}