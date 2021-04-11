import * as mongoose from 'mongoose'

const database = mongoose.createConnection(process.env.MONGO_URI ?? '', {
  useNewUrlParser: true, useUnifiedTopology: true
})

export default database
