import React from "react";
import NavbarItem from "./NavbarItem";
import { Suspense } from "react";
export default function Navbar() {
  return (
    <Suspense fallback={null}>
      <div className="flex dark:bg-gray-600 bg-gray-100 p-4 lg:text-lg items-center justify-center gap-4">
        <NavbarItem title="Trending" param="fetchTrending" />
        <NavbarItem title="Top Rated" param="fetchTopRated" />
      </div>
    </Suspense>
  );
}
