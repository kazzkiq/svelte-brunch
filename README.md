[![npm version](https://badge.fury.io/js/svelte-brunch.svg)](https://badge.fury.io/js/svelte-brunch)

# Installation

1. Inside your project, simply run: `npm install --save-dev svelte-brunch`
2. Thats it.

This plugin listen for any `.svelte` file in your project and compiles it with your JavaScript.

Here is an example of how to import a component to your page (using ES6):

```js
// initialize.js
// importing mycomponent.svelte file
import MyComponent from './path/to/mycomponent' // notice how we omit the '.svelte' extension

const mycomp = new MyComponent({
  // Svelte opts, etc...
});
```
