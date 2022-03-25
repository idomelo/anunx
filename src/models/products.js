import mongoose from 'mongoose'

const filesSchema = new mongoose.Schema({
  name: String,
  url: String,
})

const schema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'O campo "Título" é obrigatório']
  },
  category: {
    type: String,
    required: [true, 'O campo "Categoria" é obrigatório']
  },
  description: {
    type: String,
    required: [true, 'O campo "Descrição" é obrigatório']
  },
  price: {
    type: Number,
    required: [true, 'O campo "Preço" é obrigatório']
  },
  user: {
    id: String,
    name: String,
    local: String,
    image: String,
  },
  files: {
    type: [filesSchema],
    default: undefined,
  }
}, {
  timestamps: true,
})

export default mongoose.models.products || mongoose.model('products', schema)