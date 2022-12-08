# Development


### Override package to local link

1. The typescript has to be in the root of the package (can't be in `src`). 
2. `package.json`

```
"dependencies": {
    "@bs/lib": "file:../../lib-ts",
}
```

And also:

```
"postinstall": "rm node_modules/@bs/lib && ln -s /Users/kurt/work/lib-ts node_modules/@bs/lib"
```

3. `tsconfig.json`

```
"paths": {
  "@bs/lib": [
    "@bs/lib"
  ]
```

4. asldkfjadsl