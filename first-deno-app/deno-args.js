const food = Deno.args[0]

if (food === 'love') {
    console.log('🦕..Deno is born!')
} else {
    console.log('🥚 this egg needs some love')
}

//deno run deno-args.js 'jbgjkgjkb' <---This will run the code. as does not equal love
//Response '🥚 this egg needs some love'
//deno run deno-args.js 'love'
//response '🦕..Deno is born!'