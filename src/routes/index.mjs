import express from 'express';

import { auth, requiredScopes } from 'express-oauth2-jwt-bearer';

const router = express.Router();

router.use(auth({
  issuerBaseURL: 'https://dev-00248e57.us.auth0.com/',
  audience: 'https://api'
}));

router.route('/v1/hardware')
  .get(requiredScopes('read:hardware'), async (req, res, next) => {
    const data = { key: 'value' };

    console.log(data);

    res.status(200).json(data);
  });

export { router };
