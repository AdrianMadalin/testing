const express = require('express');
const router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/regadmin',(req,res)=>{
  console.log('ROUTE HIT');
  res.send({
      message: `OK`,
      body: req.body.password
  })
});

module.exports = router;
