import swapiFeature, { backendEnv } from "./swapi.feature";

swapiFeature.setup(backendEnv, () => {
  return {
    swapiData: {
      getShips() {
        return ["Death Star", "Star Destroyer", "Millennium Falcon"];
      },
    },
  };
});
