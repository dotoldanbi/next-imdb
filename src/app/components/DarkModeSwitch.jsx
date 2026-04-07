"use client";

import React, { useEffect } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  // useTheme 훅을 사용하여 현재 테마와 테마를 변경하는 함수를 가져옵니다. systemTheme은 시스템 설정에 따른 테마를 나타냅니다.
  const { theme, setTheme, systemTheme } = useTheme();
  // mounted 상태는 컴포넌트가 클라이언트에서 마운트되었는지를 나타냅니다. 초기값은 false입니다.
  const [mounted, setMounted] = React.useState(false);
  useEffect(() => {
    // 컴포넌트가 마운트되면 mounted 상태를 true로 설정합니다. 이렇게 하면 서버 사이드 렌더링과 클라이언트 사이드 렌더링 간의 불일치를 방지할 수 있습니다.
    // 다크모드에서 mounted 체크를 하는 이유는 SSR 때 서버가 모르는 테마를 먼저 그려서 생기는 깜빡임/불일치를 막기 위해서
    // 서버는 처음 HTML을 만들 때 localStorage를 못 읽습니다. 그래서 다크모드 상태를 몰라서 일단 기본값으로 렌더합니다.
    // 그 다음 클라이언트가 붙고 나서야 브라우저의 테마 설정이나 저장된 값을 읽어서 실제 테마를 적용합니다. 이때 화면이 한 번 바뀌면서 깜빡임이 생길 수 있습니다
    setMounted(true);
  }, []);

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div>
      {currentTheme === "dark" ? (
        <MdLightMode
          className="text-2xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("light")}
        />
      ) : (
        <MdDarkMode
          className="text-2xl cursor-pointer hover:text-amber-500"
          onClick={() => setTheme("dark")}
        />
      )}
    </div>
  );
}
