import { Request, Response } from 'express';
import { analyticsService } from '../services/analytics.service';

export const logAnalyticsEvent = async (req: Request, res: Response) => {
    try {
        await analyticsService.logEvent(req.body);
        res.status(201).json({ message: 'Event logged' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to log event' });
    }
};
