import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";
import DarkModeSwitch from "./DarkModeSwitch";
export default function Header() {
  return (
    /*
        flex: 자식 요소를 가로로 나열합니다.
        justify-between: 자식 요소들을 좌우 끝으로 벌려서 배치합니다.
        items-center: 자식 요소들을 세로 중앙 정렬합니다.
        p-3: 안쪽 여백을 줍니다.
        max-w-6xl: 최대 너비를 제한합니다.
        */
    <div className="flex justify-between items-center p-3 max-w-6xl">
      <div className="flex gap-4">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="flex items-center gap-4">
        <DarkModeSwitch />
        <Link href="/" className="flex gap-1 items-center">
          <span className="text-2xl font-bold bg-amber-500 py-1 px-2">
            IMDb
          </span>
          <span className="text-xl hidden sm:inline">Clone</span>
        </Link>
      </div>
    </div>
  );
}
