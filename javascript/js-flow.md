
# 1. data type

- primitive type
- reference type

## primitive type

- number
- string
- boolean
- null
- undefined

```jsx
var a;
a = 'abc'
```

## reference type

### object

- array
- function
- RegExp

```jsx
var obj = {
	a: 1,
	b: 'bbb'
};
```

# 2. Execution Context 실행 맥락(환경)

- 실행에 필요한 코드 흐름상의 배경이 되는 조건 / 환경

⇒ 함수 or 전역공간

## call stack

- 현재 어떤 함수가 동작하고 있는지 다음에 어떤 함수가 동작할지는 stack의 구조로!

## environmentRecord

- 내부 식별자(hoisting)

## outerEnvironmentReference

- 외부식별자(scope chain)

### Hoisting

- 식별자 정보를 끌어올리다.

```jsx
console.log(a());
console.log(b());
console.log(c());
function a() {
	return 'a';
}
var b = function bb(){
return 'bb';
}
var c = ...

//envirenmentRecord
function a() {
	return 'a';
var b;
var c;
//scope 가 시작할 때 각 선언된 data를 선언한다!! (environment record)
console.log(a());
console.log(b());
console.log(c());
b = function bb(){
return 'bb';
}
c = ...
```
![image](https://user-images.githubusercontent.com/29927233/128281739-219f7b18-c515-4556-95de-2b235b733069.png)

### example
![image](https://user-images.githubusercontent.com/29927233/128281767-e8f19e16-2d01-4722-80ce-ea948fad9a96.png)

# 3. this

- 실행컨텍스트가 활성화 될 때 this binding이 된다!
    - 전역공간에서 → window / global
    - 함수 호출시 → window / global

        ```jsx
        function a() {
        	function b(){
        		console.log(this);
        	}
        }
        ```

    - 메소드 호출시 → 메소드 호출 주체 (메소드명 앞)

        ```jsx
        var a = {
        	b: function() {
        		console.log(this);
        	}
        {
        a.b(); //a <- this
        ```
![image](https://user-images.githubusercontent.com/29927233/128281801-d2a763c6-ad30-4c64-a56f-31e943efd37d.png)

![image](https://user-images.githubusercontent.com/29927233/128281820-22c76939-c81c-49d5-8f29-f7f3ed6ec5af.png)


    - callback 호출시
![image](https://user-images.githubusercontent.com/29927233/128281841-947d4457-22ee-4701-bdb3-d1465ec6473c.png)
![image](https://user-images.githubusercontent.com/29927233/128281854-d065020b-bdc6-40cb-9a24-4637b350b3ee.png)


        - 기본적으로는 함수의 this와 같다
        - 제어권을 가진 함수가 callback의 this를 명시한 경우 그에 따른다.
        - 개발자가 this를 바인딩한 채로 callback을 넘기면 그에 따른다.
    - 생성자함수 호출시 → 인스턴스

# 4. callback

- 호출해서 돌려줄 함수
![image](https://user-images.githubusercontent.com/29927233/128281868-bb96bb8c-fe0d-4a6d-9660-31f056e3c1d0.png)
- 제어권을 맡긴다.

## 특징

- 다른 함수(A)의 인자로 콜백함수(B)를 전달하면 A가 B의 제어권을 갖게 된다.
- A에 미리 정해놓은 방식에 따라 B를 호출한다.
- 미리 정해놓은 방식이란 어떤 시점에 콜백을 호출할지,
 인자에는 어떤 값들을 지정할지,
 this에 무엇을 바인딩할지 등이다.

# 5. closure

- 컨텍스트 A에서 선언한 변수 a를 참조하는 내부함수 B를 A의 외부로 전달할 경우, A가 종료된 이후에도 a가 사라지지 않는 현상

⇒ 지역변수가 함수 종료 후에도 사라지지 않게 할 수 있다.

```jsx
function a(){
	var localA = 1;
	var localB = 2;
	var localC = 3;
	return {
		get a() { return localA;},
		set a(v) { localA = v;},
		get b() { return localB + localC;},
		set b(v) { throw Error('read only');}
	}
}
var d = a();

```

# 6. prototype

## 6-1 prototype, constructor, __**proto__**

![image](https://user-images.githubusercontent.com/29927233/128307198-4b73c965-dbb9-4a7a-b0ed-86ac635055f6.png)

## 6-2 메소드 상속 및 동작 원리

## 6-3 prototype chaining
![image](https://user-images.githubusercontent.com/29927233/128307217-d51638f8-d34b-4c22-b021-9e27dcd3d8ac.png)

# 7. class

## 7-1 class (계급, 집단, 집합)
![image](https://user-images.githubusercontent.com/29927233/128307242-e707a026-8208-40b2-ba88-3a0d434586f4.png)

![image](https://user-images.githubusercontent.com/29927233/128307260-b57e2f40-6db7-48b7-a921-47bbe7fa67ac.png)

## 7-2 상속
![image](https://user-images.githubusercontent.com/29927233/128307290-92a710c9-708c-4408-ae2c-8744bb518cd4.png)

![image](https://user-images.githubusercontent.com/29927233/128307307-db37d08b-85d6-42a8-bb53-7dd707b5fc09.png)

![image](https://user-images.githubusercontent.com/29927233/128307319-9ce15be9-b76c-4ef8-b674-31c60ef07d86.png)
