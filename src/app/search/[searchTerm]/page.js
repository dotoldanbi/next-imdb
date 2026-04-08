import React from "react";
import Image from "next/image";
import Results from "@/app/components/Results";
export default async function SearchPage({ params }) {
  const paramsRslt = await params;
  const searchTerm = paramsRslt.searchTerm;

  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`,
    { next: { revalidate: 60 } },
  );
  if (!res.ok) {
    throw new Error("Failed to fetch search results");
  }
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results &&
        results.length === 0 && <p>No results found for "{searchTerm}"</p>}

      {results && results.length > 0 && <Results results={results} />}
    </div>
  );
}
