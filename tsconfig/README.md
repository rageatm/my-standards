## @rageatm/tsconfig

### Add the package to your `"devDependencies"`:

```sh
npm install --save-dev @rageatm/tsconfig
```

### extends ~~~.json to your `tsconfig.json`:

```json
{
  "extends": "@rageatm/tsconfig/~~~.json",
  "compilerOptions": {
    "outDir": "./lib"
  },
  "include": ["./src"],
  "exclude": ["./lib", "./node_modules"]
}
```
