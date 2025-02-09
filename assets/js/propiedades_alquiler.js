
const propiedades_alquiler = [
    {    
           nombre: 'Hare Nua',
           src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/00/97/23/hare-nua.jpg?w=1200&h=-1&s=1',
           descripcion: 'Un oasis de calma y naturaleza ubicado en pleno centro de Rapa Nui.',
           ubicacion: 'Atamu Tekena, Hanga Roa, Isla de Pascua 2770000 Chile',
           habitaciones: 4,
           banos: 2,
           costo: 20000,
           smoke: true,
           pets: true
    },
    {    
            nombre: 'Hotel Bidasoa',
            src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/f0/ca/ab/caption.jpg?w=1100&h=-1&s=1',
            descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
            ubicacion: 'Hotel Bidasoa está situado frente al Museo de la Moda, en el barrio exclusivo de Vitacura',
            habitaciones: 4,
            banos: 2,
            costo: 25000,
            smoke: false,
            pets: true
 },
 {    
            nombre: 'Solar Madariaga Hotel',
            src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/f4/4a/19/caption.jpg?w=1200&h=-1&s=1',
            descripcion: 'Solar Madariaga Hotel ha sido construido en una hermosa propiedad, la casona post-colonial de nuestra familia.',
            ubicacion: 'Gabriela Mistral 683, Vicuña, Vicuña 1760762 Chile',
            habitaciones: 3,
            banos:2,
            costo: 45000,
            smoke: true,
            pets: true
},
{    
            nombre: 'Casa Primal',
            src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/84/f1/37/caption.jpg?w=800&h=-1&s=1',
            descripcion: 'ofrece alojamiento con piscina al aire libre, parking privado gratis, jardín y salón de uso común.',
            ubicacion: 'Camino al Volcán 30517, San Alfonso, San José de Maipo 9460000 Chile',
            habitaciones: 3,
            banos: 2,
            costo: 42000,
            smoke: true,
            pets: true
},
{    
       nombre: 'Hare Nua',
       src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/00/97/23/hare-nua.jpg?w=1200&h=-1&s=1',
       descripcion: 'Un oasis de calma y naturaleza ubicado en pleno centro de Rapa Nui.',
       ubicacion: 'Atamu Tekena, Hanga Roa, Isla de Pascua 2770000 Chile',
       habitaciones: 4,
       banos: 2,
       costo: 20000,
       smoke: true,
       pets: true
},
{    
        nombre: 'Hotel Bidasoa',
        src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/f0/ca/ab/caption.jpg?w=1100&h=-1&s=1',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: 'Hotel Bidasoa está situado frente al Museo de la Moda, en el barrio exclusivo de Vitacura',
        habitaciones: 4,
        banos: 2,
        costo: 25000,
        smoke: false,
        pets: true
},
{    
        nombre: 'Solar Madariaga Hotel',
        src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2d/f4/4a/19/caption.jpg?w=1200&h=-1&s=1',
        descripcion: 'Solar Madariaga Hotel ha sido construido en una hermosa propiedad, la casona post-colonial de nuestra familia.',
        ubicacion: 'Gabriela Mistral 683, Vicuña, Vicuña 1760762 Chile',
        habitaciones: 3,
        banos:2,
        costo: 45000,
        smoke: true,
        pets: true
},
{    
        nombre: 'Casa Primal',
        src: 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2b/84/f1/37/caption.jpg?w=800&h=-1&s=1',
        descripcion: 'ofrece alojamiento con piscina al aire libre, parking privado gratis, jardín y salón de uso común.',
        ubicacion: 'Camino al Volcán 30517, San Alfonso, San José de Maipo 9460000 Chile',
        habitaciones: 3,
        banos: 2,
        costo: 42000,
        smoke: true,
        pets: true
}
] 
const contenedorAlquiler = document.querySelector(".contenedorAlquiler");
renderAlquilerIncompleto()

const btnAlquiler = document.querySelector(".btn-alquiler");
// Agregar evento boton para mostrar todas las CARDS



btnAlquiler.addEventListener("click", ()=>{
       renderGaleriaAlquilerCompleta()
})
function renderGaleriaAlquilerCompleta(){
       let templateCompleto =" ";
       for(let propiedad of propiedades_alquiler){
              templateCompleto += `
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
                                                     templateCompleto += itemFumar;
                                                     let itemMascota = `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
                                                     templateCompleto+=itemMascota
                                                     }
                                                 else{
                                                     let itemFumar = `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite Fumar</p>`
                                                     templateCompleto += itemFumar
                                                     let itemMascota = `<p class="text-danger"><i class="fa-solid fa-ban"></i> Mascotas permitidas</p>`
                                                     templateCompleto+=itemMascota
                                                     }                                                             
       templateCompleto +=  `</div>
                                   </div>
                                          </div>`;
       }
       contenedorAlquiler.innerHTML = templateCompleto// Aqui va el innerhtml
              }


const htmlContenedorAlquiler = document.querySelector(".contenedorAlquilerhtml")
renderAlquiler()






// Obtengo el elemento del DOM btn
//agregegar solo 3 elementos en la galeria




function renderAlquilerIncompleto(){
       let iterador = 0;
       let templateCompleto1 =" ";
       for (let propiedad of propiedades_alquiler){
              if(iterador <= 2 ){
                     templateCompleto1 += `
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
                                                            templateCompleto1 += itemFumar;
                                                            let itemMascota = `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
                                                            templateCompleto1+=itemMascota
                                                            }
                                                        else{
                                                            let itemFumar = `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite Fumar</p>`
                                                            templateCompleto1 += itemFumar
                                                            let itemMascota = `<p class="text-danger"><i class="fa-solid fa-ban"></i> Mascotas permitidas</p>`
                                                            templateCompleto1+=itemMascota
                                                            }                                                             
              templateCompleto1 +=  `</div>
                                          </div>
                                                 </div>`;
              }
              iterador++;
       }
       contenedorAlquiler.innerHTML = templateCompleto1
}

function renderAlquiler(){
       let templateCompleto3 =" ";
       for(let propiedad of propiedades_alquiler){
              templateCompleto3 += `
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
                                                     templateCompleto3 += itemFumar;
                                                     let itemMascota = `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
                                                     templateCompleto3+=itemMascota
                                                     }
                                                 else{
                                                     let itemFumar = `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite Fumar</p>`
                                                     templateCompleto3 += itemFumar
                                                     let itemMascota = `<p class="text-danger"><i class="fa-solid fa-ban"></i> Mascotas permitidas</p>`
                                                     templateCompleto3+=itemMascota
                                                     }                                                             
       templateCompleto3 +=  `</div>
                                   </div>
                                          </div>`;
       }
       htmlContenedorAlquiler.innerHTML = templateCompleto3// Aqui va el innerhtml

}







// Agregar evento boton para mostrar todas las CARDS



btnAlquiler.addEventListener("click", ()=>{
       renderGaleriaAlquilerCompleta()
})
function renderGaleriaAlquilerCompleta(){
       let templateCompleto =" ";
       for(let propiedad of propiedades_alquiler){
              templateCompleto += `
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
                                                     templateCompleto += itemFumar;
                                                     let itemMascota = `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
                                                     templateCompleto+=itemMascota
                                                     }
                                                 else{
                                                     let itemFumar = `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite Fumar</p>`
                                                     templateCompleto += itemFumar
                                                     let itemMascota = `<p class="text-danger"><i class="fa-solid fa-ban"></i> Mascotas permitidas</p>`
                                                     templateCompleto+=itemMascota
                                                     }                                                             
       templateCompleto +=  `</div>
                                   </div>
                                          </div>`;
       }
       contenedorAlquiler.innerHTML = templateCompleto// Aqui va el innerhtml
              }
