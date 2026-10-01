const express = require('express');
const cors = require('cors');
const canchasRoutes = require('./routes/canchasRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Ruta principal
app.get('/', (req, res) => {
  res.json({ mensaje: "API REST de Alquiler de Canchas de Fútbol activa" });
});

// Rutas API
app.use('/api', canchasRoutes);

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});