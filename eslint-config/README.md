## @rageatm/eslint-config

### Add the package to your `"devDependencies"`:

```console
$ npm install --save-dev @day1co/eslint-config eslint
```

### prepare eslint config

extends `<PRESET>` to your `.eslintrc.js`:

- common-ts
- vue-js
- react-ts

```js
module.exports = {
  extends: "@day1co/eslint-config/<PRESET>",
};
```

### run eslint

```console
$ npx eslint
```
