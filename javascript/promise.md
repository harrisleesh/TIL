- javascript 내장/빌트인 오브젝트
- for asynchronous operation
    - state: pending → fulfilled or rejected
    - producer vs consumer

# Producer

```java
//when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) =>{
    //doing something heavy work (network, read files)
    console.log('doing something');
    setTimeout(() => {
//        resolve('harris');
	reject(new Error('no network'));
    }, 2000);
})
```

# Consumers : then, catch, finally

```java
promise
    .then((value) => {
        console.log(value);
    })
    .catch(error => {
        console.log(error);
    })
		.finally(() => {
        console.log('finally');
    });

```

# Promise chaining
