<h1 align="center">📡 micro-req</h1>
<div align="center">
  <strong>Tiny and lightweight promise based HTTP(S) request library for node</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/micro-req">
    <img src="https://img.shields.io/npm/v/micro-req.svg?style=flat-square" alt="Package version" />
  </a>
  <a href="https://npmjs.org/package/micro-req">
  <img src="https://img.shields.io/npm/dm/micro-req.svg?style=flat-square" alt="Downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="Standard" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/micro-req">
    <img src="https://img.shields.io/travis/tiaanduplessis/micro-req.svg?style=flat-square" alt="Travis Build" />
  </a>
  <a href="https://github.com/RichardLitt/standard-readme)">
    <img src="https://img.shields.io/badge/standard--readme-OK-green.svg?style=flat-square" alt="Standard Readme" />
  </a>
  <a href="https://badge.fury.io/gh/tiaanduplessis%2Fmicro-req">
    <img src="https://badge.fury.io/gh/tiaanduplessis%2Fmicro-req.svg?style=flat-square" alt="GitHub version" />
  </a>
  <a href="https://dependencyci.com/github/tiaanduplessis/micro-req">
    <img src="https://dependencyci.com/github/tiaanduplessis/micro-req/badge?style=flat-square" alt="Dependency CI" />
  </a>
  <a href="https://github.com/tiaanduplessis/micro-req/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/micro-req.svg?style=flat-square" alt="License" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs" />
  </a>
  <a href="https://www.paypal.me/tiaanduplessis/1">
    <img src="https://img.shields.io/badge/$-support-green.svg?style=flat-square" alt="Donate" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/micro-req/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/micro-req.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/micro-req/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/micro-req.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20micro-req!%20https://github.com/tiaanduplessis/micro-req%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/micro-req.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="tiaanduplessis.co.za">Tiaan</a> and <a href="https://github.com/tiaanduplessis/micro-req/graphs/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#api">API</a></li>
  <li><a href="#cli">CLI</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

```sh
$ npm install --save micro-req
# OR
$ yarn add micro-req
```

## Usage

```js
const req = require('micro-req')

// GET request
req('https://jsonplaceholder.typicode.com/posts/1').then((res) => {
  console.log(res.headers, res.body)
}).catch(console.log)

// POST request
req({
  url: 'https://jsonplaceholder.typicode.com/posts',
  json: {
    title: 'Hi', body: 'Friend', userId: 1
  }
}).then((res) => {
  console.log(res.headers, res.body)
}).catch(console.log)

```

## API

Module exports a single function that returns a promise. It accepts a url string as argument for simple `GET` requests or an object with the following options:

```js
{
  url: String, // (Required)
  port: Int, // Port of request. Defaults to 80 or 443 depending on protocol
  headers :Object, // Headers associated with request. If form or json property provided, correct headers will be added
  method: String, // Method of request, Defaults to GET or POST if form or json property provided
  auth: String, // Authorization in 'user:password' format
  encoding: String // Encoding defaulted to UTF-8
  form: Object || String, // form data to POST
  json: Object // Object to POST,
}
```

The promise resolves with the response object. The body is parsed to a object if possible.

## CLI

The CLI is currently a work in progress.

## Contribute

Contributions are welcome. Please open up an issue or create PR if you would like to help out.

Note: If editing the README, please conform to the [standard-readme](https://github.com/RichardLitt/standard-readme) specification.

## License

Licensed under the MIT License.
