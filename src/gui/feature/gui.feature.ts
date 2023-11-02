import { COM, Feature } from "@wixc3/engine-core";
import reactRendererFeature from "../../react-renderer/feature/react-renderer.feature";

export default class Gui extends Feature<'gui'> {
  id = "gui" as const;
  dependencies = [
    COM,
    reactRendererFeature,
  ]
  api = {}
}
