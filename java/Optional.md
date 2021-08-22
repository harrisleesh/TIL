[](https://www.baeldung.com/java-optional)

# Create Optional Objects

```jsx
String name = "harris";
String name2 = null;
Optional<String> optionalName = Optional.of(name);
assertTrue(optionalName.isPresent());
assertThrows(NullPointerException.class, () -> Optional.of(name2));
Optional<String> optionalName2 = Optional.ofNullable(name2);
assertFalse(optionalName2.isPresent());
```

# Checking Value Presence: isPresent() and isEmpty()

```jsx
String name = "harris";
String name2 = null;
Optional<String> optionalName = Optional.of(name);
assertTrue(optionalName.isPresent());
assertFalse(optionalName.isEmpty());
assertThrows(NullPointerException.class, () -> Optional.of(name2));
Optional<String> optionalName2 = Optional.ofNullable(name2);
assertFalse(optionalName2.isPresent());
assertTrue(optionalName2.isEmpty());
```

# Conditional Action With ifPresent()

## before optional

```jsx
if(name != null) {
    System.out.println(name.length());
}
```

```jsx
Optional<String> harris = Optional.of("harris");
harris.ifPresent(name -> System.out.println(name.length));
```

# Default Value With orElse()

```jsx
String name = null;
String defaultName = "harris";
String harris = Optional.ofNullable(name).orElse(defaultName);
assertEquals(harris, defaultName);
```

# Difference Between orElse and orElseGet()

```jsx
public String getMyDefault() {
    System.out.println("Getting Default Value");
    return "Default Value";
}

@Test
public void whenOrElseGetAndOrElseOverlap_thenCorrect() {
    String text = null;

    String defaultText = Optional.ofNullable(text).orElseGet(this::getMyDefault);
    assertEquals("Default Value", defaultText);

    defaultText = Optional.ofNullable(text).orElse(getMyDefault());
    assertEquals("Default Value", defaultText);
}
```

- 위의 결과는 같다.
- return below

```jsx
Getting default value...
Getting default value...
```

```jsx
@Test
public void whenOrElseGetAndOrElseDiffer_thenCorrect() {
    String text = "Text present";

    System.out.println("Using orElseGet:");
    String defaultText 
      = Optional.ofNullable(text).orElseGet(this::getMyDefault);
    assertEquals("Text present", defaultText);

    System.out.println("Using orElse:");
    defaultText = Optional.ofNullable(text).orElse(getMyDefault());
    assertEquals("Text present", defaultText);
}
```

- 위의 결과는 다르다.
- return below

```jsx
Using orElseGet:
Using orElse:
Getting default value...
```

- Notice that when using *orElseGet()* to retrieve the wrapped value, the *getMyDefault()* method is not even invoked since the contained value is present.
- However, when using *orElse()*, whether the wrapped value is present or not, the default object is created. So in this case, we have just created one redundant object that is never used.
