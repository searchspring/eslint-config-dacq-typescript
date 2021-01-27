# DACQ Eslint Config Typescript

## Installation
Add [registry and authToken](https://docs.github.com/en/packages/guides/configuring-npm-for-use-with-github-packages#authenticating-to-github-packages) entry to `.npmrc` file:
```
# .npmrc

@searchspring:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=[your GitHub Auth Token]
```  

Add package:
```shell
yarn add @searchspring/eslint-config-dacq-typescript@[version_number]
```

## Publishing a package
The package is automatically published on new release published.  
New release should create a tag following a pattern `*.*.*`  
[About semantic versioning](https://docs.npmjs.com/about-semantic-versioning)
