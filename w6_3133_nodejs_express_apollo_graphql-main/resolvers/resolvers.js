import Movie from "../models/Movie.js";

const resolvers = {
  Query: {

    // GET ALL MOVIES
    getAllMovies: async () => {
      return await Movie.find();
    },

    // GET MOVIE BY ID
    getMovieById: async (_, { id }) => {
      return await Movie.findById(id);
    },

    // GET MOVIES BY DIRECTOR
    getMoviesByDirector: async (_, { director_name }) => {
      return await Movie.find({ director_name });
    }
  },

  Mutation: {

    // ADD MOVIE
    addMovie: async (_, args) => {
      const movie = new Movie(args);
      return await movie.save();
    },

    // UPDATE MOVIE
    updateMovie: async (_, { id, ...updates }) => {
      return await Movie.findByIdAndUpdate(
        id,
        updates,
        { new: true }
      );
    },

    // DELETE MOVIE
    deleteMovie: async (_, { id }) => {
      await Movie.findByIdAndDelete(id);
      return "Movie deleted successfully";
    }
  }
};

export default resolvers;