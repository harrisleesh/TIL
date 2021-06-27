
# Docker란?
도커는 애플리케이션을 컨테이너를 사용해서 쉽게 사용할 수 있게 만들어진 오픈소스 프로젝트입니다.
- 도커는 Go 언어로 작성돼 있습니다.
- 기존에 쓰이던 가상화 방법(Virtual Machine)과는 달리 성능의 손실이 거의 없습니다.
# 가상 머신과 도커 컨테이너
## 기존 VM와 도커 사이의 OS관점에서 구조적 차이
![](https://lh3.googleusercontent.com/uA93VmaaFG1jPCuA0U7fo2ZP74FCax6_8aH2Ht_H7-xhcEA-whSCSH8u2G58DxY9Jjdshu4_4r25X0qOwz2mCvdbLuObfhLnRqcWlqDr_DesiXiF14pyAotygkpNkoIV4oo9QGLBEDc2nZPJ0jdEsyC94lRtXiktDzyUs_ceZRGJkMKV8YefI7Y9P4WCwE_BxydgjjgxiMRTLtJ5-vTJusZRyETMI4nbTuv8yr5lnhLJX6nMjqWkCsUyjcOq8SEOgQi_LcxvW3RjyYAmwBhrpV9NOvGIrB7LsHgRce9m_R9WGSfasks_Xj8PkM63wMxtqtqO_01XlOEE39tlPtEwP2p19fL_aX4-guJEIALDSI5zuRr5TDWkDDutsD8LJLM0l3y7M-VUH0IKVKdcW_dKeN5U69O8Y34uC_ddRN8aYb0XmimmQLuRUmahOCnV21WMpXk91345aJIVY3vd1p18kQ-ZBl9c-pOs_WbNUI4rgaQjEtP8cHAgEUnpm4HKWTsRxzdubNNMucDlcXnwcSJ4zm4oy_OZi4m8qrMDM40tk2r2Wb0uFgzsrAaU2LyO4m1Vfo6NRWfDuKATyQ_FUO2k0hZf0sLKdaLwpxwmTEu36Mz55MjC0Q7nmPO-2I_b11eRDch1AYDw2jBgKERCQoZ9wm697OFssIyArXB--DIGKxPQWauflcNBcE350n5nGaJ4t7P11DCU24NaZ0r47IUx-CFg=w1385-h736-no?authuser=0)
### 기존의 가상화 기술
- 특징
-- 하이퍼바이저를 이용해 여러 개의 운영체제를 하나의 호스트에서 생성해 사용하는 방식
-- 여러 개의 운영체제는 가상 머신이라는 단위로 구별됨
-- 하이퍼바이저에 의해 생성되고 관리되는 운영체제는 게스트 운영체제(Guest OS)라고 한다.
-- 각 게스트 운영체제는 다른 게스트 운영체제와는 완전히 독립된 공간과 시스템 자원을 할당받아 사용한다.
- 대표적인 VM 
-- VirtualBox, VMware
- 단점
-- 성능저하 : 각종 시스템 자원을 가상화하고 독립된 공간을 생성하는 작업은 성능상 손실을 일으킴
-- 이미지 크기 :  게스트 운영체제를 사용하기 위한 라이브러리, 커널 등을 전부 포함하기 때문에 이미지의 크기 또한 커진다. 
### 도커 컨테이너
- 특징
-- 도커 컨테이너는 가상화된 공간을 생성하기 위해 리눅스의 자체 기능인 chroot, 네임스페이스(namespace), cgroup을 사용하여 프로세스 단위의 격리 환경을 만들어줌 
-- 컨테이너에서 필요한 커널을 호스트의 커널과 공유하여 사용하고, 컨테이너 안에는 애플리케이션을 구동하는 데 필요한 라이브러리, 실행파일만 존재한다.
- 장점
-- 성능 손실이 거의 없음
-- 이미지 크기가 작음

# Docker Architecture
## 도커 client-server 구조
![](https://wiki.aquasec.com/download/attachments/2854889/Docker_Engine.png?version=1&modificationDate=1520172702424&api=v2)
Docker uses a client-server architecture. The Docker _client_ talks to the Docker _daemon_, which does the heavy lifting of building, running, and distributing your Docker containers. The Docker client and daemon _can_ run on the same system, or you can connect a Docker client to a remote Docker daemon. The Docker client and daemon communicate using a REST API, over UNIX sockets or a network interface. Another Docker client is Docker Compose, that lets you work with applications consisting of a set of containers.
![Docker Architecture Diagram](https://docs.docker.com/engine/images/architecture.svg)
 
### The Docker daemon[](https://docs.docker.com/get-started/overview/#the-docker-daemon)

The Docker daemon (`dockerd`) listens for Docker API requests and manages Docker objects such as images, containers, networks, and volumes. A daemon can also communicate with other daemons to manage Docker services.

### The Docker client[](https://docs.docker.com/get-started/overview/#the-docker-client)

The Docker client (`docker`) is the primary way that many Docker users interact with Docker. When you use commands such as  `docker run`, the client sends these commands to  `dockerd`, which carries them out. The  `docker`  command uses the Docker API. The Docker client can communicate with more than one daemon.

### Docker registries[](https://docs.docker.com/get-started/overview/#docker-registries)

A Docker  _registry_  stores Docker images. Docker Hub is a public registry that anyone can use, and Docker is configured to look for images on Docker Hub by default. You can even run your own private registry.

# 도커 이미지, Dockerfile
https://docs.docker.com/get-started/
## What is a container?[](https://docs.docker.com/get-started/#what-is-a-container)
Now that you’ve run a container, what  _is_  a container? Simply put, a container is simply another process on your machine that has been isolated from all other processes on the host machine. That isolation leverages  [kernel namespaces and cgroups](https://medium.com/@saschagrunert/demystifying-containers-part-i-kernel-space-2c53d6979504), features that have been in Linux for a long time. Docker has worked to make these capabilities approachable and easy to use.
## What is a container image?[](https://docs.docker.com/get-started/#what-is-a-container-image)
When running a container, it uses an isolated filesystem. This custom filesystem is provided by a  **container image**. Since the image contains the container’s filesystem, it must contain everything needed to run an application - all dependencies, configuration, scripts, binaries, etc. The image also contains other configuration for the container, such as environment variables, a default command to run, and other metadata.

We’ll dive deeper into images later on, covering topics such as layering, best practices, and more.
## Docker image
도커 이미지란 도커 컨테이너를 만들기 위해 필요한 속성이나 종속성들을 포함한 소프트웨어 패키지이다.
도커 이미지를 도커 허브에서 다른 사람들이 만들어 놓은 것을 pull해서 사용할 수 있고, 직접 도커 이미지를 만들어서 도커 허브에 push 할 수 있다.

## 도커파일
- 도커 이미지를 만들기 위한 설정파일이다.
- 컨테이너가 어떻게 행동해야 하는지에 대한 설정을 정의해 주는 곳
### Dockerfile 만들기
### 도커파일 만드는 순서
- 베이스 이미지를 명시해준다
- 추가적으로 필요한 파일을 다운받기 위한 몇가지 명령어 명시
- 시작시 실행될 명령어 명시
### 베이스 이미지란?

- 도커 이미지는 여러개의 이미지 레이어로 구성된다.
- 베이스 이미지는 이미지의 기반이 되는 이미지이다.(Os라고 생각하면 될듯)

# Reference
https://docs.docker.com/get-started/overview/
https://www.aquasec.com/cloud-native-academy/docker-container/docker-architecture/
https://phoenixnap.com/kb/docker-image-vs-container
#  To do
- Docker Compose
- Docker volume
- Why Docker?
- What is Docker?
- What is Container?
- Docker Commands
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTEzNjI0OTkzNjIsLTEwMTcyODI4ODEsMT
c3MjQzODMzLDE3MDEzMTIzNDEsLTU2Mjk4NDIxNywtMTA5ODAy
NjU1MywtODM0MDkwMjAxLC0xODM1NjYyODA0LC0xNTUxMjA3Mz
ksLTEwMDIxNDY0OTgsMTE0Nzk5ODM2LDE0MzIyNTc3NDksLTE5
Mjg5MjY2OTMsMzU5NDE2MjYwLDE2MDM2NzkzOTJdfQ==
-->