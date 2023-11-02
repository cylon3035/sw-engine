import RenderService from "../ui/renderer-service";
import reactRendererFeature, { uiEnv } from "./react-renderer.feature";

reactRendererFeature.setup(uiEnv, ({ onDispose }) => {
  const rootElement = document.createElement("div");
  rootElement.id = "root";
  rootElement.style.height = "100vh";
  document.body.appendChild(rootElement);

  const renderService = new RenderService(rootElement);

  onDispose(() => {
    ///dispose
    console.log("dispose");
  });

  return {
    renderService,
    domNodeService: {
      getRootElement() {
        return rootElement;
      },
      getVersion() {
        return "0.0.1";
      },
    },
  };
});
