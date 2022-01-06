import mongoose from "mongoose"

const AddressSchema = new mongoose.Schema(
  {
    city: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  {
    _id: false,
  }
)

const InfoSchema = new mongoose.Schema(
  {
    gender: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    looking_for_work: {
      type: Boolean,
      required: true,
    },
    knowledge: {
      type: Array,
      required: true,
    },
    address: {
      type: AddressSchema,
      required: true,
    },
  },
  {
    _id: false,
  }
)

const UserSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      auto: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    info: {
      type: InfoSchema,
      required: true,
    },
  },
  {
    collection: "users",
    versionKey: false,
  }
)

export default mongoose.models.MongooseUserSchema ||
  mongoose.model("MongooseUserSchema", UserSchema)
