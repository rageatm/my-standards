## @rageatm/eslint-config

### Add the package to your `"devDependencies"`:

```console
$ npm install --save-dev @rageatm/eslint-config eslint
```

### prepare eslint config

extends `<PRESET>` to your `.eslintrc.js`:

```js
module.exports = {
  extends: "@day1co/eslint-config/<PRESET>",
};
```

`<PRESET>` is

- common-ts
- react-ts

### run eslint

```console
$ npx eslint
```
