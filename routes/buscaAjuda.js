var express = require('express');
var router = express.Router();
const Movie = require('../models/busca');

router.post('/', async (req, res) => {
  const busca = new Busca({
      name: req.body.name, //falta os form
      year: req.body.year
  });
  await busca.save();
   res.json({
      'status': 'Saved'
   });
});

module.exports = router;
