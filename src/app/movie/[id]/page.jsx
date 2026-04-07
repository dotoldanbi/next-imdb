import React from "react";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
export default async function MoviePage({ params }) {
  const paramsRslt = await params;
  const movieId = paramsRslt.id;
  console.log("Fetching details for movie ID:", movieId);
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.TMDB_API_KEY}`,
  );
  if (!res.ok) {
    throw new Error("Failed to fetch movie details");
  }
  const movie = await res.json();
  const { title, overview, release_date } = movie;

  return (
    <div className="w-full">
      <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6">
        <Image
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path || movie.poster_path}`}
          alt={movie.title}
          width={500}
          height={300}
          className="rounded-lg"
          style={{maxWidth: '100%', height: '100%'}}
        />

        <div className="p-4 md:p-0">
          <h2 className="mb-3 text-2xl font-bold">{title}</h2>
          <p className="mb-3 text-lg text-gray-300">{overview}</p>
          <p className="mb-3text-gray-500">{release_date}</p>
          <p className="mb-3 flex items-center gap-2">
            <FiThumbsUp /> {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
}
