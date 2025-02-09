/* DESAFIO ARRAYS y OBJETOS */
// Crear un pagina alquiler y ventas. 
// Ademas cada una se conecta con el arreglo de porpiedades que corresponda
// Generar 2 arreglos de propiedades: Alquiler y ventas 
// Dentro de los arreglos guardar almenos 4 objetos.
   
/// - Utilizar ciclos para recorrer arreglos y objetos.
/// - innerHTML para generar el template  y agregar las respectivas propiedades de la pagina HTML
/// - Utilizar condicionales para aplicar la logica,
///  - los casos que permiten fumar o no y 
///  - mascotas o no

/// - En el index.html solo mostrar 3 propiedades en ventas  
/// - 3 propiedades en alquiler  
/// - propiedades en venta debe tener un boton redirigiendo a su pagina
/// - propiedades- en venta debe tener un boton redirigiendo a su pagina

const propiedades_ventas = [
    {    
           nombre: 'Apartamento de lujo en zona exclusiva',
           src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1278280691588941147/original/b3766aa6-fc4b-4761-8636-13175a988368.jpeg?im_w=1200&im_format=avif',
           descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
           ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
           habitaciones: 4,
           banos:4,
           costo: 170000000,
           smoke: true, 
           pets: false
    },
    {    
            nombre: 'Apartamento acogedor en la montaña',
            src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
            descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
            ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
            habitaciones: 2,
            banos: 1,
            costo: 90000000,
            smoke: true,
            pets: true
 },
 {    
            nombre: 'Penthouse de lujo con terraza panorámica',
            src:"https://a0.muscache.com/im/pictures/miso/Hosting-37399805/original/44a1d6c5-edf2-4143-b567-b16ea1f52523.jpeg?im_w=1440&im_format=avif",
            descripcion: '567 Skyline Avenue, Skyview City, CA 56789',
            ubicacion: '',
            habitaciones: 3,
            banos:3,
            costo: 450000000,
            smoke: false,
            pets: true
},
{    
            nombre: 'Condominio moderno en zona residencial',
            src: 'https://a0.muscache.com/im/pictures/9f5ac2de-c98a-4c0e-b1c8-9599eb813086.jpg?im_w=1200&im_format=avif',
            descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
            ubicacion: '123 Main Street, Anytown, CA 91234',
            habitaciones: 2,
            banos: 2,
            costo: 100220000,
            smoke: false,
            pets: false
},
{    
    nombre: 'Apartamento de lujo en zona exclusiva',
    src: 'https://a0.muscache.com/im/pictures/hosting/Hosting-1278280691588941147/original/b3766aa6-fc4b-4761-8636-13175a988368.jpeg?im_w=1200&im_format=avif',
    descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
    ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
    habitaciones: 4,
    banos:4,
    costo: 170000000,
    smoke: true, 
    pets: false
},
{    
     nombre: 'Apartamento acogedor en la montaña',
     src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
     descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
     ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
     habitaciones: 2,
     banos: 1,
     costo: 90000000,
     smoke: true,
     pets: true
},
{    
     nombre: 'Penthouse de lujo con terraza panorámica',
     src:"https://a0.muscache.com/im/pictures/miso/Hosting-37399805/original/44a1d6c5-edf2-4143-b567-b16ea1f52523.jpeg?im_w=1440&im_format=avif",
     descripcion: '567 Skyline Avenue, Skyview City, CA 56789',
     ubicacion: '',
     habitaciones: 3,
     banos:3,
     costo: 450000000,
     smoke: false,
     pets: true
},
{    
     nombre: 'Condominio moderno en zona residencial',
     src: 'https://a0.muscache.com/im/pictures/9f5ac2de-c98a-4c0e-b1c8-9599eb813086.jpg?im_w=1200&im_format=avif',
     descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
     ubicacion: '123 Main Street, Anytown, CA 91234',
     habitaciones: 2,
     banos: 2,
     costo: 100220000,
     smoke: false,
     pets: false
}
]

// obtenemos el contendor de las card donde se insertara el template PARA LA GALERIA HASTA 3 OBJETOS
const etiquetaCard = document.querySelector(".ventas");
renderCardsGaleriaIncompleta ()
   

// Agregar evento para mostrar todas las CARDS

const btnVenta = document.querySelector(".btn-ventas"); // Obtengo el elemento del DOM btn
    

btnVenta.addEventListener("click", ()=>{
    renderCardsGaleriaCompleta();
})   
          

const contenedorVentas = document.querySelector(".contenedorVentasHtml");
let completoVentasHtml =" ";
       for(let propiedad of propiedades_ventas){
        completoVentasHtml += `
              <div class="col-md-4 mb-4">
                     <div class="card">
                            <img
                            src="${propiedad.src}"
                            class="card-img-top"
                            alt="Imagen del departamento"
                            />
                            <div class="card-body">
                                   <h5 class="card-title">
                                   ${propiedad.nombre}
                                   </h5>
                                   <p class="card-text">
                                   ${propiedad.descripcion}
                                   de la ciudad, cerca de todo.
                                   </p>
                                   <p>
                                   <i class="fas fa-map-marker-alt"></i>${propiedad.ubicacion} 
                                   </p>
                                   <p>
                                   <i class="fas fa-bed"></i> ${propiedad.habitaciones} |
                                   <i class="fas fa-bath"></i> ${propiedad.banos}
                                   </p>
                                   <p><i class="fas fa-dollar-sign"></i>${propiedad.costo}</p>`
                                                 if(propiedad.smoke === true && propiedad.pets === true){
                                                     let itemFumar = `<p class="text-success"><i class="fas fa-smoking"></i>Se permite Fumar</p>`
                                                     completoVentasHtml += itemFumar;
                                                     let itemMascota = `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
                                                     completoVentasHtml+=itemMascota
                                                     }
                                                 else{
                                                     let itemFumar = `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite Fumar</p>`
                                                     completoVentasHtml += itemFumar
                                                     let itemMascota = `<p class="text-danger"><i class="fa-solid fa-ban"></i> Mascotas permitidas</p>`
                                                     completoVentasHtml+=itemMascota
                                                     }                                                             
                                                     completoVentasHtml +=  `</div>
                                   </div>
                                          </div>`;
       }
       contenedorVentas.innerHTML = completoVentasHtml;


     
function renderCardsGaleriaIncompleta () {
        // Variable acumuladora
    let template = '';   // Declaramos el template fuera para evitar re-rederizado y en let por que se actualiza la información del mismo
    // Contador para contar las iteraciones del for y deterno con una condición.         
    let contador = 0;

    // Ahora vamos a recorrer el arreglo
    for (let propiedad of propiedades_ventas){
        
        if(contador <= 2){
            
            // Detener el bucle después de 3 iteraciones
        
                        template +=   `<div class="col-md-4 mb-4">
                                        <div class="card">
                                            <img  class="card-img-top"
                                                src="${propiedad.src}" 
                                                alt="Imagen del departamento"/>
                                                <div class="card-body">
                                                <h5 class="card-title">${propiedad.nombre}</h5>
                                                <p class="card-text">${propiedad.descripcion}</p>
                                                <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                                                <p>
                                                    <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                                                    <i class="fas fa-bath"></i> ${propiedad.banos} Baños
                                                </p>
                                                <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>`                                            
                                                        if(propiedad.smoke === true && propiedad.pets === true){
                                                                let itemFumar = `<p class="text-success"><i class="fas fa-smoking"></i>   Se permite Fumar</p>`
                                                                template += itemFumar;
                                                                let itemMascota = `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
                                                                template+=itemMascota
                                                                }
                                                            else{
                                                                let itemFumar = `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite Fumar</p>`
                                                                template += itemFumar
                                                                let itemMascota = `<p class="text-danger"><i class="fa-solid fa-ban"></i> Mascotas permitidas</p>`
                                                                template+=itemMascota
                                                                }                                                             
                    template +=  `</div>
                                        </div>
                                            </div>`;
                                                
                                                }
            contador++                                                               
            }etiquetaCard.innerHTML += template;
 }
 function renderCardsGaleriaCompleta () {
    // Variable acumuladora
let template = '';   // Declaramos el template fuera para evitar re-rederizado y en let por que se actualiza la información del mismo

// Ahora vamos a recorrer el arreglo
for (let propiedad of propiedades_ventas){

    
     // Detener el bucle después de 3 iteraciones

                template +=   `<div class="col-md-4 mb-4">
                                  <div class="card">
                                    <img  class="card-img-top"
                                        src="${propiedad.src}" 
                                        alt="Imagen del departamento"/>
                                        <div class="card-body">
                                        <h5 class="card-title">${propiedad.nombre}</h5>
                                        <p class="card-text">${propiedad.descripcion}</p>
                                        <p><i class="fas fa-map-marker-alt"></i> ${propiedad.ubicacion}</p>
                                        <p>
                                            <i class="fas fa-bed"></i> ${propiedad.habitaciones} Habitaciones |
                                            <i class="fas fa-bath"></i> ${propiedad.banos} Baños
                                        </p>
                                        <p><i class="fas fa-dollar-sign"></i> ${propiedad.costo}</p>`                                            
                                                if(propiedad.smoke === true && propiedad.pets === true){
                                                        let itemFumar = `<p class="text-success"><i class="fas fa-smoking"></i>   Se permite Fumar</p>`
                                                        template += itemFumar;
                                                        let itemMascota = `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
                                                        template+=itemMascota
                                                        }
                                                    else{
                                                        let itemFumar = `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite Fumar</p>`
                                                        template += itemFumar
                                                        let itemMascota = `<p class="text-danger"><i class="fa-solid fa-ban"></i> Mascotas permitidas</p>`
                                                        template+=itemMascota
                                                        }                                                             
               template +=  `</div>
                                 </div>
                                      </div>`;
                                        
                                        }                                                          
    etiquetaCard.innerHTML += template;
}