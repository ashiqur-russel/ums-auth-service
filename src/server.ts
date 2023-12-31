import mongoose from 'mongoose'
import config from './config/index'

import app from './app'

async function dbConnect() {
  try {
    await mongoose.connect(config.database_url as string)
    console.log('Database Connected Successfully!')

    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`)
    })
  } catch (err) {
    console.log('Failed to connect Database!', err)
  }
}

dbConnect()
