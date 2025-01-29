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
}
]
const etiquetaCard = document.querySelector(".alquiler");
let contador = 0;
let template =" ";v
for (let propiedad of propiedades_alquiler){
       if(contador > 2 ){
              template += `
              
              `
       }
}