# web-hw2
# 실습과제 #2 : 영화 데이터를 자바스크립트로
- 이름 / 학번 : 전소영 / 2651061
- 사이트 주소 : https://sso1126.github.io/web-hw2/
- 사용한 API : TMDB (영화 정보, now_playing 응답), KOBIS 일별 박스오피스 (기준일 2026-10-26)


## 구현 항목 체크
- [O] 1. Part A: data.js에 10칸짜리 배열 4개(titles, ratings, years, audiences). app.js에서 for와 if(또는 switch)로 계산한 A1~A5 다섯 줄이 콘솔에 찍힘. 
- [O] 2. Part B 함수 7개: movies 10건(키 8개, Part A와 같은 순서). average, best, filterByRating, sortBy, search, formatNumber, yearsSince가 표의 입력과 출력대로 동작하고 자가 테스트 1~8번 통과.
- [O] 3. Part C 응답 구조: tmdb.js에 now_playing 응답 전체가 const TMDB로 들어 있음. getList, averageBy로 C1, C2, 상위 5편 표, C4가 콘솔에 찍힘.
- [O] 4. 출력: console-a.png(A1~A5), console-c.png(C1~C4와 표) 2장. 사이트 주소의 pre id="out"에 Part B 요약 3줄(textContent 한 번).
- [?] 5. 코드 품질: 함수마다 "입력 ⇒ 출력" 주석, var 없이 const와 let만, 정렬과 필터 뒤에도 movies 원본 그대로, 같은 계산을 두 번 쓰지 않음(average가 averageBy를 부름), 하는 일이 드러나는 이름.
- [O] 6. 제출 형식: 공개 저장소 web-hw2의 루트에 파일, Pages 동작, README에 자가 테스트 표와 생성형 AI 기록, 어느 파일에도 API 키 없음. 

## 자가 테스트 표 (2~8번도 Step 4의 표대로 이어 적기)
| 번호 | 호출 | 기대 결과 | 실제 결과 |
|---|---|---|---|
| 1 | formatNumber("1234567") | '1,234,567' | |
| 2 | formatNumber("1234567") | '1,234,567' | |
| 3 | formatNumber("1234567") | '1,234,567' | |
| 4 | formatNumber("1234567") | '1,234,567' | |
| 5 | formatNumber("1234567") | '1,234,567' | |
| 6 | formatNumber("1234567") | '1,234,567' | |
| 7 | formatNumber("1234567") | '1,234,567' | |
| 8 | formatNumber("1234567") | '1,234,567' | |
## 어려웠던 점 3가지와 해결
1. Part A - A4 연도대별 영화 수 배열을 switch문으로 만들기
- 어려웠던 점: 영화 개봉 연도를 기준으로 구간을 나누고, 각 구간에 해당하는 영화 수를 배열에 저장하는 과정에서 switch문을 어떻게 활용해야 할지 어려웠다.
- 해결 방법: 먼저 연도별로 구간을 나누어 생각한 뒤, 각 조건에 맞게 case를 작성하였다. 여러 번 코드를 실행하면서 영화 수가 각 구간에 제대로 들어가는지 확인하고 수정하였다.

2. Part B - document.getElementById()를 활용해 3개의 줄 출력하기
- 어려웠던 점: document.getElementById("out").textContent를 이용해 여러 내용을 한 번에 출력하는 과정에서 줄바꿈을 적용하는 방법과 문장을 연결하는 부분이 헷갈렸다.
- 해결 방법: 각 내용을 하나씩 작성한 다음 줄바꿈 기호인 \n을 사용하여 세 줄로 구분하였다. 실행 결과를 확인하면서 원하는 형태로 출력되도록 수정하였다.

3. Part C - TMDB 데이터 오류 찾기
- 어려웠던 점: TMDB에서 가져온 영화 데이터가 정상적으로 작동하지 않아 코드의 어느 부분에서 오류가 발생했는지 찾기 어려웠다.
- 해결 방법: 데이터의 시작 부분부터 확인해 보니 가장 위에 불필요한 중괄호가 추가되어 있었다. 해당 중괄호를 삭제한 후 다시 실행하였더니 정상적으로 작동하였다.

## 참고한 자료 (교재 절, MDN 페이지 제목, 검색어)
- google 서치: VS코드 swith문
- google 서치: VS코드 getElementByld("out")

## 생성형 AI 사용 내역 (없으면 "없음")
- 질문 요지 : switch문에서 case 안에 단어?를 적고 보니까 VS코드의 자동완성으로 '++'가 뜨던데 왜 ++가 붙는거야?
- 답변 요약 : `++`는 변수의 값을 1씩 증가시키는 증감 연산자이다. 영화 연도별 개수를 세는 과정에서 특정 연도에 해당하는 영화가 추가될 때마다 개수를 1씩 늘리기 위해 사용한다. VS Code의 자동완성으로 나타날 수 있지만, 필요한 경우에만 변수 뒤에 붙여 사용하면 된다.
- 채택 여부 : 채택함