# TodoList

## 🖥️ 프로젝트 소개
리액트를 이용한 투두리스트 사이트 개인 프로젝트입니다.

## 사이트 주소
https://zerobeen-todolist.netlify.app/

## 🕰️ 개발 기간
* 23.06.12 - 23.06.16

## 🎬 페이지 스크린샷
![Screenshot](./src/screenshot/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B71.png)

### ⚙️ 사용하는 기술
- HTML, CSS, JavaScript, React

## 📌 Component 구성
#### Input
- 입력할 제목과 내용을 받는 컴포넌트.
- useState를 이용하여 변하는 값들을 받습니다.
- input이 빈칸일 경우 값을 입력하게끔 alert가 뜹니다.
- uuid를 이용하여 id값을 부여합니다.

#### TodoList
- 삼항연산자를 이용하여 true, false를 판단한 후 Working 구역과 Done 구역으로 배치합니다.
- 배치에는 filter와 map 함수 기능이 사용됩니다.
- 규모가 작기 때문에 Props drilling을 이용하여 Todo 컴포넌트와 연결합니다.

#### Todo
- 생성된 투두리스트에 완료, 취소, 삭제 기능이 담긴 버튼으로 구성됩니다.
- 삼항연산자를 이용하여 true, false를 판단한 후 Working 구역과 Done 구역으로 이동시킵니다.
- Props drilling을 이용하여 TodoList로부터 받아온 값들을 이용합니다.