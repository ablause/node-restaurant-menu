import * as dotenv from 'dotenv'
import * as mongoose from 'mongoose'
import app from './app'

dotenv.config({ debug: false })

const PORT: number = Number(process.env.PORT) ?? 3000
const MONGO_URI = process.env.MONGO_URI ?? ''

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log('==> 🌎  Listening on port %s. Visit http://localhost:%s/', PORT, PORT)))
  .catch(console.error)
