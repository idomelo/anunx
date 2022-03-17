import nextConnect from 'next-connect'
import { post } from '../../src/controllers/products'

const handler = nextConnect({
  onError: (err, req, res, next) => {
    if(err) throw err
    res.status(500).end("Something broke!")
    return
  },
  onNoMatch: (req, res) => {
    res.status(404).end("Page is not found")
    return
  },
})
  .post(post)


export default handler

export const config = {
  api: {
    bodyParser: false,
  },
}
