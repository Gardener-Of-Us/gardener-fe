## Gardener Project Front-end

## 환경설정

1. git clone 또는 다운로드
2. gardener-fe/ 경로에서 npm install
3. npm start

## 페이지 추가 위치

1. src/components/DashboardSidebar.js 내 items 에 원하는 경로로 생성

- Icon Design 참고 : https://feathericons.com

2. src/pages/ 하위에 원하는 메뉴 (1에서 만든 title로) 생성
3. src/routes.js 에서 path 에 맞게 추가

- 기타 필요한 component 등은 자유롭게 추가하세요

## branch 관리 방안(21.04.03 기준)

- init commit 은 master 에다가 push 하였습니다.
- 이후부터는 기능 별로 feature/기능명 으로 branch 를 만들도록 합니다.
- 편의상 develop 브랜치는 사용하지 않고, feature/기능명 브랜치에서 작업한 내용이 완료되면, 바로 master branch 로 병합하도록 합니다.
- 참고 : https://velog.io/@kim-jaemin420/Git-branch-naming

## 참고사항

- 환경 설정 과정에서 중요한 모듈 등은 README.md 에 기록 예정입니다.
- Devias Kit 라는 free ui template 을 사용합니다. 사유는 구조 및 메뉴가 심플해서 저희 과제랑 어울릴 것이라 판단했습니다.

## License

- Licensed under MIT (https://github.com/devias-io/react-material-dashboard/blob/master/LICENSE.md)
