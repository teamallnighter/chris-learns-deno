import { Application } from "https://deno.land/x/oak/mod.ts";

const app = new Application();
const Port = 8000;

app.use(( ctx ) => {
    ctx.response.body = 'HELLO WORLD';
});

if (import.meta.main) {
    app.listen({
        port: Port
        });
}


