const express = require('express');
const router = express.Router();
const Devo = require('../models/devotional')
const devoSeed = require('../models/devoSeed')

router.get('/seed', (req, res) => {
	Devo.deleteMany({}, (error, allDevos) => {});
	Devo.create(devoSeed, (error, data) => {
		res.redirect('/devo');
	});
})
//I

router.get('/', (req, res) => {
  Devo.find({}, (err, foundDevo) => {
    res.render('devo/index.ejs', {
      devo: foundDevo
    })
  })
})

//N
router.get('/new', (req,res) => {
  res.render('devo/new.ejs')
})

//D
router.delete('/:id', (req, res) => {
  Devo.findByIdAndDelete(req.params.id, () => {
    res.redirect('/devo')
  })
})
//U
router.put('/:id', (req, res) => {
  Devo.findByIdAndUpdate(req.params.id, req.body, () => {
    res.redirect('/devo')
  })
})
//C
router.post('/', (req, res) => {
  Devo.create(req.body, (err, createdDevo) => {
    res.redirect('/devo')
    
  })
})
//E
router.get('/:id/edit', (req, res) => {
  Devo.findById(req.params.id, (err, foundDevo) => {
    res.render('devo/edit.ejs', {
      devo: foundDevo
    })
  })
})
//S
router.get('/:id', (req, res) => {
  Devo.findById(req.params.id, (err, foundDevo) => {
    res.render('devo/show.ejs', {
      devo: foundDevo
    })
  })
})
module.exports = router;

