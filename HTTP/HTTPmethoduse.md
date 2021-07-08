
- 클라이언트에서 서버로 데이터 전송
- HTTP API 설계 예시

# 클라이언트에서 서버로 데이터 전송

### 데이터 전달 방식은 크게 2가지

- 쿼리 파라미터를 통한 데이터 전송
    - GET
    - 주로 정렬 필터(검색어)
- 메시지 바디를 통한 데이터 전송
    - POST, PUT, PATCH
    - 회원 가입, 상품 주문, 리소스 등록, 리소스 변경

### 4가지 상황

- 정적 데이터 조회
    - 이미지, 정적 텍스트 문서
    - 쿼리 파라미터 없이 단순한 리소스 조회
- 동적 데이터 조회
    - 주로 검색, 게시판 목록에서 정렬 필터(검색어)
- HTML Form을 통한 데이터 전송
    - 회원 가입, 상품 주문, 데이터 변경
- HTTP API를 통한 데이터 전송
    - 회원 가입, 상품 주문, 데이터 변경
    - 서버 to 서버, 앱 클라이언트, 웹 클라이언트(Ajax)
# HTML Form 데이터 전송

- HTML Form submit시 POST 전송
    - 예) 회원 가입, 상품 주문, 데이터 변경
- Content-Type: application/x-www-form-urlencoded 사용
    - form의 내용을 메시지 바디를 통해서 전송(key=value 형식)
    - 전송 데이터를 url encoding 처리
- HTML Form은 GET 전송도 가능
- Content-Type: multipart/form-data
    - 파일 업로드 같은 바이너리 데이터 전송시 사용
    - 다른 종류의 여러 파일과 폼의 내용 함께 전송 가능
- 참고: HTML Form 전송은 GET,POST만 지원
