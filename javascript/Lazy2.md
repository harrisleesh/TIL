# 결과를 만드는 함수 reduce, take

# queryStr 함수 만들기

```jsx
const queryStr = pipe(
    L.entries,
    L.map(([k, v]) => `${k}=${v}`),
    join('&')
);
log(queryStr({limit: 10, offset: 10, type: 'notice'}));
```

# Array.prototype.join 보다 다형성이 높은 join 함수

```jsx
L.entries = function* (obj) {
    for (const k in obj) yield [k, obj[k]];
};

const join = curry((sep = ',', iter) =>
    reduce((a, b) => `${a}${sep}${b}`, iter));
```

# take, find

```jsx
const users = [
        {age: 21},
        {age: 31},
        {age: 25},
        {age: 26},
        {age: 28},
        {age: 21},
        {age: 23},
        {age: 27},
        {age: 33},
        {age: 35}
    ]

    const find = (f, iter) => go(
        iter,
        filter(f),
        take(1),
        ([a]) => a
    )
```

# L.map, L.filter로 map과 filter 만들기

# L.flatten, flatten

- 배열을 다 전개한다!!

```jsx
[1,2],3,4, [5,6,7], 8, 9
=> 1,2,3,4,5,6,7,8,9

const isIterable = (a) => a && a[Symbol.iterator];
L.flatten = function* (iter) {
    for (const a of iter) {
        if (isIterable(a)) for (const b of a) yield b;
        else yield a;
    }
}
```

# yield *, L.deepFlat

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8d3c3a62-9e14-442f-adfe-f87999b70dd7/Untitled.png)

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dc002e90-51a0-4e77-ac20-8c0910b293ad/Untitled.png)

# L.flatMap, flatMap

- map + flatten

# 2차원 배열 다루기

```jsx
const arr = [
    [1, 2],
    [3, 4, 5,],
    [6, 7, 8],
    [9, 10]
];
go(
    arr,
    L.flatten,
    L.filter(a => a%2),
    take(3),
    log
)
```

# 이터러블 중심 프로그래밍 실무적인 코드

#
