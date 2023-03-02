import express from 'express';

import { auth, requiredScopes } from 'express-oauth2-jwt-bearer';

const router = express.Router();

router.route('/api/v1/sponsors')
  .get((req, res) => {
    const data = { key: 'value' };

    res.status(200).json(data);
  });

router.use(auth());

router.route('/api/v1/hardware')
  .get(requiredScopes('read:hardware'), async (req, res) => {
    const data = { key: 'value' };

    res.status(200).json(data);
  });

export { router };
