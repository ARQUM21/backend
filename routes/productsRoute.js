import express from 'express';
import comments from '../comments.js';

const productRoute = express.Router();

productRoute.get('/', (req, res) => {
   res.status(200).send({
    status: 200,
    message: 'success',
    data:comments,
   })
});

productRoute.get('/:id', (req, res) => {
    res.status(200).send({
        status: 200,
        message: "good hn id",
        data: []
    })

})


export default productRoute