export interface Category {
  categorySlug: string;
  category: string;
}

export const categorys = [
  {
    categorySlug: "2023",
    category: "2023 모음",
  },
  {
    categorySlug: "blog",
    category: "블로그 개발기",
  },
  {
    categorySlug: "react",
    category: "리액트",
  },
  {
    categorySlug: "2022",
    category: "2022 모음",
  },
  {
    categorySlug: "backend",
    category: "벡엔드",
  },
];

export interface Note {
  categorySlug: string;
  category: string;
  titleSlug: string;
  title: string;
  intro: string;
  createdAt: string;
}

export const notes = [
  {
    categorySlug: "blog",
    category: "블로그 개발기",
    titleSlug: "notion-api",
    title: "Notion API 연동하기",
    intro: "Notion API를 사용해서 블로그를 개발하는 방법을 알려드립니다.",
    createdAt: "2022-10-20",
  },
  {
    categorySlug: "2023",
    category: "2023 모음",
    titleSlug: "frontend-build",
    title: "프론트엔드 개발 환경",
    intro: "프론트엔드 개발 환경에 대한 전반적인 내용을 정리했습니다.",
    createdAt: "2023-10-20",
  },
];

export const records = [
  {
    title: "벡엔드가 궁금해지고 있음",
    content:
      "<p>요새 진로 고민을 좀 하고 있다. 원래는 화면 UI 만드는게 재밌어서가 절반, 어쩌다보니 개발 시작을 프론트로 해버린거 절반으로 프론트엔드를 지망했었는데 요즘에는 벡엔드에 자꾸 관심이 간다.</p> <p>서비스 측면에서 벡엔드가 더 중요도가 높기도 하고, 좀 더 근본적인 공부라는 생각이 드는데 내가 좋아하는 공부와 더 밀접한 느낌이기 때문이다. </p>",
    createdAt: "2023-09-31",
  },
  {
    title: "자취 고민",
    content:
      "<p>출퇴근 시간이 평균 1시간 반 정도 걸려서 자취를 할지말지 고민이다. 자취하면 출퇴근 시간은 줄어들지만 고정 비용이 발생하고 전세의 경우 돈을 잃을 수 있는 리스크가 존재한다. 생각보다 하나의 확실한 결론을 내리기가 어렵다.</p> <p>사실 돈도 문제지만 요새 진로 고민 때문에 미래에 대한 불확실성이 좀 커져서 선뜻 집을 잡아두기 더 애매해졌다. 언젠간 독립해서 자취하겠지~~</p>",
    createdAt: "2023-10-01",
  },
  {
    title: "벡엔드가 궁금해지고 있음",
    content:
      "<p>요새 진로 고민을 좀 하고 있다. 원래는 화면 UI 만드는게 재밌어서가 절반, 어쩌다보니 개발 시작을 프론트로 해버린거 절반으로 프론트엔드를 지망했었는데 요즘에는 벡엔드에 자꾸 관심이 간다.</p> <p>서비스 측면에서 벡엔드가 더 중요도가 높기도 하고, 좀 더 근본적인 공부라는 생각이 드는데 내가 좋아하는 공부와 더 밀접한 느낌이기 때문이다. </p>",
    createdAt: "2023-09-31",
  },
  {
    title: "자취 고민",
    content:
      "<p>출퇴근 시간이 평균 1시간 반 정도 걸려서 자취를 할지말지 고민이다. 자취하면 출퇴근 시간은 줄어들지만 고정 비용이 발생하고 전세의 경우 돈을 잃을 수 있는 리스크가 존재한다. 생각보다 하나의 확실한 결론을 내리기가 어렵다.</p> <p>사실 돈도 문제지만 요새 진로 고민 때문에 미래에 대한 불확실성이 좀 커져서 선뜻 집을 잡아두기 더 애매해졌다. 언젠간 독립해서 자취하겠지~~</p>",
    createdAt: "2023-10-01",
  },
  {
    title: "벡엔드가 궁금해지고 있음",
    content:
      "<p>요새 진로 고민을 좀 하고 있다. 원래는 화면 UI 만드는게 재밌어서가 절반, 어쩌다보니 개발 시작을 프론트로 해버린거 절반으로 프론트엔드를 지망했었는데 요즘에는 벡엔드에 자꾸 관심이 간다.</p> <p>서비스 측면에서 벡엔드가 더 중요도가 높기도 하고, 좀 더 근본적인 공부라는 생각이 드는데 내가 좋아하는 공부와 더 밀접한 느낌이기 때문이다. </p>",
    createdAt: "2023-09-31",
  },
  {
    title: "자취 고민",
    content:
      "<p>출퇴근 시간이 평균 1시간 반 정도 걸려서 자취를 할지말지 고민이다. 자취하면 출퇴근 시간은 줄어들지만 고정 비용이 발생하고 전세의 경우 돈을 잃을 수 있는 리스크가 존재한다. 생각보다 하나의 확실한 결론을 내리기가 어렵다.</p> <p>사실 돈도 문제지만 요새 진로 고민 때문에 미래에 대한 불확실성이 좀 커져서 선뜻 집을 잡아두기 더 애매해졌다. 언젠간 독립해서 자취하겠지~~</p>",
    createdAt: "2023-10-01",
  },
];
