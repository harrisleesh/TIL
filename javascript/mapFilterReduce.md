# map

```jsx
const products = [
    {name: '반팔티', price: 15000},
    {name: '긴팔티', price: 20000},
    {name: '핸드폰케이스', price: 15000},
    {name: '바지', price: 30000},
    {name: '후드티', price: 25000},
]

function map(f, products) {
    let res = [];
    for (const product of products) {
        res.push(f(product));
    }
    return res;
}

log(map(p => p.name, products));
// let names = [];
// for (const product of products) {
//     names.push(product.name);
// }
// log(names);

log(map(p => p.price, products));
// let prices = [];
// for (const product of products) {
//     prices.push(product.price);
// }
// log(prices)
```

# 이터러블 프로토콜을 따른 map의 다형성 1

```jsx
log([1, 2, 3].map(a => a + 1));

log(map(el => el.nodeName, document.querySelectorAll('*')));
function *gen(){
    yield 1;
    yield 2;
    yield 3;
}

log(map((a => a * a), gen()));
```

# 이터러블 프로토콜을 따른 map의 다형성 2

```jsx
let m = new Map();
m.set('a', 10);
m.set('b', 20);

log(new Map(map(([k, v]) => [k, v *2], m)));
```

# filter

```jsx
const filter = (f, products) => {
    let res = [];
    for (const p of products) {
        if (f(p)) res.push(p);
    }
    return res;
}
log(...filter(p => p.price < 20000, products));
// let under20000 = [];
// for (const product of products) {
//     if (product.price < 20000) {
//         under20000.push(product);
//     }
// }
// log(...under20000);

log(...filter(p => p.price >= 20000, products));
// let over20000 = [];
// for (const product of products) {
//     if (product.price >= 20000) {
//         over20000.push(product);
//     }
// }
// log(...over20000);

log(filter(n => n % 2, [1, 2, 3, 4, 5, 6]));
```

# reduce

# reduce 2

```jsx
const numbers = [1, 2, 3, 4, 5];

let total = 0;
for (const number of numbers) {
    total += number;
}
log(total);

const reduce = (f, acc, iter) => {
    if(!iter){
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }
    for (const a of iter) {
        acc = f(acc, a);
    }
    return acc;
}
const add = (a, b) => a + b;

log(reduce(add, 0, numbers));
// 15

log(reduce(add, numbers));
log(reduce((total_price, product) => total_price + product.price, 0, products))
```

# map+filter+reduce 중첩 사용과 함수형 사고

```jsx
function map(f, products) {
    let res = [];
    for (const product of products) {
        res.push(f(product));
    }
    return res;
}

const filter = (f, products) => {
    let res = [];
    for (const p of products) {
        if (f(p)) res.push(p);
    }
    return res;
}

const reduce = (f, acc, iter) => {
    if (!iter) {
        iter = acc[Symbol.iterator]();
        acc = iter.next().value;
    }
    for (const a of iter) {
        acc = f(acc, a);
    }
    return acc;
}
```

```jsx
log = console.log;
    const products = [
        {name: '반팔티', price: 15000},
        {name: '긴팔티', price: 20000},
        {name: '핸드폰케이스', price: 15000},
        {name: '바지', price: 30000},
        {name: '후드티', price: 25000},
    ]
    const add = (a, b) => a + b;
    log(reduce(add, filter(n => n <= 20000, map(p => p.price, products))));
    log(reduce(add, map(p => p.price, filter(p => p.price <= 20000, products))));
    log(reduce(add, [1, 2, 3, 4, 5]));
```
