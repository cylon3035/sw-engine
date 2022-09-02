import { Feature } from "@wixc3/engine-core";
import reactRendererFeature from "../../react-renderer/feature/react-renderer.feature";

export default new Feature({
  id: "gui",
  dependencies: [reactRendererFeature.asDependency],
  api: {},
});
