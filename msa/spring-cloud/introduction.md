## Anti-Fragile

- autoscaling
- microservice
- chaos engineering
- continuous deployments

# Cloud-Native Architecture

- 확장가능한 아키텍처
    - scale-up, scale-out
- 탄력적 아키텍처
- 장애격리
    - 특정 서비스에 오류가 생겨도 다른 서비스에 영향을 주지 않음

# Cloud-Native Application

- CI
    - 통합 서버, 소스관리, 빌드, 테스트
- CD
    - Continuous Delivery
    - Continuous Deployment
- 카나리배포 vs 블루그린 배포
- DevOps
- container 기반 가상화

# 12 Factors

### 12factors.net

1. Base Code
2. Dependency Isolation
3. Configurations
4. Linkable backing service
5. stages of creation : 빌드, 배포, 실행 단계를 분리
6. stateless process
7. port binding
8. concurrency
9. disposability
10. development & production parity : 개발과 프로덕션을 분리
11. logs
12. admin processes for eventual process

# Monolith vs MSA

### Monolith

- 모든 업무로직이 하나의 애플리케이션으로 패키징된 서비스
- 시스템의 일부만 수정하더라도 전체 어플리케이션이 빌드 배포 되어야함!

MSA

- 어플리케이션 전체가 다운되지 않음
- 

# MicroService란?

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dc9ceaeb-7dbb-4b56-825e-12a9781353f7/Untitled.png)

1. Challenges
2. Small well chosen deployable unit
3. bounded context
4. RESTful
5. Configuration management
6. Cloud enabled
7. Dynabic scale-up and down
8. CI/CD
9. Visibility

# MicroService와 Service oriented Architecture

# Spring cloud
