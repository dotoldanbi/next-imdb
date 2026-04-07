"use client";
import React from "react";

import { useEffect } from "react";
// error, reset은 Next.js에서 제공하는 에러 핸들링 기능입니다. error는 발생한 에러 객체를 나타내며, reset은 에러 상태를 초기화하는 함수입니다. 이 컴포넌트는 에러가 발생했을 때 사용자에게 에러 메시지를 보여주고, reset 함수를 통해 에러 상태를 초기화할 수 있도록 합니다.
export default function error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <div className="text-center">
    <h1>Something went wrong! Please try again later.</h1>
    <button onClick={() => reset()} className="mt-4 px-4 py-2 bg-amber-500 text-white rounded hover:bg-amber-600">Retry</button>
    {error.message}</div>;
}
