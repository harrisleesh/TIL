# 캐시 기본 동작

## 캐시가 없을 때

### 첫 번째 요청

```jsx
GET /star.jpg

//response
star.jpg 
```

- 똑같은 요청이 반복
- 데이터가 변경되지 않아도 계속 네트워크를 통해서 데이터를 다운로드 받아야 한다.
- 인터넷 네트워크는 매우 느리고 비싸다.
- 브라우저 로딩 속도가 느리다.
- 느린 사용자 경험

## 캐시 적용

### 첫 번째 요청

```jsx
GET /star.jpg

//response
HTTP/1.1 200 OK
Content-Type: image/jpeg
**cache-control: max-age=60**
...
//star.jpg
```

- 두 번째 요청 시 캐시에서 조회

- 브라우저 캐시에 저장
- 반복된 요청 시 캐시에서 조회
- 캐시 덕분에 캐시 가능 시간동안 네트워크를 사용하지 않아도 된다.
- 비싼 네트워크 사용량을 줄일 수 있다.
- 브라우저 로딩 속도가 빠르다.
- 빠른 사용자 경험

### 세 번째 요청 - 캐시 시간 초과

- 다시 요청
- 응답 결과를 캐시에 저장
- 캐시 유효 시간이 초과하면, 서버를 통해 데이터를 다시 조회하고, 캐시를 갱신한다.
- 이때 다시 네트워크 다운로드가 발생한다.
- **만약 데이터가 변경되지 않았다면?? 그럼에도 비용발생!!!**

# 검증 헤더와 조건부 요청

## 캐시 시간 초과

- 캐시 유효 시간이 초과해서 서버에 다시 요청하면 다음 두 가지 상황이 나타난다.
    1. 서버에서 기존 데이터를 변경함
    2. 서버에서 기존 데이터를 변경하지 않음
- 캐시가 만료후에도 서버에서 데이터를 변경하지 않음
- 생각해보면 데이터를 전송하는 대신에 저장해 두었던 캐시를 재사용 할 수 있다.
- 단 클라이언트의 데이터와 서버의 데이터가 같다는 사실을 확인할 수 있는 방법 필요

## 검증 헤더 추가

### 첫 번째 요청

```jsx
GET /star.jpg

//response
HTTP/1.1 200 OK
Content-Type: image/jpeg
cache-control: max-age=60
**Last-Modified: 2020년 11월 10일 10:00:00**
...
//star.jpg
```

### 두 번째 요청

```jsx
GET /star.jpg
**if-modified-since: 2020년 11월 10일 10:00:00**

//서버에서 데이터가 수정되지 않았다면?
**HTTP/1.1 304 Not Modified**
Content-Type: image/jpeg
cache-control: max-age=60
Last-Modified: 2020년 11월 10일 10:00:00
```

- 캐시 유효 시간이 초과해도, 서버의 데이터가 갱신되지 않으면
- 304 Not Modified + 헤더 메타 정보만 응답(바디 x)
- 클라이언트는 서버가 보낸 응답 헤더 정보로 캐시의 메타 정보를 갱신
- 클라이언트는  캐시에 저장되어 있는 데이터 재활용
- 결과적으로 네트워크 다운로드가 발생하지만 용량이 적은 헤더로 송신가능
# 검증 헤더와 조건부 요청2

- 검증 헤더
    - 캐시 데이터와 서버 데이터가 같은지 검증하는 데이터
    - Last-Modified, ETag
- 조건부 요청 헤더
    - 검증 헤더로 조건에 따른 분기
    - If-Modified-Sinced: Last-Modified 사용
    - If-None-Match: ETag 사용
- If-Modified-Sinced: 이후에 데이터가 수정되었으면?
    - 데이터 미변경 예시
        - 304 Not Modified, 헤더 데이터만 전송(BODY 미포함)
        - 전송 용량 0.1M (헤더 0.1M, 바디 1.0M)
    - 데이터 변경 예시
        - 200 OK, 모든 데이터 전송(BODY 포함)
        - 전송 용량 1.1M (헤더 0.1M, 바디 1.0M)

## Last-Modified, If-Modified-Since 단점

- 1초 미만단위로 캐시 조정이 불가능
- 날짜 기반의 로직 사용
- 데이터를 수정해서 날짜가 다르지만, 같은 데이터를 수정해서 데이터 결과가 똑같은 경우
- 서버에서 별도의 캐시 로직을 관리하고 싶은 경우
    - 예) 스페이스나 주석처럼 크게 영향이 없는 변경에서 캐시를 유지하고 싶은 경우

## ETag, If-None-Match

- ETag(Entity Tag)
- 캐시용 데이터에 임의의 고유한 버전 이름을 달아둠
    - 예) ETag: "v1.0", ETag: "a2jiodwjekjl3"
- 데이터가 변경되면 이 이름을 바꾸어서 변경함(Hash를 다시 생성)
    - 예)ETag: "aaaa" → Etag: "bbbb"
- 진짜 단순하게 Etag만 보내서 같으면 유지, 다르면 다시 받기

```jsx
//두번째 요청
GET /star.jpg
If-None-Match: "aaaa"

//response 데이터 변경되지 않음
HTTP/1.1 304 Not Modified
ETag: "aaaa"
```

### 정리

- 진짜 단순하게 ETag만 서버에 보내서 같으면 유지, 다르면 다시 받기
- 캐시 제어 로직을 서버에서 완전히 관리
- 클라이언트는 단순히 이 값을 서버에 제공(클라이언트는 캐시 메커니즘을 모름)
# 캐시와 조건부 요청 헤더

## Cache-Control

### 캐시 지시어(directives)

- Cache-Control: max-age
    - 캐시 유효 시간, 초 단위
- Cache-Control: no-cache
    - 데이터는 캐시해도 되지만, 항상 원 서버에 검증하고 사용
- Cache-Control: no-store
    - 데이터에 민감한 정보가 있으므로 저장하면 안됨
    (메모리에서 사용하고 최대한 빨리 삭제)

## Expires

### 캐시 만료일 지정(하위 호환)

- expires: Mon, 01 Jan 1990 00:00:00
- 캐시 만료일을 정확한 날짜로 지정
- max-age가 우선

## 검증 헤더와 조건부 요청 헤더

- 검증 헤더(Validator)
    - Etag, Last-modified
- 조건부 요청 헤더
    - If-None-Match
    - If-Modified-Since
# 캐시 무효화

## Cache-Control

### 확실한 캐시 무효화 응답 (아래의 헤더 모두 포함)

- Cache-Control: no-cache, no-store, must-revalidate
- Pragma: no-cache
    - HTTP 1.0 하위 호환

### Cache-Control: must-revalidate

- 캐시 만료후 최초 조회시 원 서버에 검증해야 함
- 원 서버에 접근할 수 없는 경우, 항상 오류가 발생해야 함
504 Gateway Timeout