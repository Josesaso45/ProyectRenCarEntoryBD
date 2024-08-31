/*const btn = document.getElementById('btnIngresar')
function logueo(){

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if(email && password){
        if(email === 'nickfernando789@gmail.com' && password === '123'){
            window.location.href = '../html/portalLogin.html';
        }else{
            alert('Contraseña o usuario incorrecto, por favor intentelo de nuevo.');
            borrar();
        }
    }else{
        alert('Por favor coloque su contraseña y usuario.')
    }

}

function borrar() {
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
}

// evento al hacer clic
btn.addEventListener("click", logueo);

// evento al dar enter 
document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        logueo();
    }
});*/
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('logueo').addEventListener('click', function() {
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (email && password) {
            //localstorage estan almacenados los registros
            let users = JSON.parse(localStorage.getItem('users')) || [];
            
            let user = users.find(user => user.email === email && user.password === password);

            if (user) {
                window.location.href = '../html/index.html'; // Redirige a la página del portal usuario,pendiente portal
            } else {
                alert('Correo electrónico o contraseña incorrectos. Por favor, intente de nuevo.');
                document.getElementById('email').value = '';
                document.getElementById('password').value = '';
            }
        } else {
            alert('Por favor, ingrese su correo electrónico y contraseña.');
        }
    });
});



