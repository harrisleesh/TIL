
- Why Docker?
- What is Docker?
- What is Container?
- Docker Commands

# Docker
## Docker란?
도커는 애플리케이션을 컨테이너를 사용해서 쉽게 사용할 수 있게 만들어진 오픈소스 프로젝트입니다.
- 도커는 Go 언어로 작성돼 있습니다.
- 기존에 쓰이던 가상화 방법(Virtual Machine)과는 달리 성능의 손실이 거의 없습니다.
## 가상 머신과 도커 컨테이너
### 기존 VM와 도커 사이의 OS관점에서 구조적 차이
- 기존의 가상화 기술
-- 하이퍼바이저를 이용해 여러 개의 운영체제를 하나의 호스트에서 생성해 사용하는 방식
-- 여러 개의 운영체제는 가상 머신이라는 단위로 구별됨
-- 하이퍼바이저에 의해 생성되고 관리되는 운영체제는 게스트 운영체제(Guest OS)라고 한다.
-- 각 게스트 운영체제는 다른 게스트 운영체제와는 완전히 독립된 공간과 시스템 자원을 할당받아 사용한다.
-- VirtualBox, VMware
-- 각종 시스템 자원을 가상화하고 독립된 공간을 생성하는 작업은 성능상 손실을 일으킴
- 도커 컨테이너
-- 도커 컨테이너는 가상화된 공간을 생성하기 위해 리눅스의 자체 기능인 chroot, 네임스페이스(namespace), cgroup을 사용하여 프로세스 단위의 격리 환경을 만들어줌 
-- => 성능 손실이 거의 없음
-- 컨테이너에서 필요한 커널을 호스트의 커널과 공유하여 사용하고, 컨테이너 안에는 애플리케이션을 구동하는 데 필요한 라이브러리, 실행파일만 존재하기 때문에 이미지 크기가 상대적으로 작음

## Docker image
도커 이미지란 도커 컨테이너를 만들기 위해 필요한 속성이나 종속성들을 포함한 소프트웨어 패키지이다.
도커 이미지를 도커 허브에서 다른 사람들이 만들어 놓은 것을 pull해서 사용할 수 있고, 직접 도커 이미지를 만들어서 도커 허브에 push 할 수 있다.



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

# Docker overview

_Estimated reading time: 7 minutes_

Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. By taking advantage of Docker’s methodologies for shipping, testing, and deploying code quickly, you can significantly reduce the delay between writing code and running it in production.

## The Docker platform[](https://docs.docker.com/get-started/overview/#the-docker-platform)

Docker provides the ability to package and run an application in a loosely isolated environment called a container. The isolation and security allow you to run many containers simultaneously on a given host. Containers are lightweight and contain everything needed to run the application, so you do not need to rely on what is currently installed on the host. You can easily share containers while you work, and be sure that everyone you share with gets the same container that works in the same way.

Docker provides tooling and a platform to manage the lifecycle of your containers:

-   Develop your application and its supporting components using containers.
-   The container becomes the unit for distributing and testing your application.
-   When you’re ready, deploy your application into your production environment, as a container or an orchestrated service. This works the same whether your production environment is a local data center, a cloud provider, or a hybrid of the two.

## What can I use Docker for?[](https://docs.docker.com/get-started/overview/#what-can-i-use-docker-for)

**Fast, consistent delivery of your applications**

Docker streamlines the development lifecycle by allowing developers to work in standardized environments using local containers which provide your applications and services. Containers are great for continuous integration and continuous delivery (CI/CD) workflows.

Consider the following example scenario:

-   Your developers write code locally and share their work with their colleagues using Docker containers.
-   They use Docker to push their applications into a test environment and execute automated and manual tests.
-   When developers find bugs, they can fix them in the development environment and redeploy them to the test environment for testing and validation.
-   When testing is complete, getting the fix to the customer is as simple as pushing the updated image to the production environment.

**Responsive deployment and scaling**

Docker’s container-based platform allows for highly portable workloads. Docker containers can run on a developer’s local laptop, on physical or virtual machines in a data center, on cloud providers, or in a mixture of environments.

Docker’s portability and lightweight nature also make it easy to dynamically manage workloads, scaling up or tearing down applications and services as business needs dictate, in near real time.

**Running more workloads on the same hardware**

Docker is lightweight and fast. It provides a viable, cost-effective alternative to hypervisor-based virtual machines, so you can use more of your compute capacity to achieve your business goals. Docker is perfect for high density environments and for small and medium deployments where you need to do more with fewer resources.

## Docker architecture[](https://docs.docker.com/get-started/overview/#docker-architecture)

Docker uses a client-server architecture. The Docker  _client_  talks to the Docker  _daemon_, which does the heavy lifting of building, running, and distributing your Docker containers. The Docker client and daemon  _can_  run on the same system, or you can connect a Docker client to a remote Docker daemon. The Docker client and daemon communicate using a REST API, over UNIX sockets or a network interface. Another Docker client is Docker Compose, that lets you work with applications consisting of a set of containers.
![Docker Architecture Diagram](https://docs.docker.com/engine/images/architecture.svg)



<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE3NjYwNzExMTQsMzU5NDE2MjYwLDE2MD
M2NzkzOTJdfQ==
-->