
# 소개

## JPA는 다양한 쿼리 방법을 지원

- **JPQL**
- JPA Criteria
- **QueryDSL**
- 네이티브 SQL
- JDBC API 직접 사용, MyBatis, SpringJdbcTemplate

## JPQL 소개

- 가장 단순한 조회 방법
    - EntityManger.find()
    - 객체 그래프 탐색(a.getB().getC())
- 나이가 18살 이상인 회원을 모두 검색하고 싶다면?

## JPQL(java persistence query language)

- JPA를 사용하면 엔티티 객체를 중심으로 개발
- 문제는 검색 쿼리
- 검색을 할 때도 테이블이 아닌 엔티티 객체를 대상으로 검색
- 모든 DB 데이터를 객체로 변환해서 검색하는 것은 불가능
- 애플리케이션이 필요한 데이터만 DB에서 불러오려면 결국 검색 조건이 포함된 SQL이 필요함
- JPA는 SQL을 추상화한 JPQL이라는 객체지향 쿼리 언어 제공
- SQL과 문법 유사, SELECT, FROM, WHERE, GROUP BY, HAVING, JOIN 지원
- JPQL은 엔티티 객체를 대상으로 쿼리
- SQL은 데이터베이스 테이블을 대상으로 쿼리

# 기본 문법과 쿼리 API

- JPQL은 객체지향 쿼리 언어다. 엔티티 객체를 대상으로 쿼리한다.
- JPQL은 SQL로 변환되서 실행된다.

## JPQL 문법

- select m from Member as m where m.age >18
- 엔티티의 속성은 대소문자 구분O (Member, age)
- JPQL 키워드는 대소문자 구분X (SELECT, FROM, where)
- 엔티티 이름 사용, 테이블 이름이 아님
- 별칭을 사용(m)

## 집합과 정렬

- sum count
- group by, having, order by

## 결과 조회 API

- query.getResultList(): 결과가 하나 이상일 때, 리스트 반환
    - 결과가 없으면 빈 리스트 반환
- query.getSingleResult(): 결과가 정확히 하나, 단일 객체 반환
    - 결과가 없으면 : NoResultException
    - 둘 이상이면 : NonUniqueResultException

## 파라미터 바인딩 - 이름 기준, 위치 기준

```java
Member singleResult = em.createQuery("select m from Member m where m.username = :username", Member.class)
                    .setParameter("username", "member1")
                    .getSingleResult();
```

# 프로젝션

- SELECT 절에 조회할 대상을 지정하는 것
- 프로젝션 대상: 엔티티, 임베디드 타입, 스칼라 타입(숫자, 문자등 기본 데이터)
- SELECT m FROM Member m → 엔티티 프로젝션
- SELECT [m.team](http://m.team) FROM Member m → 엔티티 프로젝션
- SELECT m.address FROM Member m
- SELECT m.username, m.age FROM Member m → 스칼라 타입 프로젝션
- DISTINCT 로 중복 제거

## 프로젝션 - 여러 값 조회

- Query 타입으로 조회
- Object[] 타입으로 조회
- new 명ㄹ여어로 조회
    - 단순 값을 DTO로 바로 조회
    - SELECT new jpql.MemberDTO(m.username, m.age

# 페이징

## 페이징 API

- JPA느 페이징을 다음 두 API로 추상화
- setFirstResult(int startPositino) : 조회 시작 위치(0부터 시작)
- setMaxResults(int maxResult) : 조회할 데이터 수

```java
//페이징 쿼리
String jpql = "select m from Member m order by m.name desc"; List<Member> resultList = em.createQuery(jpql, Member.class)
.setFirstResult(10) .setMaxResults(20) .getResultList();
```
