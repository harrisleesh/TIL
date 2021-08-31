# Overview
## React?
declaritive, effective, flexible javascript library
it lets you compose complex UIs from small and isolated pieces of code called "components"

```
class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}
```
ShoppinList is a Component class or component type. 
- A component takes in parameters, called props.
- Component return a React element which is lightweight description of what to render.

### JSX

Most react developers use a special syntax called JSX.
JSX makes these structurees easier to write. The <div /> syntax is transformed at build time to React.createElement('div').
```
return React.createElement('div', {className: 'shopping-list'},
  React.createElement('h1', /* ... h1 children ... */),
  React.createElement('ul', /* ... ul children ... */)
);
```

- JSX comes with the full power of JavaScript. 
- you can put any javascript expressions within braces inside JSX.
- Each React element is a JavaScript object that you can store in a variable or pass around in your program
- Each React component is encapsulated and can operate independently;
- this allows you to build complex UIs from simple componenets.

## Rendering Elements
Unlike browser DOM elements, React elements are plain objects, and are cheap to create. React DOM takes care of updating the DOM to match the React elements.
