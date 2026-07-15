import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dir, "..");
const packagePath = resolve(root, "typescript/package.json");
const packageJson = JSON.parse(await readFile(packagePath, "utf8"));
packageJson.description = "Official TypeScript SDK for the Affinity API";
packageJson.author = "Affinity API Support <support@joinaffinityai.com>";
delete packageJson.publishConfig;
await writeFile(packagePath, `${JSON.stringify(packageJson, null, 2)}\n`);

const pomPath = resolve(root, "java/pom.xml");
let pom = await readFile(pomPath, "utf8");
pom = pom
  .replaceAll("https://github.com/openapitools/openapi-generator", "https://github.com/Dawsson/affinity-libraries")
  .replaceAll("scm:git:git@github.com:openapitools/openapi-generator.git", "scm:git:https://github.com/Dawsson/affinity-libraries.git")
  .replace("<description>OpenAPI Java</description>", "<description>Official Java SDK for the Affinity API</description>")
  .replace("<url>http://unlicense.org</url>", "<url>https://opensource.org/license/mit</url>")
  .replace("<name>OpenAPI-Generator Contributors</name>", "<name>Affinity API Support</name>")
  .replace("<email>team@openapitools.org</email>", "<email>support@joinaffinityai.com</email>")
  .replace("<organization>OpenAPITools.org</organization>", "<organization>Affinity</organization>")
  .replace("<organizationUrl>http://openapitools.org</organizationUrl>", "<organizationUrl>https://joinaffinityai.com</organizationUrl>");
await writeFile(pomPath, pom);

for (const language of ["go", "python", "java"]) {
  const filesPath = resolve(root, `${language}/.openapi-generator/FILES`);
  const files = (await readFile(filesPath, "utf8"))
    .split("\n")
    .filter((line) => !line.startsWith("test/") && !line.startsWith("src/test/"))
    .join("\n");
  await writeFile(filesPath, files);
}

const gradlePath = resolve(root, "java/build.gradle");
let gradle = await readFile(gradlePath, "utf8");
const quickstartMarker = "// affinity-quickstart-validation";
if (!gradle.includes(quickstartMarker)) {
  gradle += `\n${quickstartMarker}\nsourceSets.test.java.srcDir '../examples/java'\n`;
}
await writeFile(gradlePath, gradle);

const facadeReadmes: Record<string, string> = {
  typescript: `\`\`\`ts
import { Affinity } from "@affinity/sdk";
const affinity = new Affinity(process.env.AFFINITY_API_KEY!);
const catalog = await affinity.catalog.list({ query: "semaglutide" });
\`\`\``,
  python: `\`\`\`python
from affinity_sdk import Affinity
with Affinity(api_key) as affinity:
    catalog = affinity.catalog.list(query="semaglutide")
\`\`\``,
  go: `\`\`\`go
client := affinity.NewClient(os.Getenv("AFFINITY_API_KEY"))
catalog, err := client.Catalog.List(ctx, affinity.CatalogListParams{Query: "semaglutide"})
\`\`\``,
  java: `\`\`\`java
Affinity affinity = new Affinity(System.getenv("AFFINITY_API_KEY"));
var catalog = affinity.catalog().list("semaglutide");
\`\`\``,
};
for (const [language, example] of Object.entries(facadeReadmes)) {
  const readmePath = resolve(root, `${language}/README.md`);
  const readme = await readFile(readmePath, "utf8");
  const start = "<!-- affinity-facade:start -->";
  const end = "<!-- affinity-facade:end -->";
  const withoutFacade = readme.replace(new RegExp(`${start}[\\s\\S]*?${end}\\n*`), "");
  const facade = `${start}
## Recommended client

Start with the resource-oriented client. The generated API classes documented below are the
low-level transport surface.

${example}

Resources are available through account, catalog, practices, orders, and webhooks. Mutation calls
require an idempotency key.
${end}

`;
  await writeFile(readmePath, `${facade}${withoutFacade}`);
}

for (const language of ["typescript", "python", "go", "java"]) {
  const directory = resolve(root, language);
  const glob = new Bun.Glob("**/*.{go,java,md,py,ts}");
  for await (const relativePath of glob.scan({ cwd: directory, onlyFiles: true })) {
    if (relativePath.includes("node_modules/") || relativePath.includes("dist/")) continue;
    const filePath = resolve(directory, relativePath);
    const contents = await readFile(filePath, "utf8");
    const normalized = contents.replace(/[ \t]+$/gm, "");
    if (normalized !== contents) await writeFile(filePath, normalized);
  }
}
