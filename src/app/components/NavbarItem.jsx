"use client";

import React from "react";
import Link from "next/link";
// useSearchParams 훅을 사용하여 현재 URL의 쿼리 파라미터를 가져옵니다. 이 훅은 Next.js에서 제공하는 기능으로, 클라이언트 측에서 URL의 쿼리 파라미터를 쉽게 읽을 수 있게 해줍니다.
import { useSearchParams } from "next/navigation";

export default async function NavbarItem({ title, param }) {
  const searchParams = await useSearchParams();
  // useSearchParams 훅을 사용하여 searchParams 객체를 가져옵니다. 이 객체를 통해 현재 URL의 쿼리 파라미터에 접근할 수 있습니다.
  // 쿼리 파라미터는 URL에서 ? 뒤에 오는 key=value 형태의 데이터를 말합니다. 예를 들어, http://example.com/?genre=action 이라는 URL이 있다면, searchParams.get("genre")를 호출하면 "action"이라는 값을 얻을 수 있습니다.
  const genre = searchParams.get("genre");
  // 현재 URL의 쿼리 파라미터에서 "genre" 값을 가져와서 genre 변수에 저장합니다. 예를 들어, URL이 http://example.com/?genre=action 이라면, genre 변수에는 "action"이라는 문자열이 저장됩니다.
  // genre 변수와 param 변수를 비교하여 현재 선택된 장르를 확인합니다. 만약 genre와 param이 같다면, 해당 링크에 underline 스타일을 적용하여 사용자가 현재 어떤 장르를 선택했는지 시각적으로 표시합니다. 링크를 클릭하면 URL의 쿼리 파라미터가 /?genre=param 형식으로 변경되어 해당 장르의 콘텐츠를 보여줄 수 있습니다.
  return (
    <div>
      <Link
        className={`hover:text-amber-600 font-semibold ${genre === param ? "underline underline-offset-8 decoration-4 decoration-amber-500 rounded-lg" : ""}`}
        href={`/?genre=${param}`}
      >
        {title}
      </Link>
    </div>
  );
}
