import { NextApiRequest, NextApiResponse } from "next"
import { MongooseConnection } from "../../../../lib/database/mongoose"
import MongooseUserSchema from "../../../../lib/models/MongooseUserSchema"

async function Api(req: NextApiRequest, res: NextApiResponse) {
  const {
    method,
    query: { limit, page },
  } = req

  await MongooseConnection()

  switch (method) {
    case "GET":
      try {
        const _limit = Number(limit) || 4
        const _page = Number(page) || 0

        const users = await MongooseUserSchema.find({})
          .limit(_limit)
          .skip(_page * _limit)

        const usersTotal = await MongooseUserSchema.estimatedDocumentCount()

        res.status(200).json({
          success: true,
          message: "Users successfully fetched from server",
          data: {
            total: usersTotal,
            limit: _limit,
            page: _page,
            count: users.length,
            users: users,
          },
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
