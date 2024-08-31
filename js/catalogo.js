
document.addEventListener('DOMContentLoaded', function() {
    // Función para cmabiar la imagen segun el color seleccionado 
    function setupColorChange(selectorId, imgId) {
        const colorSelect = document.getElementById(selectorId);
        const carImage = document.getElementById(imgId);

        colorSelect.addEventListener('change', function() {
            carImage.src = colorSelect.value;
        });
    }

    // se llama la funcion para configurar el camboi
    setupColorChange('toyota-color', 'toyota-img');
    setupColorChange('nissan-color', 'nissan-img');
    setupColorChange('bomber-capucha-color', 'bomber-capucha-img');
});

