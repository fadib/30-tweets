var express = require('express');
var twitter = require('twitter');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/:username', function(req, res) {
  var twit = new twitter({
    consumer_key: 'ZDPHuRa8QeVI0lXEvWn8xQkYk',
    consumer_secret: 'xHULbqYuNVqyOIs0cLSOivhyYToEmx7CsyVNvcFGdAKs8wx0i4',
    access_token_key: '232893461-a0MH9l9N1nZaH1JlcWXiutEhxFSqbosnQeuYNlVB',
    access_token_secret: 'wO8owPZ1afUwKOkWeo2oRA4ooR4rY9v38LBqwmMYx1L2B'
  });
  
  twit.getUserTimeline({ 
    screen_name: req.params.username, 
    count: 30,
    include_entities: false 
  }, function(data) {
    res.render('index', { 
      title: 'Express', 
      username: req.params.username,
      tweets: data
    });
  });
});

module.exports = router;
