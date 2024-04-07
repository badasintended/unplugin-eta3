import { Eta } from "eta";
import template from "./template.txt.eta";

const eta = new Eta();
const result = eta.render(template, {
  hello: "World",
});

document.getElementById("app")!.innerHTML = result;
