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

// Aqui controlamos el DOM del index

const contenedorVentasIndex = document.querySelector(".contenedor-VentasIndex")
if(contenedorVentasIndex){
    renderGaleria(propiedades_ventas,contenedorVentasIndex,3)  // Pasamos como argumento el Array, el contenedor a modificar, y la cantidad elementos
}

// Aqui controlamos el DOM del pagina Alquiler.html
const contenedorVentasHtml = document.getElementById("contenedorVentahtml");
if(contenedorVentasHtml){
    renderGaleria(propiedades_ventas,contenedorVentasHtml)
    
}

// El render del boton tiene que ir despues de render alquiler.html, ya que no carga los elementos en dom
const btnVentas = document.querySelector(".btn-ventas")
btnVentas.addEventListener("click", ()=>{
    renderGaleria(propiedades_ventas,contenedorVentasIndex)
}
) 

function renderGaleria (arr,container,cant){
    let template = "";
    for(propiedad of arr.slice(0,cant)){
        template += `
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
                                   if(propiedad.smoke){
                                        let itemFumar = `<p class="text-success"><i class="fas fa-smoking"></i>Se permite Fumar</p>`
                                        template += itemFumar;
                                   }else{
                                        let itemFumar = `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite Fumar</p>`
                                        template += itemFumar;
                                   }
                                   if(propiedad.pets){
                                        let itemMascota = `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
                                        template+=itemMascota
                                   }else{
                                        let itemMascota = `<p class="text-danger"><i class="fa-solid fa-ban"></i> Mascotas permitidas</p>`
                                        template+=itemMascota
                                   }
                                   template +=  `</div>
                                                    </div>
                                                        </div>`;
    }
    container.innerHTML = template

} 

