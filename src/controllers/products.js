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


    let uploadedImg = []
    const filesWrapper = []
    const filesToSave = []

    for(let i = 0; i < filesArray.length; i++){
      uploadedImg = await cloudinary.v2.uploader.upload(filesArray[i].path, {
        resource_type: 'image',
        access_type: 'anonymous',
      }, (error) => {
        if(error) {
          console.error(error)
          return res.status(500).json({ success: false })
        }
      })

      filesWrapper.push(uploadedImg)

      const newFilename = filesWrapper[i].original_filename
      const newUrl = filesWrapper[i].secure_url

      filesToSave.push({
        name: newFilename,
        url: newUrl,
      })
    }

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
      files: filesToSave,
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