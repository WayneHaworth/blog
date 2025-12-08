import mongoose from 'mongoose'

mongoose.set("strictQuery", false);

const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
})

export default mongoose.model('Blog', blogSchema)