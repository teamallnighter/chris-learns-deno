# First Deno APP

## deno.js

```javascript
const food = 'love'

if (food === 'love') {
    console.log('🦕..Deno is born!')
} else {
    console.log('🥚 this egg needs some love')
}
```

```bash
deno run deno.js
```

```bash
🦕..Deno is born!
```

---

## deno-args.js

```javascript
const food = Deno.args[0]

if (food === 'love') {
    console.log('🦕..Deno is born!')
} else {
    console.log('🥚 this egg needs some love')
}
```

```bash
deno run deno-args.js 'poop'
```

```bash
🥚 this egg needs some love
```

```bash
deno run deno-args.js 'love'
```

```bash
🦕..Deno is born!
```
---

### Adding Another Variable 

```javascript
const food = Deno.args[0]
const parent = Deno.args[1]
if (food === 'love' && parent === 'ryan') {
    console.log('🦕..Deno is born!')
} else {
    console.log('🥚 this egg needs some love')
}
```

```bash
deno run deno-args.js 'love' 'ryan'
```

```bash
🦕..Deno is born!
```

