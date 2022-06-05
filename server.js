const express = require('express');
const app = express();
const devoController = require('./controller/devo');
app.use('/devo', devoController);
require('dotenv').config();
const router = express.Router();
const PORT = process.env.PORT
const { redirect } = require('express/lib/response')
const mongoose = require('mongoose')
const db = mongoose.connection
const dotenv = require('dotenv')
require('dotenv').config()
const diaryController = require('./controller/diary')
const methodOverride = require('method-override');
const Diary = require('./models/diary')
const Devo = require('./models/devotional');
const devoSeed = require('./models/devoSeed')
const diarySeed = require('./models/diarySeed')

// middleware
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use('/devo', devoController)
app.use('/diary', diaryController)


//database 
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

db.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
db.on('connected', () => console.log('mongo connected'));
db.on('disconnected', () => console.log('mongo disconnected'));

app.listen(process.env.PORT, () => console.log(`express is listening on port: ${PORT}`));

app.get('/', (req, res) =>{
	res.render('index.ejs')
})
