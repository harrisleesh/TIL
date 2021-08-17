# 제너레이터와 이터레이터

## 제너레이터 : 이터레이터이자 이터러블을 생성하는 함수

- 순회할 수 있는 값을 만들기 쉽다.

```jsx
log = console.log;
function *gen(){
    yield 1;
    yield 2;
    yield 3;
    return 4;
}
// 모든 값을 순회가능하게 만들어 주는 generator
let iter = gen();
log(iter.next());
log(iter.next());
log(iter.next());
log(iter.next());

//return 값은 순회하지 않는다!
for (const number of gen()) {
    log(number);
}
```

# odds

```jsx
function *infinity(i = 0) {
    while (true) yield i++;
}
function *limit(l, iter){
    for (const a of iter) {
        yield a;
        if(a === l) return ;
    }
}
function *odds(l) {
    for (const a of limit(l, infinity(1))) {
        if (a % 2 === 1) yield a;
    }
}

const iter3 = odds(10);
log(iter3.next());
log(iter3.next());
log(iter3.next());
log(iter3.next());
log(iter3.next());
log(iter3.next());
```

# for...of, 전개 연산자, 구조 분해, 나머지 연산자

- ...ods(10);
- [...ods(10), ...ods(20)]
- const [head, ...tail] = ods(5);
- const [a, b, ...rest] = odds(10);

```jsx
log(...odds(5));
log([...odds(10), ...odds(20)]);
const [head, ...tail] = odds(10);
log(head);
log(tail);
const [first, second, ...rest] = odds(10);
log(first);
log(second);
log(rest);
```
