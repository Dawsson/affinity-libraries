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
