import React from "react";
import Results from "./components/Results";

const API_KEY = process.env.TMDB_API_KEY;

// searchParams는 Next.js에서 제공하는 기능으로, URL의 쿼리 파라미터를 쉽게 읽을 수 있게 해줍니다. 예를 들어, URL이 http://example.com/?genre=action 이라면, searchParams.genre를 통해 "action"이라는 값을 얻을 수 있습니다. 이를 통해 사용자가 선택한 장르에 따라 다른 콘텐츠를 보여줄 수 있습니다.
export default async function Home({ searchParams }) {
  const { genre } = await searchParams;
  const selectedGenre = genre || "fetchTrending";
  const res = await new Promise((resolve, reject) => {
    setTimeout(async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3${selectedGenre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`}?api_key=${API_KEY}&language=en-US&page=1`,
        { next: { revalidate: 60 } },
      );
      if (!response.ok) {
        reject(new Error("Failed to fetch data"));
      }
      resolve(response);
    }, 2000); // Simulate delay
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  const results = data.results;

  return <Results results={results} />;
}
