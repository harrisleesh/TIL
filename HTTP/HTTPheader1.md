# HTTP 헤더

## 용도

- HTTP 전송에 필요한 모든 부가정보
- 예) 메시지 바디의 내용, 메시지 바디의 크기, 압축, 인증, 요청 클라이언트, 서버 정보, 캐시 관리 정보
- 표준 헤더가 너무 많음
- 필요시 임의의 헤더 추가 가능

## 분류 - RFC2616(과거)

- 헤더 분류
    - General 헤더 : 메시지 전체에 적용
    - Request 헤더 : 요청 정보
    - Response 헤더 : 응답 정보
    - Entity 헤더 : 엔티티 바디 정보, 예) Content-Type: text/html, Content-Length : 3423

1999년 RFC2616 → 폐기됨

2014년 RFC7230~7235 등장

## RFC723x

### message body - RFC7230(최신)

- 메시지 본문을 통해 표현 데이터 전달
- 메시지 본문 = 페이로드(payload)
- 표현은 요청이나 응답에서 전달할 실제 데이터
- 표현 헤더는 표현 데이터를 해석할 수 있는 정보 제공
    - 데이터 유형(html, json), 데이터 길이, 압축 정보 등등
- 참고: 표현 헤더는 표현 메타데이터와, 페이로드 메시지를 구분해야 하지만..

# 표현

- Content-Type: 표현 데이터의 형식
- Content-Encoding: 표현 데이터의 압축 방식
- Content-Language: 표현 데이터의 자연 언어
- Content-Length: 표현 데이터의 길이
- 표현 헤더는 전송, 응답 둘다 사용

## Content-Type

### 표현 데이터의 형식 설명

- 미디어 타입, 문자 인코딩
- 예)
    - text/html: charset=utf-8
    - application/json
    - image/png

## Content-Encoding

### 표현 데이터 인코딩

- 표현 데이터를 압축하기 위해 사용
- 데이터를 전달하는 곳에서 압축 후 인코딩 헤더 추가
- 데이터를 읽는 쪽에서 인코딩 헤더의 정보로 압축 해제
- 예)
    - gzip
    - deflate
        - identity

## Content-Language

### 표현 데이터의 자연 언어

- 표현 데이터의 자연 언어를 표현
- 예)
    - ko
    - en
    - en-US

## Content-Length

### 표현 데이터의 길이

- 바이트 단위
- Transfer-Encoding(전송 코딩)을 사용하면 Content-Length를 사용하면 안됨

# 협상(콘텐츠 네고시에이션)

### 클라이언트가 선호하는 표현 요청

- Accept: 클라이언트가 선호하는 미디어 타입 전달
- Accept-Charset: 클라이언트가 선호하는 문자 인코딩
- Accept-Endcoding: 클라이언트가 선호하는 압축 인코딩
- Accept-Language: 클라이언트가 선호하는 자연 언어
- 협상 헤더는 요청시에만 사용

## Accept-Language 적용 전

```jsx
GET / event

//Response
Content-Language: en
```

## Accept-Language 적용 후

```jsx
GET / event
Accept-Language: ko

//Response
Content-Language: ko
```

## 협상과 우선순위1

### Quality Values(q)

```jsx
GET / event
Accept-Language: ko-KR, ko;q=0.9,en-US;q=0.8,en;q=0.7
```

- Quality Values(q) 값 사용

## 협상과 우선순위2

- 구체적인 것이 우선한다
- Accept: text/*, text/plain, text/plain;format=flowed, */*
# 전송 방식

## 전송 방식 설명

- 단순 전송
- 압축 전송
- 분할 전송
- 범위 전송

## 단순 전송

### Content-Length

- 길이 만큼 한 번에 전송하는 것

## 압축 전송

### Content-Encoding

- 예) Content-Encoding:gzip
- 압축하여 전송

## 분할 전송

### Transfer-Encoding

- 예) Transfer-Encoding: chunked
    - 5
    - Hello
    - 5
    - World
    - 0
    - /r/n
- **분할 전송시 Content-Length를 보내면 안됨!!**

## 범위 전송

### Range, Content-Range

```jsx
GET / event
Range: bytes=1001-2000

//Response
Content-Range=1001-2000
```

# 일반 정보

- From
- Referer
- User-Agent
- Server
- Date

## From

### 유저 에이전트의 이메일 정보

- 일반적으로 잘 사용되지 않음
- 검색 엔진 같은 곳에서 ,주로 사용
- 요청에서 사용

## Referer

### 이전 웹 페이지 주소

- 현재 요청된 페이지의 이전 웹 페이지 주소
- A → B로 이동하는 경우 B를 요청할 때 Referer: A를 포함해서 요청
- Referer를 사용해서 유입 경로 분석 가능
- 요청에서 사용
- 참고: Referer는 단어 referrer의 오타

## User-Agent

### 유저 에이전트 애플리케이션 정보

- user-agent: Mozilla/5.0
- 클라이언트의 애플리케이션 정보(웹 브라우저 정보, 등등)
- 통계 정보
- 어떤 종류의 브라우저에서 장애가 발생하는지 파악 가능
- 요청에서 사용

## Server

### 요청을 처리하는 ORIGIN 서버의 소프트웨어 정보

- Server: Apache/2.2.22(Debian)
- server: nginx
- 응답에서 사용

## Date

### 메시지가 발생한 날짜와 시간

- Date: Tue, ~~
- 응답에서 사용
# 특별한 정보

## Host

### 요청한 호스트 정보(도메인)

- 요청에서 사용
- 필수
- 하나의 서버가 여러 도메인을 처리해야 할 때
- 하나의 IP 주소에 여러 도메인이 적용되어 있을 때

```jsx
GET /hello HTTP/1.1
Host: aaa.com
```

## Location

### 페이지 리다이렉션

- 웹 브라우저는 3xx 응답의 결과에 Location 헤더가 있으면, Location 위치로 자동 이동(리다이렉트)
- 응답코드 3xx 에서 설명
- 201 (Created): Location 값은 요청에 의해 생성된 리소스 URI
- 3xx (Redirection): Location 같은 요청을 자동으로 리다이렉션하기 위한 대상 리소스를 가리킴

## Allow

### 허용 가능한 HTTP 메서드

- 405(Method Not Allowed) 에서 응답에 포함해야함
- Allow:GET, HEAD, PUT

## Retry-After

### 유저 에이전트가 다음 요청을 하기까지 기다려야 하는 시간

- 503 (Service Unavailable)

# 인증

- Authorization: 클라이언트 인증 정보를 서버에 전달
- WWW-Authenticate: 리소스 접근시 필요한 인증 방법 정의

## Authorization

### 클라이언트 인증 정보를 서버에 전달

- Authorization: Basic xxxxxxxxxxx

## WWW-Authentizate

### 리소스 접근시 필요한 인증 방법 정의

- 리소스 접근시 필요한 인증 방법 정의
- 401 Unauthorized 응답과 함께 사용

# 쿠키

- Set-Cookie: 서버에서 클라이언트로 쿠키 전달(응답)
- Cookie: 클라이언트가 서버에서 받은 쿠키를 저장하고, HTTP 요청시 서버로 전달

## 쿠키 미사용

- 모든 요청에 로그인 정보를 넘기도록 해야함

## 쿠키

### 로그인

```jsx
POST /login HTTP/1.1
user=홍길동

//response
HTTP/1.1 200 OK
Set-Cookie: user=홍길동
//해당 응답을 받으면 웹 브라우저의 쿠키 저장소에 user=홍길동 이라고 저장

GET /welcome HTTP/1.1
Cookie: user=홍길동 //쿠키 저장소에서 조회
```

- 로그인 시 서버에서 응답으로 Set-Cookie 헤더 세팅
- 브라우저는 쿠키 저장소에 쿠키 저장
- 향후 모든 요청에 쿠키 정보 자동포함
- 예) Set-Cookie: sessionId=abcde1234; expires=Sat, 26-Dec-2020 00:00:00 GMT; path=/; domain=google.com; Secure
- 사용처
    - 사용자 로그인 세션 관리
    - 광고 정보 트래킹
- 쿠키 정보는 항상 서버에 전송됨
    - 네트워크 트래픽 추가 유발
    - 최소한의 정보만 사용(세션 id, 인증 토큰)
    - 서버에 전송하지 않고, 웹 브라우저 내부에 데이터를 저장하고 싶으면 웹 스토리지 참고
- 주의
    - 보안에 민감한 데이터는 저장하면 안됨(주민번호, 신용카드 번호 등등)

## 쿠키 - 생명주기

### Expires, max-age

- Set-Cookie: expires=Sat, 26-Dec-2020 04:39:21 GMT
    - 만료일이 되면 쿠키 삭제
- Set-Cookie: max-age=3600 (3600초)
    - 0이나 음수를 지정하면 쿠키 삭제
- 세션 쿠키: 만료 날짜를 생략하면 브라우저 종료시
- 영속 쿠키: 만료 시간

## 쿠키 - 도메인

### Domain

- 예) domain=example.org
- 명시: 명시한 문서 기준 도메인 + 서브 도메인 포함
- domain=example.org를 지정해서 쿠키 생성
    - example.org는 물론이고
    - dev.example.org도 쿠키 접근
- 생략: 현재 문서 기준 도메인 접근
    - 하위 도메인 x

## 쿠키 - 경로

### Path

- 예) path=/home
- 이 경로를 포함한 하위 경로 페이지만 쿠키 접근
- 일반적으로 path=/ 루트로 지정
- 예)
    - path=/home 지정
    - /home → 가능
    - /home/level1 → 가능
    - /home/level1/level2 → 가능
    - /hello → 불가능

## 쿠키 보안

### secure, HttpOnly, SameSite

- Secure
    - 쿠키는 http, https를 구분하지 않고 전송
    - Secure를 적용하면 https인 경우에만 전송
- HttpOnly
    - Http 전송에만 사용
- SameSite
    - XSRF 공격 방지
