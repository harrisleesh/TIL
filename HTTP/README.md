# HTTP 기본
-   모든 것이 HTTP
-   클라이언트 서버 구조
-   비연결성
-   HTTP 메시지

## HTTP - HyperText Transfer Protocol

-   HTML, TEXT
-   IMAGE, 음성, 영상, 파일
-   JSON, XML
-   거의 모든 형태의 데이터 전송 가능
-   서버 간의 데이터를 주고 받을 때도 대부분 HTTP 사용
-   **지금은 HTTP 시대!**

## HTTP 의 역사

-   ~ HTTP/1.0
-   HTTP/1.1 1997년 : 가장 많이 사용, 우리에게 가장 중요한 버전
-   HTTP/2.0 2015년
-   HTTP/3.0 진행중

## 기반 프로토콜

-   TCP : HTTP/1.1, HTTP/2.0
-   UDP : HTTP/3
-   현재 HTTP/1.1 주로 사용
-   HTTP/2, HTTP/3 도 점점 증가

## HTTP 특징

-   무상태 프로토콜(stateless), 비연결성
-   클라이언트/서버 구조
-   HTTP 메시지
-   단순함, 확장가능

## 클라이언트 / 서버 구조

-   Request Response 구조
-   클라이언트는 서버에 요청을 보내고, 응답을 대기
-   서버는 요청에 대한 결과를 만들어서 응답

## 무상태 프로토콜 (stateless)

-   서버가 클라이언트의 상태를 보존하지 않는다.
-   장점:
-   단점:

### Stateful vs Stateless

-   상태 유지 : 중간에 다른 점원으로 바뀌면 안된다.
    -   중간에 다른 점원으로 바뀔 때마다 상태 정보를 다른 점원에게 미리 알려줘야한다.)
-   무상태 : 중간에 다른 점원으로 바뀌어도 된다.
    -   갑자기 고객이 증가해도 점원을 대거 투입할 수 있다.
    -   갑자기 클라이언트 요청이 증가해도 서버를 대거 투입할 수 있다.
    -   무상태는 응답 서버를 쉽게 바꿀수 있다. → 무한한 서버 증설이 가능하다.

## Stateless 한계

-   모든 것을 무상태로 설계 할 수 없는 경우
-   ex) 로그인
-   로그인한 사용자의 경우 로그인 했다는 상태를 서버에 유지해야 한다.
-   일반적으로 브라우저 쿠키와 서버 세션등을 사용하여 상태 유지
-   상태 유지는 최소한만 사용

## 비연결성 (connectionless)

-   HTTP는 기본적으로 연결을 유지하지 않는 모델이다.
-   일반적으로 초 단위 이하의 빠른 속도로 응답
-   1시간 동안 수천명이 서비스를 사용해도 실제 서버에서 동시에 처리하는 요청은 수십개 이하로 매우 적음
-   서버 자원을 매우 효율적으로 사용할 수 있음

*HTTP 지속연결 Persistent Connections

## HTTP 메시지

### HTTP 메시지 구조

-   start line
-   header
-   empty line 공백 라인 (CRLF)
-   message body

### HTTP 요청 메시지

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/197c0961-66aa-46a4-a6db-b0424d922a0e/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/197c0961-66aa-46a4-a6db-b0424d922a0e/Untitled.png)

### HTTP 응답 메시지

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d7f0e07a-7c6f-4d19-9814-a5e717b36077/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d7f0e07a-7c6f-4d19-9814-a5e717b36077/Untitled.png)

### 시작라인 - 요청메시지

-   HTTP 메서드
    -   종류 : GET POST PUT DELETE
    -   서버가 수행해야 할 동작을 지정
-   요청 대상
    -   absolute-path 절대경로
-   HTTP version

### 시작라인 - 응답메시지

-   HTTP 버전
-   HTTP 상태 코드
    -   200 : 성공
    -   400 : 클라이언트 요청 오류
    -   500 : 서버 내부 오류
-   이유 문구 : 사람이 읽을 수 있는 문구

### HTTP 헤더

-   HTTP 전송에 필요한 모든 부가정보
-   메시지 바디의 내용, 메시지 바디의 크기, 압축, 인증, 요청 클라이언트(브라우저) 정보, 서버 애플리케이션 정보, 캐시 관리 정보..
-   표준 헤더가 너무 많음
-   필요시 임의의 헤더 추가 가능

### HTTP 메시지 바디

-   실제 전송할 데이터
-   HTML 문서, 이미지, 영상, JSON 등등 byte로 표현할 수 있는 모든 데이터 전송 가능

### 단순함 확장 가능
## Uniform Resource Identifier


### URI? URL? URN?


- "URI는 로케이터(locator), 이름(name) 또는 둘다 추가로 분류될 수 있다."
![image](https://user-images.githubusercontent.com/29927233/124374089-3fb57980-dcd3-11eb-8f9f-166655d6d05a.png)




- URL - Locator : 리소스가 있는 위치를 지정
- URN - Name: 리소스에 이름을 부여
- 위치는 변할 수 있지만, 이름은 변하지 않는다.
- urn:isbn:891234568 (어떤 책의 isbn URN)
- URN 이름만으로 실제 리소스를 찾을 수 있는 방법이 보편화 되지 않음
- 앞으로 URI를 URL과 같은 의미로 이야기하겠음


<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIzODc1MjAyN119
-->
# 
