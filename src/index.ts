import dotenv from 'dotenv';
dotenv.config();

import app from './app';

const PORT = process.env.PORT || 3000;
app.listen(3000, '0.0.0.0', () => {
    console.log('Analytics Service running on http://0.0.0.0:3000');
});
