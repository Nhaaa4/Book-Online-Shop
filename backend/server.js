import express from "express"
import cors from "cors"
import 'dotenv/config'
import bookRoute from "./src/routes/book.route.js"
import userRoute from "./src/routes/user.route.js"
import orderRoute from "./src/routes/order.route.js"
import logger from "./src/middleware/logger.js"
import reviewRouter from "./src/routes/review.route.js"
import addressRoute from "./src/routes/address.route.js"

const app = express()
const port = process.env.PORT

// Enable CORS for all routes and origins
app.use(cors());

// Enable json serialization
app.use(express.json());

app.use(logger)

app.use('/api/users', userRoute)
app.use('/api/books', bookRoute)
app.use('/api/orders', orderRoute)
app.use('/api/reviews', reviewRouter)
app.use('/api/address', addressRoute)

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})