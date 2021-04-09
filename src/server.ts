import express from 'express'
import routes from './routes';
import path from 'path';
import cors from 'cors';

const app = express()

app.use(cors({
    origin: 'https://douglasfeliphe.github.io'
}))
app.use(express.json())
app.use(routes)
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))

app.listen(process.env.PORT || 3333, function () {
    console.log(`Express server listening on port 3333 in ${app.settings.env} mode`)
})