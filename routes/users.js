import express from 'express';
import reader from 'xlsx';

const router = express.Router();

let questions = [];

//all routes start from /users
router.get('/', (req, res) => {
  res.send(questions);
  console.log(questions);
});

router.post('/', (req, res) => {
  const ques = req.body;

  res.send(ques);
  console.log('route reached');
  questions = questions.concat(ques);
});

router.get('/:difficulty', (req, res) => {
  const { difficulty } = req.params;
  const ques = questions.filter(
    ques => ques.Difficulty.toLowerCase() === difficulty
  );
  res.send(ques);
});

export default router;
