// 테마프로바이더는 클라이언트 컴포넌트에서만 사용할 수 있기 때문에 Providers.jsx 파일을 생성하여 ThemeProvider를 감싸줍니다.
"use client";

// 기본적으로 제공하는 ThemeProvider 컴포넌트를 사용하여 테마를 관리할 수 있습니다.
import { ThemeProvider } from "next-themes";

export default function Providers({ children }) {
  return (
    // attribute="class"는 테마를 클래스 기반으로 적용하겠다는 의미입니다. defaultTheme="system"은 시스템 설정에 따라 자동으로 테마가 적용되도록 합니다.
    <ThemeProvider defaultTheme="system" attribute="class">
      {/* 다크 모드가 적용될 때와 아닐 때의 배경색과 글자색을 설정합니다.
      transition-colors와 duration-300 클래스를 사용하여 테마 변경 시 부드러운
      전환 효과를 줍니다. min-h-screen select-none 클래스는 화면 전체 높이를
      차지하도록 하고, 텍스트 선택을 방지합니다.
      */}
      <div className="text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300">
        {children}
      </div>
    </ThemeProvider>
  );
}
