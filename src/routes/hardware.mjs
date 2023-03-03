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
    const data = { key: 'value' };

    res.status(200).json(data);
  });

export { router as hardware };
