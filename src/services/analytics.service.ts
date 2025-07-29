import { createClient } from '@clickhouse/client';
import { v4 as uuidv4 } from 'uuid';

const clickhouse = createClient({
    url: process.env.CLICKHOUSE_HOST || 'http://localhost:8123',
    username: process.env.CLICKHOUSE_USER ?? 'default',
    password: process.env.CLICKHOUSE_PASSWORD ?? '',
    database: process.env.CLICKHOUSE_DATABASE || 'analytics',
});

export const analyticsService = {
    async logEvent(data: {
        eventType: string;
        pageUrl: string;
        sessionId: string;
        scrollPercent?: number;
        timeOnPage?: number;
        deviceType?: string;
    }) {
        const timestamp = new Date().toISOString();

        const event = {
            id: uuidv4(),
            eventType: data.eventType,
            pageUrl: data.pageUrl,
            timestamp,
            sessionId: data.sessionId,
            scrollPercent: data.scrollPercent ?? 0,
            timeOnPage: data.timeOnPage ?? 0,
            deviceType: data.deviceType ?? 'unknown'
        };

        await clickhouse.insert({
            table: 'events',
            values: [event],
            format: 'JSONEachRow',
        });
    }
};