import { NextApiRequest, NextApiResponse } from "next"
import { MongooseConnection } from "../../../../lib/database/mongoose"
import MongooseUserSchema from "../../../../lib/models/MongooseUserSchema"

async function Api(req: NextApiRequest, res: NextApiResponse) {
  const {
    method,
    query: { id },
  } = req

  await MongooseConnection()

  switch (method) {
    case "GET":
      try {
        const user = await MongooseUserSchema.findById(id)

        if (!user) {
          return res.status(404).json({
            success: false,
            message: "User not found",
          })
        }

        res.status(200).json({
          success: true,
          message: "User successfully fetched from server",
          user: user,
        })
      } catch (error) {
        console.log(error)

        res.status(400).json({
          success: false,
          message: "Something went wrong",
        })
      }
      break

    default:
      res.status(405).json({
        success: false,
        message: "Method not allowed",
      })
      break
  }
}

export default Api
