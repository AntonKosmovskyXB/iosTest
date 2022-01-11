From CDN
=========


[![npm](https://img.shields.io/npm/v/from-cdn.svg)](https://www.npmjs.com/package/from-cdn)

Promise based CDN loader for js/css

### How use

```js
import fromCDN from "from-cdn";

fromCDN([
	"//cdn.some.com/a/a.js",
	"//cdn.some.com/a/b.js",
	"//cdn.some.com/a/a.css",
]).then( _ => alert("All is ready"))

```

Function receives array of file links and returns a promise.
Promise will be resolved when all files are loaded 

- Code will not wait for CSS loading end!
- Order of JS files are not guaranteed, if you need to load few files in order, use

```js
fromCDN(["//cdn.som.com/a/a1.js"])
	.then( _ => fromCDN(["//cdn.som.com/a/a2.js"]))
	.then( _ => fromCDN(["//cdn.som.com/a/a3.js"]))
```

### License 

MIT