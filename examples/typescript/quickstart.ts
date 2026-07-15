import { APIKeysApi, Configuration } from "../../typescript";

const apiKey = process.env.AFFINITY_API_KEY;
if (!apiKey) throw new Error("Set AFFINITY_API_KEY to a test-mode service key");

const affinity = new APIKeysApi(
  new Configuration({
    accessToken: apiKey,
    headers: { "Affinity-Version": "2026-07-09" },
  }),
);

console.log(await affinity.getApiAccess());
