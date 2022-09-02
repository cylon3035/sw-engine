import { Feature, Environment, Service } from "@wixc3/engine-core";
import type RenderService from "../ui/renderer-service";

export const uiEnv = new Environment("ui", "window", "single");

export default new Feature({
  id: "reactRenderer",
  dependencies: [],
  api: {
    renderService: Service.withType<RenderService>().defineEntity(uiEnv),
  },
});
