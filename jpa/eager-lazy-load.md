
## Member를 조회할 때 항상 팀도 함께 조회해야 할까?

- 단순히 멤버만 조회하는 business logic은 어떻게 해야할까?
- println(member.getName());

### 지연 로딩 LAZY을 사용해서 프록시로 조회

```java
@Entity
public class Member {
@Id
@GeneratedValue 
private Long id;

@Column(name = "USERNAME")
private String name; 

@ManyToOne(fetch = FetchType.LAZY) //** 
@JoinColumn(name = "TEAM_ID")
private Team team;
..
}
```

![image](https://user-images.githubusercontent.com/29927233/133105675-2ccd4a59-cd9a-4e82-a062-b8d6a7d9b358.png)


## 지연 로딩 LAZY를 사용해서 프록시로 조회

![image](https://user-images.githubusercontent.com/29927233/133105700-0bad9fdd-2095-4cc6-bb1c-616f6aa3e98e.png)

```java
Team team = member.getTeam();
team.getName(); //실제 Team을 조회하는 시점에 초기화(DB 조회)
```

![image](https://user-images.githubusercontent.com/29927233/133105726-8b7e9f06-b7b9-4111-9d2a-2631bfaadc49.png)

## 즉시 로딩

- FetchType.EAGER : 멤버와 팀을 한번에 가져온다.
![image](https://user-images.githubusercontent.com/29927233/140506638-8e9f7a38-d178-45c4-8fc2-feff600acdd2.png)

## 프록시와 즉시로딩 주의

- 가급적 지연 로딩만 사용
- 즉시 로딩을 적용하면 예상하지 못한 SQL이 발생
- 즉시 로딩은 JPQL에서 N+1 문제를 일으킨다.
- @ManyToOne, @OneToOne은 기본이 즉시 로딩 → LAZY로 설정

# 지연 로딩 활용 - 실무

- 모든 연관관계에 지연 로딩을 사용해라!
- 실무에서 즉시 로딩을 사용하지 마라!
- JPQL fetch 조인이나, 엔티티 그래프 기능을 사용해라!
- 즉시로딩은 상상하지 못한 쿼리가 나간다.
