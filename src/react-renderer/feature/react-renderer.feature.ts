import { Feature, Environment, Service } from "@wixc3/engine-core";
import type RenderService from "../ui/renderer-service";

export const uiEnv = new Environment("ui", "window", "single");

export default class ReactRenderer extends Feature<'reactRenderer'> {
  id = "reactRenderer" as const;
  dependencies = [];
  api = {
    renderService: Service.withType<RenderService>().defineEntity(uiEnv),
  };
}
