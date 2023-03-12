import express from 'express';
import * as movieController from '../controllers/movie_controller';

export const router = express.Router();
router.get('/health', movieController.getHealth);
router.get('/search(/*)?', movieController.getMovies);
router.get('/movie(/*)?', movieController.getMovie);
