const express = require('express');
const router = express.Router();
const {
  update,
  edit,
  show,
  index,
  newTodo,
  create,
  deletec,
} = require('../controllers/todos');

router.get('/', index);
router.get('/new', newTodo);
router.get('/:id/edit', edit);
router.get('/:id', show);
router.put('/:id', update);
router.delete('/:id', deletec);
router.post('/', create);
module.exports = router;
