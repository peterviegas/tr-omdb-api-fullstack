import * as dotenv from 'dotenv';
dotenv.config({ path: `.env.local` });

export const API_KEY = process.env.API_KEY;
export const PORT = 3001;

export const isApiKeyPresent = () => (API_KEY ? true : false);
