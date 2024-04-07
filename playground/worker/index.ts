import { Eta } from "eta";
import { Hono } from "hono";
import template from "./template.txt.eta";

const app = new Hono();
const eta = new Eta({
  autoTrim: false,
});

app.get("/", async c => c.text(eta.render(template, {
  name: c.req.query("q"),
})));

export default app;
