import { uiEnv } from "../../react-renderer/feature/react-renderer.feature";
import { App } from "../ui/app";
import guiFeature from "./gui.feature";

guiFeature.setup(uiEnv, ({ run }, { reactRenderer: { renderService } }) => {
  run(() => {
    renderService.render(<App />);
  });
});
