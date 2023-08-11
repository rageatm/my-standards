## @rageatm/prettier-config

### Add the package to your `"devDependencies"`:

```console
$ npm install --save-dev @rageatm/prettier-config
```

### prepare prettier config:

create/modify `.prettierrc.js`:

```js
module.exports = {
  ...require("@rageatm/prettier-config/<PRESET>"),
};
```

`<PRESET>` is ...

- backend (same as 'common')
- common
- frontend

### run prettier

```console
$ npx prettier
```
