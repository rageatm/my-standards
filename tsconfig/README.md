## @rageatm/tsconfig

### Add the package to your `"devDependencies"`:

```sh
npm install --save-dev @rageatm/tsconfig
```

### prepare tsconfig:

extends `<PRESET>.json` to your `tsconfig.json`:

```json
{
  "extends": "@rageatm/tsconfig/<PRESET>.json",
  "compilerOptions": {
    ...
  },
  "include": [ ... ],
  "exclude": [ ... ]
}
```

`<PRESET>` is

- common
- next
