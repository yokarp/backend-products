const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  fechaVencimiento: {
    type: Date,
    required: true,
  },
  cantidad: {
    type: Number,
    required: false,
    min: [0, 'La cantidad no puede ser negativa'],
  },
  pesoUnidad: {
    type: Number,
    required: true,
    min: [0, 'El peso por unidad no puede ser negativo'],
  },
  fechaEntrada: {
    type: Date,
    required: false,
  },
  proveedor: {
    type: String,
    required: false,
  },
  referenciaCompra: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model('Product', productSchema);