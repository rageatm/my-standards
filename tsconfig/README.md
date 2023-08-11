## @rageatm/tsconfig

### Add the package to your `"devDependencies"`:

```sh
npm install --save-dev @rageatm/tsconfig
```

### prepare tsconfig:

create/modify your `tsconfig.json`:

```json
{
  "extends": "@rageatm/tsconfig/<PRESET>.json",
  "compilerOptions": {
    "outDir": "./lib"
  },
  "include": ["./src"],
  "exclude": ["./lib", "./node_modules"]
}
```

`<PRESET>` is ...

- backend
- common
