import express from "express";
import postsRoutes from './routes/posts.js';
import authRoutes from './routes/auth.js';
import usersRoutes from './routes/users.js';
import cors from 'cors';


const app = express()

app.use(cors())
app.use(express.json())
app.use('', postsRoutes)
app.use('', authRoutes)
app.use('', usersRoutes)

app.get('/test', (req, res) => {
    res.json('Okk!!')
})

app.listen(8800,() => {
    console.log('connected!');
})