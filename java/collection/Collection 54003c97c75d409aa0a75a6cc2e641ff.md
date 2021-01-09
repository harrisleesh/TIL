# Collection

- 자바의 대표 Collection 에는 List, Map, Set, Stack, Queue와 같은 것들이 있다. 이 추상화된 인터페이스 아래, 특정한 기법으로 구현된 자료구자 들어간다.
- Iterable 인터페이스를 상속한다. Iterbale은 iterator를 들고있고 foreach 함수를 가지고 있다.
- isEmpty, size, add, remove, clear

## List

- ArrayList
    - 리스트의 크기가 정해져 있다.
    - 내부구현이 array로 되어있음 탐색은 빠를수 있으나 삽입 삭제가 어렵다
- LinkedList
    - 삽입 삭제가 간단하다.
    - 탐색의 경우 첫 노드부터 탐색해야 해서 느리다.

## Map

- HashMap
    - Key 값에 Hash함수를 적용하여 나온 index에 Value를 저장한다.
    - 중복을 허용하지 않는다.
    - 순서가 없다.
- TreeMap
    - RBTree
- LinkedHashMap
    - LinkedList로 구현되어 있어서 순서가 보장

## Set

- HashSet
- TreeSet
- LinkedHashSet

> List vs Set
List는 순서를 보장해야한다.
그렇기때문에 Set보다 느릴 수 밖에 없다.
List를 써도되고 Set을 써도된다면 Set을 써라.

> Vector vs List
Vector는 동기화를 지원한다.
Vector는 속도가 느리지만 병렬 상황에서 안전하다.

## Stack

- LIFO
- 구현
    - Array 로구현하는게 좋다?
    - why?
    - pop에서 마지막 인덱스를 유지하며 사이즈만 조정하면 된다!

## Queue

- FIFO
- Queue<Integer> queue = new LinkedList<>;
- Array로 구현하면 poll 연산 후 앞당기는 작업이 필요하다
- LinkedList를 사용하면 좋다! 삽입 삭제 용이!!

### Array와 ArrayList의 다른점

- 둘다 배열이지만 ArrayList는 method로 접근, Array는 인덱스로 접근
- ArrayList는 원시 형태의 자료구조를 담을수 없다
- Array는 둘다 담을 수 있다.