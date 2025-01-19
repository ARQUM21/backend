import express from 'express';

const userRoute = express.Router();


userRoute.get('/login', (req, res) => {
    res.send({
        message: 'loginpage'
    })
})

userRoute.get('/signup', (req, res) => {
    res.send({
        message: 'signuppage'
    })
})

export default userRoute;