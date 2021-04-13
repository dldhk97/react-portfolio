import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: "dldhk97's portfolio", // e.g: 'Name | Developer'
  lang: 'kr', // e.g: en, es, fr, jp
  description: '포트폴리오 사이트에 오신 것을 환영합니다!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '백엔드 개발자를 지향하는',
  name: '지명근',
  subtitle: '입니다',
  cta: '더 알아보기',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '오픈소스를 좋아하고, 개발하는 것을 좋아하는 주니어입니다.',
  paragraphTwo: '관심이 있는 분야는 백엔드, 서버, 리눅스입니다.',
  paragraphThree: '능동적이고 협력적인 분위기에서 함께 개발하는 것을 지향합니다.',
  resume: '', // if no resume, the button will not show up
  background1: '금오공과대학교 컴퓨터소프트웨어공학과 (2016.03~)',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'se_remake.png',
    title: 'SE 리메이크(21.02.24~)',
    info:
      '금오공과대학교 컴퓨터소프트웨어공학과의 커뮤니티 사이트, SE를 리메이크하는 프로젝트입니다.',
    info2:
      '기존 시스템을 Spring Boot으로 새롭게 만들고 있으며, Spring API 게이트웨이, 젠킨스, docker 등을 활용하여 새로운 도전을 해보고 있습니다.',
    info3: 'DDD 기반으로 Clean Architecture, Clean Code를 준수하며 개발하는 것이 목표입니다.',
    participated: '개발 인원 : 4(Back-end 2명, Front-end 2명)',
    charge: '담당 : Back-end, API Server, File Server',
    stack: '기술 스택 : Java, Spring Boot, Spring Security, Swagger, JUnit, MySQL',
    url: '',
    repo: 'https://github.com/KitTeamSe/se_api_server', // if no repo, the button will not show up
    seeLiveTitle: '개발중',
  },
  {
    id: nanoid(),
    img: 'naver_blog_post_analyzer.png',
    title: '네이버 블로그 분석기(20.09.01~20.11.23)',
    info:
      '네이버 블로그 게시글을 분석하여, 매크로성 글인지 판단하고, 멀티미디어 비율과 같은 추가 정보를 보여주는 크롬 확장 프로그램입니다.',
    info2: '정확도는 높지 않았지만, Django, ML 등의 새로운 기술을 사용해보는 경험을 하였습니다.',
    info3: 'ML 모델을 활용하는 것과 크롬 확장 프로그램과의 통신에서 이슈가 발생했습니다.',
    participated: '개발 인원 : 4(Back-end 1명, Front-end 3명)',
    charge: '담당 : Back-end, Server, DB, ML',
    stack: '기술 스택 : Python, Django, Selenium, KoGPT2, Chrome Extension, MySQL',
    url: 'https://www.youtube.com/watch?v=jRRG8GmvY2Q',
    repo: 'https://github.com/dldhk97/Naver-Blog-Post-Analyzer', // if no repo, the button will not show up
    seeLiveTitle: '동영상 보기',
  },
  {
    id: nanoid(),
    img: 'kumoh_cafeteria_viewer.png',
    title: '금오식단뷰어(20.05.27~20.6.11)',
    info: '금오공과대학교 식단표를 조회하는 안드로이드 어플리케이션입니다.',
    info2:
      '2주 내외로 빠르게 개발해야했던 프로젝트라 별도의 서버는 두지 않고, 어플리케이션에서 직접 크롤링 하는 방식으로 구현하였습니다.',
    info3: '구글 플레이에 개발자 등록을 하고, 처음으로 만든 앱을 구글 플레이에 런칭해보았습니다.',
    participated: '개발 인원 : 1',
    stack: '기술 스택 : Java, Android, Jsoup, SQLite',
    url: 'https://play.google.com/store/apps/details?id=com.dldhk97.kumohcafeteriaviewer',
    repo: 'https://github.com/dldhk97/KumohCafeteriaViewer', // if no repo, the button will not show up
    seeLiveTitle: 'Google Play',
  },
  {
    id: nanoid(),
    img: 'ddonawa.png',
    title: '또나와(20.03.18~20.6.18)',
    info: '공공데이터를 활용한 최저가 조회 프로그램입니다.',
    info2:
      '공공데이터 포털에서 제공하는 가격 정보와 다나와와 네이버 쇼핑의 정보를 종합한 최저가 상품을 보여줍니다.',
    info3: '통신 프로토콜을 직접 설계하였으며, 주요 이슈는 대용량의 데이터를 다루는 것이었습니다.',
    participated: '개발 인원 : 2(Back-end 1명, Front-end 1명)',
    charge: '담당 : Back-end, Server, DB',
    stack: '기술 스택 : Java, Selenium, MySQL',
    url: '',
    repo: 'https://github.com/dldhk97/ddonawa-server', // if no repo, the button will not show up
    seeLiveTitle: '',
  },
  {
    id: nanoid(),
    img: 'lettre.png',
    title: 'Lettre(19.07.01~19.09.19)',
    info: '메시지 분류를 자동으로 해주는 안드로이드 메시지 앱입니다.',
    info2:
      '텐서플로우로 라벨링된 메시지를 학습시키고, 사용자의 문자 내용을 서버에 전달하면 카테고리가 분류됩니다.',
    info3: '어플리케이션에 관심이 생겨 처음으로 개발해 본 어플리케이션입니다.',
    participated: '개발 인원 : 3(Android 1명, Back-end 2명)',
    charge: '담당 : Front-end, Android Application',
    stack: '기술 스택 : C#, Android, Xamarin, SQLite',
    url: 'https://youtu.be/y8PZ9XyDkYk',
    repo: 'https://github.com/dldhk97/LettreForAndroid', // if no repo, the button will not show up
    seeLiveTitle: '동영상 보기',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '아래 이메일로 연락해주세요!',
  btn: 'dldhk97@gmail.com',
  email: 'dldhk97@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/dldhk97',
    },
    {
      id: nanoid(),
      name: 'vimeo',
      url: 'https://velog.io/@dldhk97',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
