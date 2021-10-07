# 값으로서의 함수

JavaScript에서는 함수도 객체다. 다시 말해서 일종의 값이다. 거의 모든 언어가 함수를 가지고 있다. JavaaScript의 함수가 다른 언어의 함수와 다른 점은 함수가 값이 될 수 있다는 점이다.

```jsx
function a(){}

a = {
	b : function(){
	}
};
```

- 함수는 객체에 저장될 수 있고 객체에 저장된 함수는 메소드라 부른다.

함수는 값이기 때문에 다른 함수의 인자로 전달 될수도 있다.

```jsx
function cal(func, num){
	return func(num)
}

function increase(num){
	return num+1
}

function decrease(num){
	return num-1
}

alert(cal(increase, 1));
alert(cal(decrease, 1));

```

### 자바스크립트의 함수는 어디에 사용될 수 있을까?

- 변수
- 매개변수
- 리턴값
- 이러한 용도로 사용할 수 있는 것을 우리는 first-class citizen, object 라 한다.

# 콜백

## 처리의 위임

값으로 사용될 수 있는 특성을 이용하면 함수의 인자로 함수로 전달할 수 있다. 값으로 전달된 함수는 호출될 수 있기 때문에 이를 이용하면 함수의 동작을 완전히 바꿀 수 있다. 인자로 전달된 함수 sortNumber의 구현에 따라서 sort의 동작방식이 완전히 바뀌게 된다.

```jsx
var numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]; // 배열 객체
var sortfunc  = function(a,b){  //callback function
  return a-b;
}
console.log(numbers.sort(sortfunc)) // 내장/빌트인 객체, 내장/빌트인 메소드
```

- 콜백이 가능한 이유는 자바스크립트의 함수가 값이기 때문에 가능한 것이다.

## 비동기 처리

콜백은 비동기처리에서도 유용하게  사용된다. 시간이 오래걸리는 작업이 있을 때 이 작업이 완료된 후에 처리해야 할 일을 콜백으로 지정하면 해당 작업을 실행하도록 할 수 있다.

# Javascript is synchronous

- 호이스팅이 된 후부터 코드가 순서대로 실행 된다.

```java
console.log('1');
console.log('2');
console.log('3');
```

## callback

```java
console.log('1');
setTimeout(()=>
    console.log('2')
, 1000);
console.log('3');
```

### synchronous callback & asynchronous callback

```java
//synchronous callback
function printImmediately(print){
    print();
}
printImmediately(() => console.log('hello'));

//asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);
```

## 콜백 지옥

```java
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id === 'harris' && password === 'lee') ||
                (id === 'haerin' && password === 'park')
            ){
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000)
    }

    getRoles(user, onSuccess, onError){
        if(user === 'harris'){
            onSuccess({ name: 'harris', role: 'admin'})
        }
        else{
            onError(new Error('no access'));
        }
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,
    user => (
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
            },
            error => console.log(error)
        )
    ),
    error => console.log(error)
);
```
