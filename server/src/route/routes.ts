import express from 'express';
import * as movieController from '../controllers/movie_controller';

export const router = express.Router();
router.get('/', (req, res) => {
    res.send('Welcome to the Movie API!');
});
router.get('/search', movieController.getMovies);
router.get('/movie', movieController.getMovie);
