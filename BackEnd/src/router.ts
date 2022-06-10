import { Router } from "express";
import {
  createMovie,
  findByTitle,
  findMovieById,
  getAllMovies,
  removeMovie,
  updateMovie,
} from "./controllers/movieController";

// validations
import { validate } from "./middleware/handleValidations";
import * as movieValidations from "./middleware/movieValidation";

const router = Router();

export default router

  .post(
    "/movie",
    movieValidations.movieCreateValidation(),
    validate,
    createMovie
  )
  .get('/movie/find', findByTitle)
  .get("/movie/:id", findMovieById)
  .get("/movie", getAllMovies)
  .delete("/movie/:id", removeMovie)
  .patch(
    "/movie/:id",
    movieValidations.movieCreateValidation(),
    validate,
    updateMovie
  );
