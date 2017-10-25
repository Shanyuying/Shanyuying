var express = require('express');
var router = express.Router();
var fs = require('fs')
var a=0

/* GET home page. */
router.get('/', function(req, res, next) {
	fs.readFile('index.txt','utf-8',function(err,data){
		res.render('index', { abc: [1,2,3],iop: [1,2,3],tct:data+a});
		fs.writeFile('index1.txt','被访问的次数:' + a,function(err){
	  })
	})
	a++
}); 
router.get('/erji', function(req, res, next) {
	fs.readFile('index.txt','utf-8',function(err,data){
		res.render('erji', { title:data+a}); 
	}) 
  a++
});

module.exports = router;