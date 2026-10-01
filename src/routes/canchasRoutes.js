const express = require('express');
const router = express.Router();
const { canchas, servicios } = require('../data/canchasData');

// Función auxiliar para quitar tildes
const normalizarTexto = (texto) => 
  texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

// GET: Obtener todas las canchas (con filtros)
router.get('/canchas', (req, res) => {
  let resultado = [...canchas];
  const { disponibilidad, tipo } = req.query;

  if (disponibilidad) {
    resultado = resultado.filter(c => normalizarTexto(c.estado) === normalizarTexto(disponibilidad));
  }
  if (tipo) {
    resultado = resultado.filter(c => normalizarTexto(c.tipo).includes(normalizarTexto(tipo)));
  }

  res.json({
    ok: true,
    total: resultado.length,
    data: resultado
  });
});

// GET: Detalle por ID
router.get('/canchas/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const cancha = canchas.find(c => c.id === id);

  if (!cancha) {
    return res.status(404).json({ ok: false, mensaje: "Cancha no encontrada" });
  }

  res.json({ ok: true, data: cancha });
});

// GET: Servicios
router.get('/servicios', (req, res) => {
  res.json({ ok: true, data: servicios });
});

module.exports = router;