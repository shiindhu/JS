const express = require('express');
const router = express.Router();
const query_handler = require('./handler');
// const multer = require('multer');
// const storage = multer.diskStorage({
//     destination:function(req,file,cb){
//         cb(null,'./uploads/');
//     },
//     filename:function(req,file,cb){
//         cb(null,file.originalname);
//     }
// })
// const upload = multer({storage:storage,limits:{
//    fileSize: 1024 * 1024 * 2
// }});
var query_string;
var resp;

router.post('/register',async (req, res) => {
    //console.log(req.file);
    query_string = `insert into register(name,email,password,address,contact,dob) values('${req.body.name}','${req.body.email}','${req.body.password}','${req.body.address}','${req.body.contact}','${req.body.dob}')`;
    resp = await query_handler(query_string);
    if (resp.rowCount === 1)
        res.status(200).send("Success");
    else
        res.status(400).send("Failure");
})
module.exports = router; 