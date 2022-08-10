import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const JobSchema = new Schema(
  {
    company: { type: String, required: true},
    jobTitle: { type: String, required: true},
    hours: { type: Number, required: true, min: 1},
    rate: { type: Number, required: true, min: 1 },
    description: { type: String, maxlength: 1000}
  },
    { timestamps: true, toJSON: { virtuals: true } }
)