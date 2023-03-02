import express from 'express';

import { auth, requiredScopes } from 'express-oauth2-jwt-bearer';

const router = express.Router();

router.use(auth());

router.route('/v1/hardware')
  .get(requiredScopes('read:hardware'), async (req, res, next) => {
    const data = { key: 'value' };

    console.log(data);

    res.status(200).json(data);
  });

export { router };
