# range와 느긋한 L.range

- 제너레이터를 사용!

```jsx
const range = l => {
    let i = -1;
    let list = [];
    while(++i < l){
        list.push(i);
    }
    return list;
}

log(range(5));
const li = range(4);
log(reduce(add, li));

const L = [];
L.range = function *gen(l){
    let i = -1;
    while(++i < l){
        yield i;
    }
}
log(L.range(4));
log(reduce(add, L.range(4)));
```

# range와 느긋한 L.range 테스트

```jsx
function test(name, time, f) {
        console.time(name);
        while (time--) f();
        console.timeEnd(name);
    }

    test('range', 10, () => reduce(add, range(1000000)));
    test('L.range', 10, () => reduce(add, L.range(1000000)));
```

# take

```jsx
const take = (l, iter) => {
        let res = [];
        for(const a of iter){
            res.push(a);
            if(res.length == l) return res;
        }
        return res;
    }
    log(take(5, range(100)));
    log(take(5, L.range(100)));
```

# 제너레이터/이터레이터 프로토콜로 구현하는 지연 평가

- Lazy Evaluation
- 제때 계산법
- 느긋한 계산법

# L.map

```jsx
L.map = function* (f, iter) {
    for (const el of iter) yield f(el);
}
let it = L.map(a => a + 10, [1, 2, 3]);
// log(it.next());
// log(it.next());
// log(it.next());
// log(...it);
```

# L.filter

```jsx
L.filter = function* (f, iter) {
    for (const el of iter) if (f(el)) yield el;
}

it = L.filter(a => a % 2, [1, 2, 3, 4]);
log(it.next());
log(it.next());
```

# range, map, filter, take, reduce 중첩 사용

- 하나하나  다 실행

```jsx
go(
        range(10),
        map(a => a + 10),
        filter(a => a % 2),
        take(2),
        log
    )
```

# L.range, L.map, L.filter, take의 평가 순서

# 엄격한 계산과 느긋한 계산의 효율성 비교

# map, filter 계열 함수들이 가지는 결합 법칙

- 사용하는 데이터가 무엇이든지
- 사용하는 보조 함수가 순수 함수라면 무엇이든지
- 아래와 같이 결합한다면 둘 다 결과가 같다.
- [[mapping, mapping], [filtering, filtering], [mapping, mapping]]
- [[mapping, filtering, mapping], [mapping, filtering, mapping]]

# ES6의 기본 규약을 통해 구현하는 지연 평가의 장점
