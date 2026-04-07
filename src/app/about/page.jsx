import React from "react";

// page.jsx는 about 페이지의 내용을 정의하는 컴포넌트입니다. 현재는 간단히 "page"라는 텍스트를 렌더링하지만, 실제로는 이곳에 about 페이지의 상세 내용을 추가할 수 있습니다. 예를 들어, 회사 소개, 팀 멤버, 연락처 정보 등을 포함할 수 있습니다.
// 폴더 구조에서 page.jsx는 about 폴더 안에 위치하므로, 이 컴포넌트는 /about 경로로 접근할 때 렌더링됩니다. Next.js의 파일 기반 라우팅 시스템 덕분에, 이 파일을 생성하는 것만으로도 자동으로 라우트가 설정됩니다.
export default function About() {
  return <div className="max-w-6xl mx-auto p-3 space-y-4"><h1 className="text-2xl font-medium text-amber-600">About</h1>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eleifend, sem quis tincidunt mattis, lacus urna luctus diam, ut semper ipsum magna id massa. In id ipsum eget nisl lobortis pulvinar. Donec quis orci dapibus, commodo felis non, dictum ante. Donec diam est, dignissim a interdum eu, mollis vitae libero. Morbi viverra eros sit amet eros varius scelerisque. Pellentesque commodo justo nibh, porta molestie ipsum volutpat tincidunt. Vestibulum mattis tortor a lectus mollis, nec lacinia augue suscipit. Aenean dapibus, magna quis tempor ullamcorper, metus odio fringilla mauris, et gravida neque arcu sed lacus.</p>
  <p>Vivamus nec molestie dui. Nullam et nunc et quam gravida efficitur sed nec enim. In ornare nibh risus, vitae egestas erat interdum in. Curabitur vulputate et sapien at rhoncus. Aenean sagittis, orci non viverra ullamcorper, lorem lorem aliquet ante, ac tincidunt ex neque quis dolor. Nulla felis urna, fringilla vel consequat sit amet, tincidunt quis orci. Cras auctor nibh ut quam sodales commodo. Donec feugiat magna sit amet purus lacinia mollis. Praesent in dolor eu turpis feugiat euismod sit amet vel neque.</p>
  </div>;
}
 