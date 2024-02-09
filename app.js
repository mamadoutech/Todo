const express = require('express');
const app = express();
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const todosRoutes = require('./routes/todos');
const path = require('path');
const methodOverride = require('method-override');
dotenv.config({ path: './config.env' });
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
const PORT = process.env.PORT;
const URL = process.env.DB_URL.replace('<password>', 'Sopi2007');
app.get('/', (req, res, next) => {
  res.render('index');
});
app.use('/todos', todosRoutes);

mongoose.connect(URL).then(() => {
  console.log('database connected!');
  app.listen(PORT, () => {
    console.log('app listening on port 3000');
  });
});
