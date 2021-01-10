// getting started with node:
//   https://khalilstemmler.com/blogs/typescript/node-starter-project/

// adding tests:
//   https://adrianhall.github.io/web/2018/07/04/run-typescript-mocha-tests-in-vscode/

// property-based testing:
//   https://dubzzz.github.io/fast-check.github.com/

// publishing to npm
//   https://medium.com/the-andela-way/build-and-publish-your-first-npm-package-a4daf0e2431
//   https://medium.com/cameron-nokes/the-30-second-guide-to-publishing-a-typescript-package-to-npm-89d93ff7bccd
//   https://docs.npmjs.com/updating-your-published-package-version-number

// connect npm package to GitHub packages list
//   https://dev.to/sijils/publishing-npm-package-to-github-package-repository-5ane

export { Example as Example } from './Example'

// to set up (first time only):
//   $ npm i --save-dev ts-node typescript mocha chai fast-check
//   $ npm i --save-dev @types/node @types/chai @types/mocha

// to publish (every time, including first):
//   $ npm run test
//   $ npx tsc
//   $ git add .
//   $ git commit -am <message>
//   $ npm version <major/minor/patch>
//   $ npm login --registry=https://npm.pkg.github.com --scope=awwsmm
//       Username: awwsmm
//       Password: <Personal Access Token from GitHub>
//   $ npm publish
//   $ git push