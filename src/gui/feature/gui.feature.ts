import { COM, Feature } from "@wixc3/engine-core";
import reactRendererFeature from "../../react-renderer/feature/react-renderer.feature";
import swapiFeature from "../../swapi/swapi.feature";

export default new Feature({
  id: "gui",
  dependencies: [
    COM.asDependency,
    reactRendererFeature.asDependency,
    swapiFeature.asDependency,
  ],
  api: {},
});
