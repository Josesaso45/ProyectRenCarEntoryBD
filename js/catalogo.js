// Espera a que el DOM esté completamente cargado
/*document.addEventListener('DOMContentLoaded', function() {
    // Obtén el elemento select
    var selectElement = document.getElementById('colorAuto');
    
    // Añade un event listener para el cambio en el select
    selectElement.addEventListener('change', function() {
        // Obtén la opción seleccionada
        var selectedOption = this.options[this.selectedIndex];
        
        // Obtén el valor del atributo value (la ruta de la imagen)
        var imageUrl = selectedOption.value;
        
        // Cambia la fuente de la imagen
        var imageElement = document.getElementById('imgtoyota');
        imageElement.src = imageUrl;
    });
});*/

//
document.addEventListener('DOMContentLoaded', function() {
    // Función para manejar el cambio de imagen según el color seleccionado
    function setupColorChange(selectorId, imgId) {
        const colorSelect = document.getElementById(selectorId);
        const carImage = document.getElementById(imgId);

        colorSelect.addEventListener('change', function() {
            carImage.src = colorSelect.value;
        });
    }

    // Configurar el cambio de imagen para cada producto
    setupColorChange('toyota-color', 'toyota-img');
    setupColorChange('nissan-color', 'nissan-img');
    setupColorChange('bomber-capucha-color', 'bomber-capucha-img');
});

