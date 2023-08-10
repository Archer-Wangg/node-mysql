import { db } from "../db.js" ;
import bcrypt from 'bcryptjs';
   

export const register = (req, res) => {
     const q = 'SELECT * FROM users WHERE email = ? OR username = ?';
     db.query(q, [req.body.email, req.body.username], (err, data) => {
        if(err) return res.json(err);
        if(data.length) return res.status(409).json('User already exists!');
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt)
        const q = 'INSERT INTO users(`username`, `email`, `password`) VALUES (?)'
        const value = [
            req.body.username,
            req.body.email,
            hash
        ]
        db.query(q,[value],(err,data) => {
            if(err) return res.json(err);
            return res.status(200).json(data)
        })
     }) 

}


export const login = (req, res) => {
     const q = 'SELECT * FROM users WHERE `username` = ?'
     db.query(q, [req.body.username], (err, data) => {
        if(err) return res.json(err);
        if(data.length === 0) return res.status(404).json('User not found!');
        const isPasswordMatch = bcrypt.compare(res.body.password, data[0].password);
        if(!isPasswordMatch) return res.status(400).json('Worng username or password!')    
        
     })
     
}

export const logout = (req, res) => {
     
}
