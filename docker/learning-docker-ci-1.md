# 도커기본

## 도커를 쓰는 이유

-   기존에 어떤 프로그램을 설치한다고 생각해보자
![image](https://user-images.githubusercontent.com/29927233/126058098-166dab4e-1d43-4127-a406-69d1c12ab9a1.png)


설치하는 OS나 환경에 종속될 수 밖에 없다.

각 클라이언트마다 환경이 다르기 때문에 설치하는데 에러가 발생할 수 있다.

-   도커로 프로그램을 설치하는 상황을 보자
![image](https://user-images.githubusercontent.com/29927233/126058102-7c8ef61b-818d-41e2-a4f8-0dc92e1450f3.png)
-   도커를 이용하면 가상화기술을 통해 클라이언트 환경에 종속되지 않고 컨테이너라는 환경에서 프로그램을 설치 및 실행할 수 있다.

## 도커란 무엇인가?

도커(Docker)는 리눅스의 응용 프로그램들을 프로세스 격리 기술들을 사용해 컨테이너로 실행하고 관리하는 오픈 소스 프로젝트이다.

## 도커이미지와 도커 컨테이너 정의
![image](https://user-images.githubusercontent.com/29927233/126058106-378d974c-b80e-4c10-8dd1-efd6679d9836.png)

## 도커를 사용할 때의 흐름
![image](https://user-images.githubusercontent.com/29927233/126058110-3f4442a2-8b40-49b2-bdfa-3119346d4a36.png)
![image](https://user-images.githubusercontent.com/29927233/126058115-f8a223f0-7717-47f9-8fda-f48bf6ea08f1.png)

## 도커와 기존의 가상화 기술의 차이를 통한 도커 컨테이너의 이해

## 이미지로 컨테이너 만들기

## C-group, 네임스페이스를 도커 환경에서 쓸 수 있는 이유

# 기본적인 도커 클라이언트 명령어 알아보기

## 도커 이미지 내부 파일 구조 보기

## 컨테이너들 나열하기

## 도커 컨테이너의 생명주기

## Docker Stop vs Docker kill

## 컨테이너 삭제하기

## 실행 중인 컨테이너에 명령어 전달

## 레디스를 이용한 컨테이너 이해

## 실행중인 컨테이너에서 터미널 생활 즐기기

# 직접 도커 이미지를 만들어보기

## 도커 이미지를 생성하는 순서

## Dockerfile 만들기

### 도커파일

-   도커 이미지를 만들기 위한 설정파일이다.
-   컨테이너가 어떻게 행동해야 하는지에 대한 설정을 정의해 주는 곳

### 도커파일 만드는 순서

-   베이스 이미지를 명시해준다
-   추가적으로 필요한 파일을 다운받기 위한 몇가지 명령어 명시
-   시작시 실행될 명령어 명시

### 베이스 이미지란?

-   도커 이미지는 여러개의 이미지 레이어로 구성된다.
-   베이스 이미지는 이미지의 기반이 되는 이미지이다.(Os라고 생각하면 될듯)
![image](https://user-images.githubusercontent.com/29927233/126058045-69caec78-d347-4a91-82de-ded0bb53ef0f.png)

### 도커파일로 도커 이미지 만들기

-   베이스 이미지에서 다른 종속성이나 새로운 커맨드를 추가할 때는 임시 컨테이너를 만든 후 그 컨테이너를 기반으로 새로운 이미지를 만든다. 그리고 그 임시 컨테이너를 지운다.
![image](https://user-images.githubusercontent.com/29927233/126058052-54269b13-ae5d-4c65-b9f9-3ebb62b18eea.png)
## 도커 파일로 도커 이미지 만들기
![image](https://user-images.githubusercontent.com/29927233/126058068-50863b89-1db7-4a6d-a0eb-f86c95e30e30.png)
![image](https://user-images.githubusercontent.com/29927233/126058074-05a4b205-7e12-4753-bed9-1a280685f22c.png)

## 내가 만든 이미지 기억하기 쉬운 이름 주기
![image](https://user-images.githubusercontent.com/29927233/126058081-162e91fe-e1f8-4206-8e18-44f71ecd1ede.png)

# 도커를 이용한 간단한 Node.js 어플 만들기

## 섹션 설명

## Node.js 앱 만들기

## Dockerfile 작성하기

## Package.json 파일이 없다고 나오는 이유

## 생성한 이미지로 애플리케이션 실행 시 접근이 안되는 이유

-   Docker port 지정(-p local port:container port)
-   docker run -p 5000:8080 imageid

## Working Directory 명시해주기

-   이미지 안에서 어플리케이션 코드를 저장할 장소를 명시

## 어플리케이션 소스 변경으로 다시 빌드하는 것에 대한 문제점

package.json 만 따로 복사하고

의존성 다운로드 후

소스파일 복사를 다시 한번한다.

-   cache를 잘 사용하기

## 어플리케이션 소스 변경으로 리빌드 시 효율적으로 하는 법

## Docker Volume에 대하여

# Docker Compose

## Docker Compose란 무엇인가?

Compose is a tool for defining and running multi-container Docker applications. With Compose, you use a YAML file to configure your application’s services. Then, with a single command, you create and start all the services from your configuration.

## 어플리케이션 소스 작성하기

## Redis?

Remote Dictionary server

메모리 기반의 키-값 구조 데이터 관리 시스템

모든 데이터를 메모리에 저장

레디스를 쓰는 이유?

-   메모리에 저장하기 때문에 데이터를 불러올때 훨씬 빠르게 처리할 수 있다.
-   그렇지만 영속성을 보장할 수 있음

## Dockerfile 작성하기

## Docker Containers간 통신 할 때 나타나는 에러

## Docker Compose 파일 작성하기

### yml 이 무엇일까?

Yaml ain't markup language

애플리케이션 구성 파일 - xml 대체하여 사람이 보다 읽기쉬움!

## Docker Compose로 컨테이너를 멈추기
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEyNDE3NTAxODBdfQ==
-->
