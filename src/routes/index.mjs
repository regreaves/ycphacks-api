import express from 'express';

import { hardware } from './hardware.mjs';

const router = express.Router();

const routes = [
  hardware
];

router.use('/api/v1', routes);

export { router };
