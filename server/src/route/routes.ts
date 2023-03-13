import express from 'express';
import { getHealth } from '../controllers/health_controller/health_controller';
import { getMovies } from '../controllers/movies_controller/movies_controller';
import { getMovie } from '../controllers/movie_controller/movie_controller';

export const router = express.Router();
router.get('/health', getHealth);
router.get('/search(/*)?', getMovies);
router.get('/movie(/*)?', getMovie);
