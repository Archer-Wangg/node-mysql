import express from "express";
import postsRoutes from './routes/posts.js';
import authRoutes from './routes/auth.js';
import usersRoutes from './routes/users.js';
import cors from 'cors';
import cookieParser from "cookie-parser"; 


const app = express()

const corsOptions = {
    origin: 'http://localhost:5173', // 允许访问的源站
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // 允许的请求方法
    credentials: true, // 允许携带 cookies
  };


app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
app.use('', postsRoutes)
app.use('', authRoutes)
app.use('', usersRoutes)

app.get('/test', (req, res) => {
    // res.cookie('c', 'value')
    res.json('Okk!!')

    // res
    // .writeHead(200, {
    //   "Set-Cookie": "token=encryptedstring; HttpOnly",
    //   "Access-Control-Allow-Credentials": "true"
    // })
    // .send('HI');
})

app.listen(8800,() => {
    console.log('connected!');
})