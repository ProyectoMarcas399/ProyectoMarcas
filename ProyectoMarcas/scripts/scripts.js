// Codigo de la encuesta
// Valida si la respuesta es correcta o incorrecta
$(document).ready(function () {
  $('#validarRespuestas').click(function () {
    let respuestasCorrectas = {
      Preg1: "Pérdida...",
      Preg2: "Estimular...",
      Preg3: "Anualmente",
      Preg4: "Proteinas...",
      Preg5: "Tóxicos...",
      Preg6: "Contagios...",
      Preg7: "Lesiones...",
      Preg8: "Llamar...",
      Preg9: "Anemia...",
      Preg10: "Conducta..."
    };

    let total = Object.keys(respuestasCorrectas).length;
    let correctas = 0;

    // Quitar los colores al volver a pulsar el botón
    $('label').removeClass('text-green-600 text-red-600');

    $.each(respuestasCorrectas, function (nombre, valorCorrecto) {
      let seleccionada = $(`input[name=${nombre}]:checked`);

      // Muestra las preguntas correctas en verde y las incorrectas en rojo

      if (seleccionada.length > 0) {
        let valorSeleccionado = seleccionada.val();

        if (valorSeleccionado === valorCorrecto) {
          correctas++;
          seleccionada.next('label').addClass('text-green-600');
        } else {
          seleccionada.next('label').addClass('text-red-600');
          $(`input[name=${nombre}][value="${valorCorrecto}"]`).next('label').addClass('text-green-600');
        }
      }
    });

    //Saca la nota
    $('#resultado').html(`Obtuviste ${correctas} de ${total} respuestas correctas.`);
  });
});

  // Codigo del Index
  // Codigo de ventajas y desventajas
  // Señala los elementos subrayados dentro de la lista
const items = document.querySelectorAll('li u');

items.forEach(item => {
    item.addEventListener('mouseover', () => {

      //Codigo al pasar el ratón
        item.style.backgroundColor = '#ffcc00';  
        item.style.color = '#003366';             
    });

    // Codigo al quitar el raton
    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = '';        
        item.style.color = '';                   
    });
});

  // Codigo de la tabla
  $(document).ready(function() {
    // Datos de la tabla
    const datosAlimentacion = {
        perro: [
            { tipo: 'Perro', alimento: 'Croquetas', cantidad: '200g', frecuencia: '2 veces al día' },
            { tipo: 'Perro', alimento: 'Carne', cantidad: '150g', frecuencia: '1 vez al día' }
        ],
        gato: [
            { tipo: 'Gato', alimento: 'Croquetas', cantidad: '100g', frecuencia: '2 veces al día' },
            { tipo: 'Gato', alimento: 'Pescado', cantidad: '80g', frecuencia: '1 vez al día' }
        ],
        conejo: [
            { tipo: 'Conejo', alimento: 'Heno', cantidad: '50g', frecuencia: 'Libre acceso' },
            { tipo: 'Conejo', alimento: 'Verduras', cantidad: '100g', frecuencia: '2 veces al día' }
        ],
        hamster: [
            { tipo: 'Hámster', alimento: 'Semillas', cantidad: '20g', frecuencia: '2 veces al día' },
            { tipo: 'Hámster', alimento: 'Fruta', cantidad: '30g', frecuencia: '1 vez al día' }
        ],
        pajaro: [
            { tipo: 'Pájaro', alimento: 'Semillas', cantidad: '10g', frecuencia: '2 veces al día' },
            { tipo: 'Pájaro', alimento: 'Frutas', cantidad: '15g', frecuencia: '1 vez al día' }
        ],
        peces: [
            { tipo: 'Peces', alimento: 'Pescado', cantidad: '5g', frecuencia: '2 veces al día' },
            { tipo: 'Peces', alimento: 'Alga', cantidad: '3g', frecuencia: '1 vez al día' }
        ]
    };

    // Actualiza la tabla
    function actualizarTabla(animal) {
        const tbody = $("#TablaAlimentacion tbody");
        tbody.empty();
        
        const datos = datosAlimentacion[animal];
        datos.forEach(item => {
            tbody.append(`
                <tr>
                    <td>${item.tipo}</td>
                    <td>${item.alimento}</td>
                    <td>${item.cantidad}</td>
                    <td>${item.frecuencia}</td>
                </tr>
            `);
        });
    }

    // Marcar por defecto perro al actualizar la página
    actualizarTabla('perro');

    // Cambiar la tabla cuando se selecciona otro animal
    $("#Seleccion").change(function() {
        const animalSeleccionado = $(this).val();
        actualizarTabla(animalSeleccionado);
    });
});

// Codigo de la carta
//Selecciona la imagen y el encabezado 1
document.querySelectorAll('.card').forEach(function(card) {
  const title = card.querySelector('h1');
  const image = card.querySelector('img');

  //Mueve los elementos seleccionados
  card.addEventListener('mouseenter', function() {
    title.style.transition = 'transform 0.3s ease'; 
    title.style.transform = 'translateY(-5px)'; 

    image.style.transition = 'transform 0.3s ease'; 
    image.style.transform = 'translateY(-5px)'; 
  });

  //Devuelve los elementos a su posicion original
  card.addEventListener('mouseleave', function() {
    title.style.transform = 'translateY(0)'; 
    image.style.transform = 'translateY(0)'; 
  });
});
