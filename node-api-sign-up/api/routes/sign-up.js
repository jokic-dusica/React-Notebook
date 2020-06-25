const express = require('express');

const router = express.Router();

router.get('/sign-up', (req,res,next) => {
    res.status(200).json({
        message:'Handling GET request to /sign-up'
    })
})

router.post('/sign-up', (req,res,next) => {
    res.status(200).json({
        message:'Handling POST request to /sign-up'
    })
})

router.get('/:userID', (req,res,next) => {
    const id = req.params.userID;
    if(id === 'special') {
        res.status(200).json({
            message: 'You discovered special ID',
            id: id
        })
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        })
    }
})

module.exports = router;