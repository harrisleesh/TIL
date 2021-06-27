
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
![Docker Architecture Diagram](https://docs.docker.com/engine/images/architecture.svg)
 
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


### The Docker daemon[](https://docs.docker.com/get-started/overview/#the-docker-daemon)

The Docker daemon (`dockerd`) listens for Docker API requests and manages Docker objects such as images, containers, networks, and volumes. A daemon can also communicate with other daemons to manage Docker services.

### The Docker client[](https://docs.docker.com/get-started/overview/#the-docker-client)

The Docker client (`docker`) is the primary way that many Docker users interact with Docker. When you use commands such as  `docker run`, the client sends these commands to  `dockerd`, which carries them out. The  `docker`  command uses the Docker API. The Docker client can communicate with more than one daemon.

### Docker registries[](https://docs.docker.com/get-started/overview/#docker-registries)

A Docker  _registry_  stores Docker images. Docker Hub is a public registry that anyone can use, and Docker is configured to look for images on Docker Hub by default. You can even run your own private registry.

When you use the  `docker pull`  or  `docker run`  commands, the required images are pulled from your configured registry. When you use the  `docker push`  command, your image is pushed to your configured registry.

### Docker objects[](https://docs.docker.com/get-started/overview/#docker-objects)

When you use Docker, you are creating and using images, containers, networks, volumes, plugins, and other objects. This section is a brief overview of some of those objects.

#### Images

An  _image_  is a read-only template with instructions for creating a Docker container. Often, an image is  _based on_  another image, with some additional customization. For example, you may build an image which is based on the  `ubuntu`  image, but installs the Apache web server and your application, as well as the configuration details needed to make your application run.

You might create your own images or you might only use those created by others and published in a registry. To build your own image, you create a  _Dockerfile_  with a simple syntax for defining the steps needed to create the image and run it. Each instruction in a Dockerfile creates a layer in the image. When you change the Dockerfile and rebuild the image, only those layers which have changed are rebuilt. This is part of what makes images so lightweight, small, and fast, when compared to other virtualization technologies.

#### Containers

A container is a runnable instance of an image. You can create, start, stop, move, or delete a container using the Docker API or CLI. You can connect a container to one or more networks, attach storage to it, or even create a new image based on its current state.

By default, a container is relatively well isolated from other containers and its host machine. You can control how isolated a container’s network, storage, or other underlying subsystems are from other containers or from the host machine.

A container is defined by its image as well as any configuration options you provide to it when you create or start it. When a container is removed, any changes to its state that are not stored in persistent storage disappear.

##### Example  `docker run`  command

The following command runs an  `ubuntu`  container, attaches interactively to your local command-line session, and runs  `/bin/bash`.

```
$ docker run -i -t ubuntu /bin/bash

```

When you run this command, the following happens (assuming you are using the default registry configuration):

1.  If you do not have the  `ubuntu`  image locally, Docker pulls it from your configured registry, as though you had run  `docker pull ubuntu`  manually.
    
2.  Docker creates a new container, as though you had run a  `docker container create`  command manually.
    
3.  Docker allocates a read-write filesystem to the container, as its final layer. This allows a running container to create or modify files and directories in its local filesystem.
    
4.  Docker creates a network interface to connect the container to the default network, since you did not specify any networking options. This includes assigning an IP address to the container. By default, containers can connect to external networks using the host machine’s network connection.
    
5.  Docker starts the container and executes  `/bin/bash`. Because the container is running interactively and attached to your terminal (due to the  `-i`  and  `-t`  flags), you can provide input using your keyboard while the output is logged to your terminal.
    
6.  When you type  `exit`  to terminate the  `/bin/bash`  command, the container stops but is not removed. You can start it again or remove it.
    

## The underlying technology[](https://docs.docker.com/get-started/overview/#the-underlying-technology)

Docker is written in the  [Go programming language](https://golang.org/)  and takes advantage of several features of the Linux kernel to deliver its functionality. Docker uses a technology called  `namespaces`  to provide the isolated workspace called the  _container_. When you run a container, Docker creates a set of  _namespaces_  for that container.

These namespaces provide a layer of isolation. Each aspect of a container runs in a separate namespace and its access is limited to that namespace.
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTIwNTU4MDY5MCwxMTQ3OTk4MzYsMTQzMj
I1Nzc0OSwtMTkyODkyNjY5MywzNTk0MTYyNjAsMTYwMzY3OTM5
Ml19
-->