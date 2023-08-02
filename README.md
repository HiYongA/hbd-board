## 8월 2일 실습 과제
**AuthLayout.tsx 완성**
- localStorage의 토큰 검색
- localStorage의 이메일 검색
- 토큰 또는 이메일 중 하나라도 없을 경우 "토큰 또는 이메일이 없습니다. 로그인해주세요." alert
- localStorage에 있는 token, email을 제거
- "/auth"로 이동


**Main.tsx완성**
- 데이터베이스에서 boards 리스트 가져오기
- 가져온 결과 배열을 data state에 set 하기
- 네트워크 등 기타 문제인 경우, "일시적인 오류가 발생하였습니다. 고객센터로 연락주세요." alert
- 특정 useEffect를 최초 마운트시에만 동작하게 제어
- 자동 새로고침 방지
- 이메일과 contents를 이용하여 post 요청 등록(isDeleted 기본값은 false)
- 네트워크 등 기타 문제인 경우, "일시적인 오류가 발생하였습니다. 고객센터로 연락주세요." alert
- 성공한 경우, "작성이 완료되었습니다. 아직 자동 새로고침이 불가하여 수동으로 갱신합니다." alert
- 처리완료 후, reload를 이용하여 새로고침
- 로그인 한 user의 이메일과 일치하는 경우에만 삭제버튼 보이도록 제어
