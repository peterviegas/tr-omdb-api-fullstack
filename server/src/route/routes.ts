import express from 'express';
import { getHealth } from '../controllers/health_controller/health_controller';
import { getSearch } from '../controllers/search_controller/search_controller';
import { getMovie } from '../controllers/movie_controller/movie_controller';

export const router = express.Router();
router.get('/health', getHealth);
router.get('/search/:title', getSearch);
router.get('/movie/:id', getMovie);
