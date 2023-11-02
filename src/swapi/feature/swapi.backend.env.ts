import Swapi, { backendEnv } from "./swapi.feature";

Swapi.setup(backendEnv, () => {
  return {
    shipsService: {
      getShips() {
        return ["millenium falcon", "stardestroyer", "f16"];
      },
    },
  };
});
