import express from 'express'
import bodyParser from 'body-parser'

import { Zodiac } from './controllers'

const app: express.Application = express()
const port = 3000

app.use('/api', bodyParser.json(), Zodiac)

app.listen(port, () => {
	// Success callback
	console.log(`Listening at http://localhost:${port}/`)
});
