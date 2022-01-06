import mongoose from "mongoose"

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export async function MongooseConnection() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const mongo_uri = process.env.MONGODB_URI

    const options = {
      dbName: "demoapi",
      bufferCommands: false,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }

    cached.promise = mongoose.connect(mongo_uri, options).then((mongoose) => {
      return mongoose
    })
  }

  cached.conn = await cached.promise

  return cached.conn
}
