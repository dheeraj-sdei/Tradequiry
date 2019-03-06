var express = require('express');
var router = express.Router();
var algotrader  = require('../../api/stock.api');

/* GET home page. */
router.post('/', (req, res, next)=> {
  algotrader.Data.IEX[req.body.fun](req.body.symbol,req.body.range).then(data=>{
    res.send(data);
  });
});

module.exports = router;