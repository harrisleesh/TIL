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

## Well-Formed Iterator

- iterator[Symbol.iterator]() 를 호출했을 때 자기자신이 되어야한다.
- iterator.next()를 한 후에 for..of 문을 수행하면 next가 된 시점이 유지되고 이후 값들만을 순회한다.

```jsx
const iterable = {
    [Symbol.iterator]() {
        let i = 3;
        return {
            next() {
                return i === 0 ? {done: true} : {value: i--, done: false};
            },
            [Symbol.iterator]() { return this;}
        }
    }
};

let iterator = iterable[Symbol.iterator]();
log(iterator.next());
for (const iteratorElement of iterator) {
    log(iteratorElement);
}

// well formed Iterator?
const arr = [1, 2, 3];
let iter = arr[Symbol.iterator]();
iter.next();
log(iter[Symbol.iterator]() === iter);
for (const number of iter) {
    log(number);
}
```

# 전개 연산자

- ...a
- 전개연산자도 이터러블 이터레이터 프로토콜을 따르는 값을 펼친다.

```jsx
// 전개 연산자
console.clear();
const a = [1, 2];
// a[Symbol.iterator] = null;
log([...a, ...[3,4]]);
log([a, [3,4]]);
```
