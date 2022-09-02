import { workerInitializer } from "@wixc3/engine-core";
import { uiEnv } from "../../react-renderer/feature/react-renderer.feature";
import { backendEnv } from "../../swapi/swapi.feature";
import { App } from "../ui/app";
import guiFeature from "./gui.feature";

guiFeature.setup(
  uiEnv,
  (
    { run },
    {
      COM: { communication },
      reactRenderer: { renderService },
      swapi: { swapiData },
    }
  ) => {
    run(async () => {
      await workerInitializer({ communication, env: backendEnv });
      const ships = await swapiData.getShips();
      renderService.render(<App ships={ships} />);
    });
  }
);
