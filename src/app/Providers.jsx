// 테마프로바이더는 클라이언트 컴포넌트에서만 사용할 수 있기 때문에 Providers.jsx 파일을 생성하여 ThemeProvider를 감싸줍니다.
'use client';

// 기본적으로 제공하는 ThemeProvider 컴포넌트를 사용하여 테마를 관리할 수 있습니다.
import {ThemeProvider} from "next-themes";

export default function Providers({children}) {
  return (
    // attribute="class"는 테마를 클래스 기반으로 적용하겠다는 의미입니다. defaultTheme="system"은 시스템 설정에 따라 자동으로 테마가 적용되도록 합니다.
    <ThemeProvider defaultTheme="system" attribute="class">
      <div className="">{children}</div>
    </ThemeProvider>
  )
}
