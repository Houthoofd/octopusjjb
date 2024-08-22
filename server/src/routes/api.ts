import express from 'express';
const router = express.Router();

router.get('/', function(req, res, next) {
  res.send({ layer : 'api' , version : 1 });
});

export default router;