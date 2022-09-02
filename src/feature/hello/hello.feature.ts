import { Feature, Environment } from "@wixc3/engine-core";

export const uiEnv = new Environment("ui", "window", "single");

const helloFeature = new Feature({
  id: "hello",
  dependencies: [],
  api: {},
});

helloFeature.setup(uiEnv, () => {
  console.log("setup");
});

export default helloFeature;
