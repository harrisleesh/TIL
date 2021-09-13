
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


