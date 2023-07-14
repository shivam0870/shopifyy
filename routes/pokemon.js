import express from 'express';
import { adopt, allPokemon, feed, getMyPokemon } from '../controllers/pokemon.js';
import { isAuthenticated } from '../middlewares/auth.js';


const router = express.Router();

router.get("/all", isAuthenticated, allPokemon);
router.post("/adopt", isAuthenticated, adopt);
router.get("/my", isAuthenticated, getMyPokemon);
router.put("/:id", isAuthenticated, feed);

export default router;