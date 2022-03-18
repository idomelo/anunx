import path from 'path'
import fs from 'fs'
import formidable from 'formidable-serverless'
import productsModel from '../models/products'
import dbConnect from '../utils/dbConnect'

const post = async (req, res) => {
  await dbConnect()

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

    const { files } = data

    const filesToRename = files instanceof Array
    ? files
    : [files]

    const filesToSave = []

    filesToRename.forEach(file => {
      const timestamp = Date.now()
      const random = Math.floor(Math.random() * 99999999) + 1
      const extension = path.extname(file.name)

      const filename = `${timestamp}_${random}${extension}`

      const oldpath = path.join(__dirname, `../../../../../${file.path}`)
      const newpath = path.join(__dirname, `../../../../../${form.uploadDir}/${filename}`)
      console.log('oldpath-:', oldpath)
      console.log('newpath-:', newpath)

      filesToSave.push({
        name: filename,
        path: newpath,
      })

      fs.rename(oldpath, newpath, (error) => {
        if(error) {
          console.log(error)
          return res.status(500).json({ success: false })
        }
      })
    })

    const {
      title,
      category,
      description,
      price,
      name,
      email,
      phone,
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
        email,
        phone,
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