import express from 'express';

import { auth, requiredScopes } from 'express-oauth2-jwt-bearer';

import { config, list_hardware_items } from '../lib/database.mjs';

const router = express.Router();

router.route('/sponsors')
  .get((req, res) => {
    const data = { key: 'value' };

    res.status(200).json(data);
  });

router.use(auth());

router.route('/hardware')
  .get(requiredScopes('read:hardware'), async (req, res, next) => {
    const data = await list_hardware_items(config);

    console.log(data);

    res.status(200).json(data);
  });

export { router as hardware };
