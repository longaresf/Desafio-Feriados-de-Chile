// Función ready() que se ejecuta una vez que han cargado
// todos los elementos del DOM
$(document).ready(function(){
    // Método ajax() para solicitar datos a la API
    $.ajax({
        type:'GET',
        url:'https://www.feriadosapp.com/api/holidays.json',
        dataType:'Json',
        success: function(datosApi){
            console.log(datosApi);

            // Generación de la tabla a partir de los datos
                let tabla1 ="<tr><th>Id</th><th>Fecha</th><th>Título</th><th>Extra</th><th>Ley</th><th>Ley Id</th></tr>";

            // Ciclo ForEach para generar cada fila de la tabla
                datosApi.data.forEach(element =>{
                    tabla1 += 
                    `<tr>
                        <td>${element.id}</td>
                        <td>${element.date}</td>
                        <td>${element.title}</td>
                        <td>${element.extra}</td>
                        <td>${element.law}</td>
                        <td>${element.law_id}</td>
                    </tr>`
                });
            // Inserción de la fila en la tabla
                document.getElementById('tabla-feriados').innerHTML = tabla1;
        },
    });
});