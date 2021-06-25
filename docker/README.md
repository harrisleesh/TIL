
- Why Docker?
- What is Docker?
- What is Container?
- Docker Commands

# Docker
## Docker란?


## Docker image
도커 이미지란 도커 컨테이너를 만들기 위해 필요한 속성이나 종속성들을 포함한 소프트웨어 패키지이다.
도커 이미지를 도커 허브에서 다른 사람들이 만들어 놓은 것을 pull해서 사용할 수 있고, 직접 도커 이미지를 만들어서 도커 허브에 push 할 수 있다.

## 기존 VM와 도커 사이의 OS관점에서 구조적 차이

## 도커 client-server 구조
## 도커 이미지, Dockerfile

## Dockerfile 만들기

### 도커파일

- 도커 이미지를 만들기 위한 설정파일이다.
- 컨테이너가 어떻게 행동해야 하는지에 대한 설정을 정의해 주는 곳

### 도커파일 만드는 순서

- 베이스 이미지를 명시해준다
- 추가적으로 필요한 파일을 다운받기 위한 몇가지 명령어 명시
- 시작시 실행될 명령어 명시

### 베이스 이미지란?

- 도커 이미지는 여러개의 이미지 레이어로 구성된다.
- 베이스 이미지는 이미지의 기반이 되는 이미지이다.(Os라고 생각하면 될듯)
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEwMzY4NzA0MF19
-->