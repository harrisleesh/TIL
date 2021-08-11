# 기존과 달라진 ES6에서의 리스트 순회

```jsx

const list = [1, 2, 3];
for (var i = 0; i < list.length; i++) {
    log(list[i]);
}

const str = 'abc';
for (var i = 0; i < str.length; i++) {
    log(str[i])
}

for (const a of list) {
    log(a);
}
for (const a of str) {
    log(a);
}

```

# Array, Set, Map을 통해 알아보는 이터러블/이터레이터 프로토콜

## 이터러블/이터레이터 프로토콜

- 이터러블: 이터레이터를 리턴하는 [Symbol.iterator]() 를 가진 값
- 이터레이터: { value, done } 객체를 리턴하는 next() 를 가진 값
- 이터러블/이터레이터 프로토콜: 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록한 규약
- map.keys(), map.values()는 각각의 값만을 순회하는 iterator를 반환한다.
- iterator의 iterator는 자기 자신이다.

```jsx
const log = console.log;

    log('Arr -------------');
    const arr = [1,2,3];
    let iterator = arr[Symbol.iterator]();
    log(iterator.next());
    log(iterator.next());
    log(iterator.next());
    log(iterator.next());

    for (const a of arr) log(a);

    log('Set -------------');
    const set = new Set([1,2,3]);
    for (const a of set) log (a);

    log('Map -------------');
    const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
    for (const a of map) log (a);
    for (const a of map.keys()) log(a);
    for (const a of map.values()) log(a);
    for (const a of map.entries()) log(a);
```

# 사용자 정의 이터러블, 이터러블/이터레이터 프로토콜 정의

# 전개 연산자
