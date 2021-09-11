# 객체와 테이블 매핑

## 엔티티 매핑 소개

- 객체와 테이블 매핑 : @Entity, @Table
- 필드와 컬럼 매핑 : @Column
- 기본 키 매핑 : @Id
- 연관관계 매핑 : @ManyToOne, @JoinColumn

## @Entity

- @Entity 가 붙은 클래스는 JPA가 관리, 엔티티라 한다.
- 주의
    - 기본 생성자 필수(파라미터가 없는 public 또는 protected 생성자)
    - 저장할 필드에 final 사용 x
- 속성
    - name : jpa가 내부적으로 관리하는 이름 (테이블명 x)

## @Table

- 속성
    - name : 매핑할 테이블 이름

# 데이터베이스 스키마 자동 생성

- 운영 장비에는 절대 create, create-drop, update 사용하면 안된다.

# 필드와 컬럼 매핑
![image](https://user-images.githubusercontent.com/29927233/132937233-4d330fa8-e306-4aa5-8f15-789d245b5a42.png)
![image](https://user-images.githubusercontent.com/29927233/132937235-31147702-feec-432f-adb7-8987cc8d32a3.png)
![image](https://user-images.githubusercontent.com/29927233/132937251-0832f7cd-b24e-44b8-879d-86f164b85d6c.png)
![image](https://user-images.githubusercontent.com/29927233/132937254-1b2209de-42f1-4521-9772-c14a697ba055.png)
![image](https://user-images.githubusercontent.com/29927233/132937260-284e2bce-c6e5-40b3-8b3b-7d4b82074715.png)


# 기본 키 매핑

## 기본 키 매핑 방법

### 직접 할당: **@Id만 사용**자동 생성(**@GeneratedValue**)

### **IDENTITY**: 데이터베이스에 위임, MYSQL**SEQUENCE**: 데이터베이스 시퀀스 오브젝트 사용, ORACLE

### @SequenceGenerator 필요**TABLE**: 키 생성용 테이블 사용, 모든 DB에서 사용

### @TableGenerator 필요**AUTO**: 방언에 따라 자동 지정, 기본값

![image](https://user-images.githubusercontent.com/29927233/132937297-d47941a9-522b-4713-aa63-d4fd9926d647.png)

## 권장하는 식별자 전략

- 기본 키 제약 조건: null 아님, 유일, 변하면 안된다.
- 미래까지 이 조건을 만족하는 자연키는 찾기 어렵다. (대리키, 대체키)를 사용하자.
- 예를 들어 주민등록번호도 기본 키로 적절하지 않다.
- 권장: Long형 + 대체키 + 키 생성전략 사용

# 실전 예제 - 1. 요구사항 분석과 기본 매핑
