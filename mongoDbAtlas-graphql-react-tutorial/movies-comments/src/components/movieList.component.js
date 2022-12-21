import React from "react";
import { useSelector } from "react-redux";

function MovieList() {
  const movies = useSelector((state) => state.movies.movies);

  return (
    <div class="grid grid-cols-4 gap-4 m-4">
      {movies.map((movie) => (
        <div key={movie._id}>
          <div class="flex justify-center">
            <div class="flex flex-col md:flex-row md:max-w-xl w-s rounded-lg bg-white shadow-lg">
              <img
                class=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
                src={movie.poster}
                alt=""
              />
              <div class="p-6 flex flex-col justify-start">
                <h5 class="text-gray-900 text-xl font-medium mb-2">
                  {movie.title}
                </h5>
                <p class="text-gray-700 text-base mb-4">{movie.fullplot}</p>
                <p class="text-gray-600 text-xs">
                  {movie.cast.map((item) => (
                    <span>{item},</span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MovieList;
