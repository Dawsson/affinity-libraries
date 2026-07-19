import { readFile, writeFile } from "node:fs/promises";

const [sourcePath, outputPath] = process.argv.slice(2);
if (!sourcePath || !outputPath) {
  throw new Error("Usage: bun scripts/prepare-generator-spec.ts <source> <output>");
}

const document = JSON.parse(await readFile(sourcePath, "utf8")) as Record<string, unknown>;
normalizeIntegerConstants(document);
const paths = document.paths as Record<string, Record<string, Record<string, unknown>>>;
let operationCount = 0;

for (const pathItem of Object.values(paths)) {
  for (const operation of Object.values(pathItem)) {
    if (!operation || typeof operation !== "object" || !("operationId" in operation)) continue;
    operationCount += 1;
    const parameters = Array.isArray(operation.parameters) ? operation.parameters : [];
    const versionParameter = parameters.find(
      (parameter) =>
        parameter &&
        typeof parameter === "object" &&
        "$ref" in parameter &&
        parameter.$ref === "#/components/parameters/AffinityVersion",
    );
    if (!versionParameter) {
      throw new Error(`Operation ${String(operation.operationId)} is missing Affinity-Version`);
    }
    operation.parameters = parameters.filter((parameter) => parameter !== versionParameter);
  }
}

if (operationCount === 0) throw new Error("The OpenAPI document has no operations");

const components = document.components as { parameters?: Record<string, unknown> } | undefined;
if (components?.parameters) delete components.parameters.AffinityVersion;
document["x-affinity-sdk-injected-headers"] = ["Affinity-Version"];

await writeFile(outputPath, `${JSON.stringify(document, null, 2)}\n`);

function normalizeIntegerConstants(value: unknown): void {
  if (!value || typeof value !== "object") return;
  if (Array.isArray(value)) {
    for (const item of value) normalizeIntegerConstants(item);
    return;
  }

  const record = value as Record<string, unknown>;
  if (record.type === "number" && Number.isInteger(record.const)) record.type = "integer";
  for (const child of Object.values(record)) normalizeIntegerConstants(child);
}
