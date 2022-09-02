import { COM, Environment, Feature, Service } from "@wixc3/engine-core";

export const backendEnv = new Environment("backend", "worker", "single");

export default new Feature({
  id: "swapi",
  dependencies: [COM.asDependency],
  api: {
    swapiData: Service.withType<{ getShips(): string[] }>()
      .defineEntity(backendEnv)
      .allowRemoteAccess(),
  },
});
