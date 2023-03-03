import express from 'express';

import { config, list_hardware_items } from '../lib/database.mjs';

const router = express.Router();

router.route('/sponsors')
  .get((req, res) => {
    const data = { key: 'value' };

    res.status(200).json(data);
  });

router.route('/hardware')
  .get((req, res) => {
    const data = [["10908791783496351755","name","link","category","available","2023-02-27T04:24:50.000Z","2023-02-27T04:24:50.000Z","location"],["10908791783496351756","name","link","category","available","2023-02-27T04:24:50.000Z","2023-02-27T04:24:50.000Z","location"],["10908791783496351757","name","link","category","available","2023-02-27T04:24:50.000Z","2023-02-27T04:24:50.000Z","location"],["10908791783496351758","name","link","category","available","2023-02-27T04:24:50.000Z","2023-02-27T04:24:50.000Z","location"]];

    res.status(200).json(data);
  });

export { router as hardware };
