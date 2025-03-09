import {Pool} from 'pg';

const pool = new Pool({
    connectionString: 'postgres://avnadmin:AVNS_Wv5pRrx3rBJrjqknm9E@scrapyard-bounty-scrapyard-bounty.l.aivencloud.com:18653/bounty?sslmode=require',
    ssl: {
        rejectUnauthorized: false
    }
});

export const query = async (text: string, params?: any[]) => {
    try {
        return pool.query(text, params);
    } catch (error) {
        console.error('Database error:', error);
        throw error;
    }
};

export default pool;