import { app } from './app';
import * as dotenv from 'dotenv';
dotenv.config({ path: `.env.local` });

const PORT = 3001;

app.listen(PORT, () => {
    console.log(`🚂 Express started on port ${PORT}`);
});
