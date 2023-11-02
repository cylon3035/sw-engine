import { webWorkerInitializer } from "@wixc3/engine-core";
import { uiEnv } from "../../react-renderer/feature/react-renderer.feature";
import { App } from "../ui/app";
import guiFeature from "./gui.feature";
import { backendEnv } from "../../swapi/feature/swapi.feature";

guiFeature.setup(
  uiEnv,
  (
    { run },
    {
      COM: { communication },
      reactRenderer: { domNodeService, renderService },
      swapi: { shipsService },
    }
  ) => {
    console.log("root", domNodeService.getRootElement());

    run(async () => {
      const envId1 = await webWorkerInitializer({
        communication,
        env: backendEnv,
      });
      const envId2 = await webWorkerInitializer({
        communication,
        env: backendEnv,
      });
      console.log("env id web worker", envId1, envId2);
      const ships = await shipsService.get(envId1).getShips();
      const ships2 = await shipsService.get(envId2).getShips();
      renderService.render(<App ships={ships.concat(ships2)} />);
    });
  }
);
