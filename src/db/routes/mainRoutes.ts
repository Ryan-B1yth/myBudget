import express from 'express';

import { createIncome, getMainIncome } from '../controllers/mainController';

const router = express.Router();

router.get('/getMainIncome', getMainIncome);

router.post('/addIncome', createIncome);

export default router;
