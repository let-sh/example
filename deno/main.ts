import { serve } from "https://deno.land/std@0.53.0/http/server.ts";

const port = +Deno.env.get("PORT")!;

let headers = new Headers();
headers.append("content-type", "text/plain");

const s = serve({ port: port });
console.log(`Example app listening on http://localhost:${port}`);

for await (const req of s) {
  req.respond({ headers: headers, body: "hello, oasis" });
}
