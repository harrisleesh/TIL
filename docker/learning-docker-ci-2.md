# React 설치 & 실행

## React app 실행

-   npm run start

## React app 테스트

-   npm run test

## React app build

-   npm run build
# Docker를 이용하여 리액트 앱 실행하기

-   Dockerfile 은 개발환경에서의 Dockerfile과 운영환경에서의 Dockerfile 을 구분해서 관리하는 것이 좋다.
-   Dockerfile.dev
    -   unable to prepare context: unable to evaluate symlinks in Dockerfile path: lstat /Users/iseonghun/playground/TIL/docker/docker-react-app/Dockerfile: no such file or directory
    -   Dockerfile 이름이 달라서 발생하는 문제!
    -   -f 옵션을 주고 이름을 명시해주면 됨
    -   Docker build -f [Dockerfile.dev](http://dockerfile.dev) ./
-   docker run -it -p 3000:3000 harrisleesh/docker-react-app

# Docker Volume을 이용한 소스코드 변경

-   Dockerfile의 COPY 대신 Volume을 사용하면 이미지를 빌드하지 않아도 변경한 소스 부분이 어플리케이션에 반영된다.
-   docker run -p 3000:3000 -v /usr/src/app/node_modules -v $(pwd):/usr/src/app harrisleesh/docker-react-app
-   첫번째 -v 옵션은 매핑하지 않는 것을 나타냄
-   두번째 -v 옵션은 로컬디렉토리:컨테이너디렉토리 를 매핑하는 것을 나타냄
-   volume을 매핑하는 것이 매우 귀찮고 길다.

# Docker Compose로 좀 더 간단하게 앱 실행해보기

```jsx
version: "3"
services: 
    react:
        build: 
            context: .
            dockerfile: Dockerfile.dev
        ports: 
            - "3000:3000"
        volumes: 
            - /usr/src/app/node_modules
            - ./:/usr/src/app
        stdin_open: true

```

# 리액트 앱 테스트하기

-   npm run test
-   docker run -it harrisleesh/docker-react-app npm run test

```jsx
version: "3"
services: 
    react:
        build: 
            context: .
            dockerfile: Dockerfile.dev
        ports: 
            - "3000:3000"
        volumes: 
            - /usr/src/app/node_modules
            - ./:/usr/src/app
        stdin_open: true
    tests:
        build:
            context: .
            dockerfile: Dockerfile.dev
        volumes: 
            - /usr/src/app/node_modules
            - ./:/usr/src/app
        command: ["npm","run","test"]

```

-   test소스도 변경하자마자 반영되게 수정

# 운영환경을 위한 Nginx

## 개발환경에서 리액트가 실행되는 과정

-   NGINX 대신 개발서버가 정적 파일등을 처리해줌

## 운영환경에서 리액트가 실행되는 과정


![image](https://user-images.githubusercontent.com/29927233/124444836-f724bb80-ddb9-11eb-97f0-75159e9ea49c.png)
### 왜 개발환경 서버와 운영환경 서버를 다른거 써야하나요?

-   개발에서 사용하는 서버는 소스를 변경하면 자동으로 전체 앱을 다시 빌드해서 변경 소스를 반영해주는 것 같이 개발 환경에 특화된 기능들이 있기에 그러한 기능이 없는 Nginx 서버보다 더욱 적합합니다.
-   그리고 운영환경에서는 소스를 변경할 때 다시 반영해줄 필요가 없으며 개발에 필요한 기능들이 필요하지 않기에 더 깔끔하고 빠른 Nginx를 웹 서버로 사용합니다.

# 운영환경 도커 이미지를 위한 Dockerfile 작성하기

## 첫번째 단계 - builder stage

## 두번째 단계 - run stage

-   Nginx 가동

# Reference

[Nginx는 무슨 역할을 할까? - with willson](https://real-dongsoo7.tistory.com/100)
<!--stackedit_data:
eyJoaXN0b3J5IjpbMzU5MzI0MV19
-->