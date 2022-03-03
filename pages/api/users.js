// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import dbConnect from '../../src/utils/dbConnect'

export default async function users(req, res) {
  const { method } = req

  switch(method) {
    case 'GET':
      await dbConnect()
      res.status(200).json({success: true})
      break
  }
}
