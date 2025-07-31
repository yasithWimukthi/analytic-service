import { Router } from 'express';
import { logAnalyticsEvent } from '../controllers/analytics.controller';

const router = Router();

/**
 * POST /api/analytics
 * Logs a frontend analytics event (page view, click, etc.)
 */
router.post('/', logAnalyticsEvent);

router.get('/hello', (req, res) => {
    res.send('Hello Analytics World - After Deployment!');
});


export default router;
