# How is Browser a very powerful tool ?
## The dev tools provides developers with the following : 
- Elements Tab - Inspect the elements, styles and see the DOM Structure
- Console Tab - Allows to write an JavaScript code, errors, warnings, logs are displayed
- Network Tab - For checking API calls
- Applications Tab - LocalStorage, cookies, etc exist here
- Source Tab - The JavaScript files esists here, we can add debbuger to study any how the code is executing
- Performance Tab - For Animations, page load time

## Eevent object in JavaScript : 
An event is the action that user performs like : typing in an Input, clicking a Button, mouse entering or leaving.
```
onChange={(e) => {
    console.log("Full event object:", e);
    console.log("Input value:", e.target.value);
  }}
```
e: the SyntheticEvent object (React’s version)

e.target: the input element

e.target.value: what the user just typed
