const canchas = [
  {
    id: 1,
    nombre: "Cancha 1 - Sintética Premium (7v7)",
    tipo: "Sintética 7v7",
    precioHora: 80,
    estado: "Disponible",
    horario: "18:00 - 19:00",
    fecha: "2026-10-01",
    imagen: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=500&q=80",
    descripcion: "Cancha de césped sintético de última generación con iluminación LED.",
    promocion: "20% de descuento en horario por la tarde"
  },
  {
    id: 2,
    nombre: "Cancha 2 - Losa Deportiva (5v5)",
    tipo: "Losa 5v5",
    precioHora: 50,
    estado: "Ocupada",
    horario: "19:00 - 20:00",
    fecha: "2026-10-01",
    imagen: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=500&q=80",
    descripcion: "Ideal para futsal con medidas reglamentarias.",
    promocion: "Sin promoción"
  },
  {
    id: 3,
    nombre: "Cancha 3 - Grass Natural (11v11)",
    tipo: "Grass Natural 11v11",
    precioHora: 150,
    estado: "Disponible",
    horario: "20:00 - 21:00",
    fecha: "2026-10-01",
    imagen: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?w=500&q=80",
    descripcion: "Cancha profesional de césped natural con vestuarios amoblados.",
    promocion: "Incluye chalecos y balón gratis"
  }
];

const servicios = [
  { id: 1, nombre: "Alquiler de Cancha", detalle: "Reserva por horas diurnas y nocturnas" },
  { id: 2, nombre: "Iluminación LED", detalle: "Potente iluminación para partidos nocturnos" },
  { id: 3, nombre: "Vestuarios y Duchas", detalle: "Agua caliente y lockers de seguridad" },
  { id: 4, nombre: "Estacionamiento", detalle: "Zona vigilada para autos y motos" }
];

module.exports = { canchas, servicios };