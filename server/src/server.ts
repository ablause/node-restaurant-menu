import 'dotenv/config'

import database from './utilities/database'
import app from './app'

const PORT: number = Number(process.env.PORT) ?? 3000

database
  .then(() => app.listen(PORT, () => console.log('==> 🌎  Listening on port %s. Visit http://localhost:%s/', PORT, PORT)))
  .catch(console.error)
