## HOSTING A SERVER

#### package.json

```json
{
	"name": "my-app",
	"version": "1.0.0",
	"description": "My awesome app",
	"main": "app.js",
	"scripts": {
		"start": "nodemon app.js"
	},
	"dependencies": {
		"express": "^4.17.1"
	}
}
```

#### app.js

```javascript
// npm install express
import express from "express"; // found in package.json
import HelloRoutes from "./hello.js";
import Lab5 from "./lab5.js";

const app = express();

HelloRoutes(app); //https://localhost:4000/hello
Lab5(app);

const port = 4000; // hosted on https://localhost:4000
```

### Nodemon

Without an autocompiler, we need to `npm install nodemon.js`. we can then run our app.js using `nodemon app.js`.

#### hello.js

this file stores the hello route in a separate file so it does not need to be in app.js

```javascript
function HelloRoutes(app) {
	const hello = (req, res) => {
		res.send("Hello World"); // pattern match for url, if url matches /hello, then res.send("Hello World")
	};

	app.get("/hello", hello);
}
```

#### lab5.js

```javascript
function Lab5(app) {
	const lab5 = (req, res) => {
		res.send("Welcome to lab 5");
	};

	app.get("/a5/welcome", lab5);
}
```
