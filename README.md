![Deno Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Deno.svg/1200px-Deno.svg.png)

# Learning Deno

[Documentation](https://deno.land/manual/)

## Installing Deno on Mac

```bash
curl -fsSL https://deno.land/x/install/install.sh | sh
```

```bash
brew install deno
```

### Adding Deno to your path

```bash
deno completions bash > /usr/local/etc/bash_completion.d/deno.bash
source /usr/local/etc/bash_completion.d/deno.bash
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

