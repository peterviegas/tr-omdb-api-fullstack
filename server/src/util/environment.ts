import * as dotenv from 'dotenv';
dotenv.config({ path: `.env.local` });

export const {
    API_KEY,
    DB_HOST,
    DB_PORT,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE,
    DB_TABLE,
} = process.env;

export const PORT = 3001;

export const isApiKeyPresent = () => (API_KEY ? true : false);
