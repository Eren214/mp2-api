var express = require("express");
var router = express.Router();

router.post('/register',(req, res)=>{
    res.send('Register');
});

module.exports=router;