import { parse } from "https://deno.land/std@0.164.0/flags/mod.ts";

const { message } = parse(Deno.args);

console.log(`Message from our first CLI:`, message);
