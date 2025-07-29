import { Router } from 'express';
import { logAnalyticsEvent } from '../controllers/analytics.controller';

const router = Router();

/**
 * POST /api/analytics
 * Logs a frontend analytics event (page view, click, etc.)
 */
router.post('/', logAnalyticsEvent);

export default router;
