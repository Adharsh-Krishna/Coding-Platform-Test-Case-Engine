const express = require('express');
const router = express.Router();

let controller=require('../controllers/test-controller.js');

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods"," GET, PUT, POST, DELETE, HEAD");
    next();
});

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.post('/test',function (req,res) {
    controller.post_test(req,res);
});

//get test case count for ID
router.get('/test/:id',function (req,res) {
    controller.get_test_count(req,res);
});

//get input cases for ID
router.get('/test/input/:id/:num',function (req,res) {
controller.get_input_test(req,res);
});

//get output cases for ID
router.get('/test/output/:id/:num',function (req,res) {
    controller.get_output_test(req,res);
});

//update test case
router.put('/test/:id',function (req,res) {
    controller.update_test(req,res);
});

module.exports = router;
