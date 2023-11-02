import { Feature, Environment, Service, Config } from "@wixc3/engine-core";
import type RenderService from "../ui/renderer-service";

export const uiEnv = new Environment("asdf-ui", "window", "single");

export default class ReactRenderer extends Feature<"reactRenderer"> {
  id = "reactRenderer" as const;
  dependencies = [];
  api = {
    coolConfig: Config.withType<{ isCool: boolean }>().defineEntity({
      isCool: true,
    }),
    renderService: Service.withType<RenderService>().defineEntity(uiEnv),
    domNodeService: Service.withType<{
      getRootElement(): Element;
      getVersion(): string;
    }>().defineEntity(uiEnv),
  };
}
