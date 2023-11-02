import { Environment, Feature, Service } from "@wixc3/engine-core";

export const backendEnv = new Environment("backend", "webworker", "multi");

export default class Swapi extends Feature<"swapi"> {
  id = "swapi" as const;
  api = {
    shipsService: Service.withType<{ getShips(): string[] }>()
      .defineEntity(backendEnv)
      .allowRemoteAccess(),
  };
}
