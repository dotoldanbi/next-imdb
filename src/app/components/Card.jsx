import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
export default function Card({ result }) {
  //loading="eager" 속성은 이미지가 페이지 로드 시 즉시 로드되도록 지시합니다. 이는 사용자가 페이지를 방문할 때 이미지를 빠르게 볼 수 있도록 하는 데 도움이 됩니다. 특히 영화 포스터와 같은 중요한 시각적 요소의 경우, eager 로딩을 사용하여 사용자 경험을 향상시킬 수 있습니다.
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 overflow-hidden sm:m-2 transition-shadow duration-300">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original${result.backdrop_path || result.poster_path}`}
          alt={result.title}
          width={500}
          height={750}
          className=" sm:rounded-t-lg group-hover:opacity-75 hover:scale-105 transition-transform duration-300"
          loading="eager"
        ></Image>
        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="text-lg font-semibold mt-2 truncate">
            {result.title || result.name}
          </h2>
          <p className="flex items-center">
            {result.release_date || result.first_air_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" /> {result.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
