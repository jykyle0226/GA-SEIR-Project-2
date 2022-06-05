const express = require('express');
const router = express.Router();
const Diary = require('../models/diary')
const diarySeed = require('../models/diarySeed')

router.get('/seed', (req, res) => {
	Diary.deleteMany({}, (error, allDiaries) => {});
	Diary.create(diarySeed, (error, data) => {
		res.redirect('/diary');
	});
})
//I

router.get('/', (req, res) => {
  Diary.find({}, (err, foundDiary) => {
    res.render('diary/index.ejs', {
      diary: foundDiary
    })
  })
})

//N
router.get('/new', (req,res) => {
  res.render('diary/new.ejs')
})

//D
router.delete('/:id', (req, res) => {
  Diary.findByIdAndDelete(req.params.id, () => {
    res.redirect('/diary')
  })
})
//U
router.put('/:id', (req, res) => {
  Diary.findByIdAndUpdate(req.params.id, req.body, () => {
    res.redirect('/diary')
  })
})
//C
router.post('/', (req, res) => {
  Diary.create(req.body, (err, createdDiary) => {
    res.redirect('/diary')
  })
})
//E
router.get('/:id/edit', (req, res) => {
  Diary.findById(req.params.id, (err, foundDiary) => {
    res.render('diary/edit.ejs', {
      diary: foundDiary
    })
  })
})
//S
router.get('/:id', (req, res) => {
  Diary.findById(req.params.id, (err, foundDiary) => {
    res.render('diary/show.ejs', {
      diary: foundDiary
    })
  })
})
module.exports = router;

