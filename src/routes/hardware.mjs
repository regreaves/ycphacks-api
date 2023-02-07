import express from 'express';

const router = express.Router();

router.route('/hardware')
  .get((req, res) => {
    const data = { key: 'value' };

    res.status(200).json(data);
  });

router.route('/hardware/:hardware_id')
  .get((req, res) => {
    const data = { key: req.params.hardware_id };

    res.status(200).json(data);
  });

export { router as hardware }
