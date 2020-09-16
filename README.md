# Learning Deno

## Installing Deno on Mac

[Documentation](https://deno.land/manual/)

```bash
curl -fsSL https://deno.land/x/install/install.sh | sh
```

```bash
brew install deno
```

## Getting Started

```bash
deno run https://deno.land/std/examples/welcome.ts
```

```javascript
import { serve } from "https://deno.land/std@0.69.0/http/server.ts";
const s = serve({ port: 8000 });
console.log("http://localhost:8000/");
for await (const req of s) {
  req.respond({ body: "Hello World\n" });
}
```

## Links

[Deno Standard Library](https://deno.land/std@0.69.0)

[Deno Third Party Library](https://deno.land/x)

---

## Why Deno 

### Built by [Ryan Dahl](https://github.com/ry) the creator of [Node.js](https://nodejs.org/en/)

---

### Features

Written in [Rust](https://www.rust-lang.org/) by Modilla Firefox

It has [Type Script Support](https://www.typescriptlang.org/) by Microsoft

and 

Is built ontop of the [V8 Engine](https://v8.dev/) by Google.

---

