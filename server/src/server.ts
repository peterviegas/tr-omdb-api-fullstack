import { app } from './app';
import { PORT } from './util/environment';

app.listen(PORT, () => {
    console.log(`🚂 Express started on port ${PORT}`);
});
