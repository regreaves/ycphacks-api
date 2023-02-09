import express from 'express';

import { hardware } from './hardware.mjs';

const router = express.Router();

router.use(express.json());

const routes = [
  hardware
];

router.use(routes);

export { router }
