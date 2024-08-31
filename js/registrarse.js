document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('btn_registro').addEventListener('click', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const lastname = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        if (name && lastname && email && password) {
            // Obtener datos existentes se uso localStorage para guardar los datos que ingrese el usuario 
            let users = JSON.parse(localStorage.getItem('users')) || [];
            
            //metodo.push para gregar nuevos usuarios al final 
            users.push({
                name: name,
                lastname: lastname,
                email: email,
                password: password
            });

            // Guardar datos actualizados en localStorage
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registro exitoso');
        } else {
            alert('Por favor complete todos los campos.');
        }
    });
});
//2da opcion usar un array para guardar los datos de registro
//agregue color random en los titulos del formulario y la portada
function colorRandom() {
    const titulo = document.getElementById('titulocolor');
    const tituloForm = document.getElementById('registrate');
    
    function cambiarColor() {
        const r = Math.floor(Math.random() * 124);
        const g = Math.floor(Math.random() * 124);
        const b = Math.floor(Math.random() * 124);

        const colorRGB = `rgb(${r},${g},${b})`;
        titulo.style.color = colorRGB;
        tituloForm.style.color = colorRGB;
    }

    setInterval(cambiarColor, 1000);
}

function cargarFunciones() {
    colorRandom();

}