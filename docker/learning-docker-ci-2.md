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

- build 파일을 생성하는 단계

```jsx
FROM node:alpine as builder
WORKDIR '/usr/src/app'
COPY package.json .
RUN npm install
COPY ./ ./
CMD ["npm","run","build"]
```

## 두번째 단계 - run stage

- Nginx 도커 이미지를 이용한 Nginx 시작

```jsx
FROM nginx
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
```

- —from=builder : 위의 builder 스테이지 에서 나온 결과가 /usr/src/app/build 경로에 있음을 명시해준다.
- /usr/share/nginx/html 의 경로에 복사해준다.
- 위의 nginx 경로는 docker nginx 페이지에서 확인해 볼 수 있다.

## Travis CI 란?

- Travis CI는 Github에서 진행되는 오픈소스 프로젝트를 위한 지속적인 통합(Continuous Integration) 서비스이다. 2011년에 설립되어 2012년에 급성장하였으며 Ruby언어만 지원하였지만 현재 대부분의 개발 언어를 지원하고 있다. Travis Ci를 이용하면 Github repository에 있는 프로젝트를 특정 이벤트에 따라 테스트, 빌드, 배포를 할 수 있다.

### Travis CI의 흐름

로컬 Git → Github → Travis CI → AWS

## Travis CI 이용 순서

- 깃헙과 Travis CI 연결
- .travis.yml : master branch로 푸시하면 그 후에 테스트를 하고 배포를 할지를 정해주는 파일

# AWS 알아보기

## EC2란 무엇인가? (Elastic Compute Cloud)

Amazon Elastic Compute Cloud 는 AWS 클라우드에서 확장식 컴퓨팅을 제공합니다. 이를 사용하면 하드웨어에 선 투자할 필요가 없어 더 빠르게 애플리케이션을 개발하고 배포할 수 있습니다. 이를 통해 원하는 만큼 가상 서버를 구축하고 보안 및 네트워크 구성과 스토리지 관리가 가능합니다. 이는 요구 사항이나 갑작스러운 인기 증대 등 변동 사항에 따라 신속하게 규모를 확장하거나 축소할 수 있어 서버 트래픽 예측 필요성이 줄어듭니다.

⇒ 한대의 컴퓨터를 임대한다고 생각하면 됩니다. 

## EB란 무엇인가? (Elastic BeanStalk)

AWS Elastic Beanstalk는 Apache, Nginx 같은 친숙한 서버에서 Java, NET, PHP, Node.js, Python, Ruby, Go 및 Docker와 함께 개발된 웹 응용 프로그램 및 서비스를 배포하고 확장하기 쉬운 서비스입니다. Elastic Beanstalk은 EC2 인스턴스나 데이터베이스 같이 많은 것들을 포함한 환경을 구성하며 만들고 있는 소프트웨어를 업데이트를 업데이트 할때마다 자동으로 이 환경을 관리해줍니다.

# Elastic Beanstalk 환경 구성하기
![image](https://user-images.githubusercontent.com/29927233/125149895-bb517380-e176-11eb-8550-9e72c1f37af6.png)
# .travis.yml 파일 작성하기 (배포 부분)

- 현재는 도커 이미지를 생성 후 어플을 실행하여 테스트 하는 부분까지 travis 설정을 하였습니다.
- 이제는 테스트에 성공한 소스를 AWS Elastic Beanstalk에 자동으로 배포해주는 것을 작성해야함

## travis 설정 코드

```jsx
sudo: required

language: generic

services: 
  - docker

before_install:
  - echo "start creating an image with dockerfile"
  - docker build -t harrisleesh/docker-react-app -f Dockerfile.dev .

script:
  - docker run -e CI=true harrisleesh/docker-react-app npm run test -- --coverage
// 배포 관련 부분
deploy:
  provider: elasticbeanstalk
  region: "ap-northeast-2"
  app: "docker-react-app"
  env: "Dockerreactapp-env"
  bucket_name: "elasticbeanstalk-ap-northeast-2-762224883854"
  bucket_path: "docker-react-app"
  on:
    branch: master
```

# Tavis CI의 AWS 접근을 위한 API 생성

## IAM(Identity and Access Management)

- AWS 리소스에 대한 액세스를 안전하게 제어할 수 있는 웹 서비스입니다.
- IAM을 사용하여 리소스를 사용하도록 인증(로그인) 및 권한 부여(권한 있음)된 대상을 제어합니다.

### Root 사용자

- 현재 우리가 청므 가입하여 사용하고 있는 계정
- AWS 서비스 및 리소스에 대한 완전한 액세스 권한이 있음
- 하지만 일상적인 작업이든, 관리 작업이든 Root 사용자를 사용하는 것은 좋지 않습니다. (보안을 위해서!!!)
    - 그래서 IAM 유저 생성

### IAM 사용자

- root 사용자가 부여한 권한만 가지고 있음

### 인증 (Travis CI → AWS)

- 인증을 위해서는 API Key 가 필요합니다.
- AWS에서 제공해주는 Secret Key(API key)를 Travis yml 에 적어주면 됩니다.
- 직접 API 키를 Travis yml파일에 적어 주면 노출이 되기 때문에 다른곳에 적고 그것을 가져와야 한다.


# Reference

[Nginx는 무슨 역할을 할까? - with willson](https://real-dongsoo7.tistory.com/100)
<!--stackedit_data:
eyJoaXN0b3J5IjpbMzU5MzI0MV19
-->
