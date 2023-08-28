### Blog 프로젝트

기존 블로그(Cuzz Log)에서 다음과 같은 사항을 개선시키기 위해서 새로운 블로그를 만들었다.

1. Notion과의 연동
2. ISR로 빌드를 하지않고 간단하게 API로 블로그 글 배포
3. 전반적인 디자인 개편 -> 최대한 미니멀리즘하게
4. SEO 최적화 및 구글 도구 사용 (GA, 서치콘솔 등등)
5. 다크모드 지원
6. 추후 서버 피처 도입 (댓글, 좋아요 정도 생각)

#### 기술 스택

* nextJS 13 (app directory), react 18
* typescript, eslint, prettier, yarn berry
* tailwindcss, notion 관련 라이브러리, 마크다운 관련 라이브러리, 그 외 유틸 라이브러리