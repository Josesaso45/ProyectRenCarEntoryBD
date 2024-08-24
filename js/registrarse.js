document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn_registro').addEventListener('click', function(event) {
        event.preventDefault(); // Prevenir el envío del formulario por defecto

        const name = document.getElementById('name').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (name && lastname && email && password) {
            // Obtener datos existentes
            let users = JSON.parse(localStorage.getItem('users')) || [];
            
            // Agregar nuevo usuario
            users.push({
                name: name,
                lastname: lastname,
                email: email,
                password: password
            });

            // Guardar datos actualizados en localStorage
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registro exitoso');
            // Opcional: redirigir a la página de inicio de sesión o limpiar el formulario aquí
        } else {
            alert('Por favor complete todos los campos.');
        }
    });
});
