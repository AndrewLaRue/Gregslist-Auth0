import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const HouseSchema = new Schema(
  {
    bedrooms: { type: Number, required: true, min: 1},
    bathrooms: { type: Number, required: true, min: 1},
    levels: { type: Number, required: true, min: 1},
    imgUrl: { type: String, maxlength: 600, default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReRssH9tamf8cqesgMxguFikvKdE65ltQeb4WHn7jxNCZDd24db8hjRtcWBngUTI7KjbU&usqp=CAU'},
    year: { type: Number, required: true, min: 1800, max:2022},
    price: { type: Number, required: true, min: 1},
    description: { type: String, maxlength: 1000}
  },
    { timestamps: true, toJSON: { virtuals: true } }
)