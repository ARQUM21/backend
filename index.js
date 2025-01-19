import express from 'express';
import dotenv from "dotenv";
import comments from './comments.js';
import productRoute from './routes/productsRoute.js';
import userRoute from './routes/usersRoute.js';
import authRoute from './routes/authRoute.js';
import cors from 'cors';
const app = express();
dotenv.config();

 
app.use(cors());

app.get('/', (req, res) => {
    res.status(200).send("welcome to backend")
});

app.use('/products', productRoute);
app.use("/user", userRoute);
app.use("/auth", authRoute);




// app.get('/profile', (req, res) => {
//     res.status(200).send("profile to welcome")
// });

// app.get('/users/:id', (req, res) => {
//   const  id = req.params.id;
//   res.status(200).send("welcome to id")
// })




// app.get('/comments', (req, res) => {
//     res.status(200).send({
//         status:200,
//         message: "successfull",
//         data: comments,
//     })
// })

app.get('*', (req, res) => {
    res.status(404).send("not found")
})



const PORT = process.env.PORT || 8000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

