import formidable from 'formidable-serverless'
import productsModel from '../models/products'
import dbConnect from '../utils/dbConnect'

// Cloudinary credentials

import cloudinary from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY_CLOUDINARY, 
  api_secret: process.env.API_SECRET_CLOUDINARY,
})

// =======================

const post = async (req, res) => {
  // Connect the database
  await dbConnect()

  // Formidable receive the form
  const form = new formidable.IncomingForm({
    multiples: true,
    uploadDir: 'public/uploads',
    keepExtensions: true,
  })

  form.parse(req, async (error, fields, data) => {
    if(error) {
      console.log(error)
      return res.status(500).json({ success: false })
    }

    // Pick the files in form
    const { files } = data

    // transform files in an array
    const filesArray = files instanceof Array
    ? files
    : [files]

    const filesToSave = []

    filesArray.forEach(file => {
      const filepath = file.path

      // Upload file in 'filepath' to cloudinary
      cloudinary.v2.uploader.upload(filepath, {
        resource_type: 'image',
        access_type: 'anonymous',
      }, (error, result) => {
      
        if(error) {
          console.error(error)
          return res.status(500).json({ success: false })
        }

        // "result" retorna um objeto com todos os dados
        // da imagem salva na nuvem, 
        // como nome original e url para acesso
        filesToSave.push({
          name: result.original_filename,
          url: result.secure_url,
        })
        
        // Aqui o array 'filesToSave' é preenchido corretamente
        // com os nomes e urls das imagens
        console.log('Array preenchido corretamente--->', filesToSave) 
      })
    })

    const {
      title,
      category,
      description,
      price,
      name,
      local,
      userId,
      image,
    } = fields

    const product = new productsModel({
      title,
      category,
      description,
      price,
      user: {
        id: userId,
        name,
        local,
        image,
      },
      files: filesToSave, // Aqui o array 'filesToSave' deveria estar vindo
      // com o nome e url das imagens, mas está vindo vazio
    })

    const register = await product.save()
    
    if(register) {
      res.status(201).json({ success: true })
    } else {
      res.status(500).json({ success: false })
    }
  })
}

const remove = async (req, res) => {
  await dbConnect()

  const id = req.body.id

  const deleted = await productsModel.findOneAndDelete({ _id: id })

  if(deleted) {
    return res.status(200).json({ success: true })
  } else {
    return res.status(500).json({ success: false })
  }
}

export {
  post,
  remove,
}