import express from 'express';

import { hardware } from './hardware.mjs';

const router = express.Router();

<<<<<<< Updated upstream
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
=======
const routes = [
  hardware
];

router.use('/api/v1', routes);
>>>>>>> Stashed changes

export { router };
