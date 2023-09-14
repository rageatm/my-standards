## @rageatm/tsconfig

### Add the package to your `"devDependencies"`:

```sh
npm install --save-dev @rageatm/tsconfig
```

### prepare tsconfig:

extends `<PRESET>.json` to your `tsconfig.json`:

```json
{
  "compilerOptions": {},
  "extends": "@rageatm/tsconfig/<PRESET>.json",
  "compilerOptions": {
    ...
  },
  "include": ["./src"],
  "exclude": ["./lib", "./node_modules"]
}
```

`<PRESET>` is

- common
- next
