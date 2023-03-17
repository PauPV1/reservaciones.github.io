

    //ir disminuyendo la cantidad de niños dependiendo de los adultos que vayan
    const inputNmenores = document.getElementById('Nmenores');
    const inputAdultos = document.getElementById("Nadultos");
    const Mostrar = document.getElementById("contenedor2");
    var ninos;
    var mensaje;
    
    inputAdultos.addEventListener('input', () => {
        if (inputAdultos.value == 1) {
           ninos = 4;
        } else if (inputAdultos.value == 2) {
             ninos = 3;
        }
        if (inputAdultos.value == 3) {
             ninos = 2;
          } else if (inputAdultos.value == 4) {
               ninos = 0;
               mensaje="Si tienes 4 adultos no puedes poner a ningun niño"
          }
      });                                                                 

      //agregar una nueva funcion al input y desplegar la opcion de la edad de los menores en caso de que se cumpla el caso
        inputNmenores.addEventListener('input', () => {
        if (inputNmenores.value < 0) {
    inputNmenores.value = 0;
        } else if (inputNmenores.value > ninos) {
    inputNmenores.value = ninos;
        }
        else if (inputNmenores.value == 1) {
            Mostrar.children[0].style.display="flex";
            Mostrar.children[1].style.display="none";
            Mostrar.children[2].style.display="none";
            Mostrar.children[3].style.display="none";
            
                }
        else if (inputNmenores.value == 2 ) {
            Mostrar.children[0].style.display="flex";
            Mostrar.children[1].style.display="flex";
            Mostrar.children[2].style.display="none";
            Mostrar.children[3].style.display="none";
            
        }
        else if (inputNmenores.value == 3) {
            Mostrar.children[0].style.display="flex";
            Mostrar.children[1].style.display="flex";
            Mostrar.children[2].style.display="flex";
            Mostrar.children[3].style.display="none";
            
                }
        else if (inputNmenores.value == 4) {
            Mostrar.children[0].style.display="flex";
            Mostrar.children[1].style.display="flex";
            Mostrar.children[2].style.display="flex";
            Mostrar.children[3].style.display="flex";
                } 
        else if (inputNmenores.value == 0) {
            Mostrar.children[0].style.display="none";
            Mostrar.children[1].style.display="none";
            Mostrar.children[2].style.display="none";
            Mostrar.children[3].style.display="none";
                }
        });                                                                 

      
        // Enviar datos del formulario
         function enviardatos(){
            const Nlugares = document.getElementById("Nlugares").value;
            const Nadultos = inputAdultos.value;
            const Nhabitaciones = document.getElementById("Nhabitaciones").value;
            const Npaisajes = document.getElementById("Npaisajes").value;
            const Nmenores = inputNmenores.value;
            var inputImenor1 = document.querySelector(".Imenor1");
            var inputImenor2 = document.querySelector(".Imenor2");
            var inputImenor3 = document.querySelector(".Imenor3");
            var inputImenor4 = document.querySelector(".Imenor4");
            //---------
            var valorImenor1 = inputImenor1.value;
            var valorImenor2 = inputImenor2.value;
            var valorImenor3 = inputImenor3.value;
            var valorImenor4 = inputImenor4.value;;
            //---
            const nombre = document.getElementById("nombre").value;
            const correo = document.getElementById("correo").value;

            //imprimirlos mediante un alert
            alert(` Número de lugares: ${Nlugares} Numero de adultos: ${Nadultos} \n Número de habitaciones: ${Nhabitaciones} \n Número de pasajes: ${Npaisajes} \n Número de menores: ${Nmenores} \n Edad de menor 1: ${valorImenor1} \n Edad de menor 2: ${valorImenor2} \n Edad de menor 3: ${valorImenor3} \n Edad de menor 4: ${valorImenor4} \n Nombre: ${nombre} \n Correo: ${correo}`)
        }
        