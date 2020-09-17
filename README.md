![Deno Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Deno.svg/1200px-Deno.svg.png)

# 🦕 Learning Deno 🦕

[Documentation](https://deno.land/manual/)

## Set Up

### Installing Deno on Mac

```bash
curl -fsSL https://deno.land/x/install/install.sh | sh
```

```bash
brew install deno
```

#### Adding Deno to your path

```bash
deno completions bash > /usr/local/etc/bash_completion.d/deno.bash
source /usr/local/etc/bash_completion.d/deno.bash
```

### Getting Started

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

[Deno Repl](https://repl.it/languages/deno%23index.ts)

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

## Deno Internals 

If you use JavaScript or TypeScript it will either be compiled (if it is typescript) to vanilla JS and be sent to the V8 engine. 

Either way a process is started. Basically a sandbox is created for Deno to exist in. 

### [Rusty V8](https://github.com/denoland/rusty_v8)

Allows the V8 engine to communicate with Rust. When things are out of JavaScripts capabilities it is sent to a rust isolit. 

* Provide high quality Rust bindings to V8's C++ API. The API should match the original API as closely as possible.

* Do not introduce additional call overhead. (For example, previous attempts at Rust V8 bindings forced the use of Persistent handles.)

* Do not rely on a binary libv8.a built outside of cargo. V8 is a very large project (over 600,000 lines of C++) which often takes 30 minutes to compile. Furthermore, V8 relies on Chromium's bespoke build system (gn + ninja) which is not easy to use outside of Chromium. For this reason many attempts to bind to V8 rely on pre-built binaries that are built separately from the binding itself. While this is simple, it makes upgrading V8 difficult, it makes CI difficult, it makes producing builds with different configurations difficult, and it is a security concern since binary blobs can hide malicious code. For this reason we believe it is imperative to build V8 from source code during "cargo build".

* Publish the crate on crates.io and allow docs.rs to generate documentation. Due to the complexity and size of V8's build, this is nontrivial. For example the crate size must be kept under 10 MiB in order to publish.


## SECURITY

### Principle of least privilege

The principle means giving a user account or process only those privileges which are essential to perform its intended function. For example, a user account for the sole purpose of creating backups does not need to install software: hence, it has rights only to run backup and backup-related applications. Any other privileges, such as installing new software, are blocked. The principle applies also to a personal computer user who usually does work in a normal user account, and opens a privileged, password protected account (that is, a superuser) only when the situation absolutely demands it.


### White Listing

Whitelisting is the practice of explicitly allowing some identified entities access to a particular privilege, service, mobility, access or recognition. It is the opposite of blacklisting. The term, as well as its antonym, are increasingly[1] being deprecated in favor of language that is considered more inclusive.[2][3] Alternative terms are allowlist or passlist.


