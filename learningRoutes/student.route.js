const express = require('express');
const router  = express.Router();


router.get("/students", (req, res)=>{
    res.status(200).send({
        message : "Hello Students"
    });
});