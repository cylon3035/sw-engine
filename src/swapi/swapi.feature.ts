import { COM, Environment, Feature, Service } from "@wixc3/engine-core";

export const backendEnv = new Environment("backend", "webworker", "single");

export default class SWAPI extends Feature<'swapi'> {
  id = "swapi" as const
  dependencies = [COM]
  api = {
    swapiData: Service.withType<{ getShips(): string[] }>()
      .defineEntity(backendEnv)
      .allowRemoteAccess(),
  }
}
