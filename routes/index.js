var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './views/index.html'))
});

module.exports = router;