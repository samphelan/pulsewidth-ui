const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Configuration
const libDir = path.join(__dirname, "../../lib");
const outputFile = path.join(__dirname, "../../lib/main.ts");

// Function to capitalize the first letter (if needed)
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

// Get all component directories inside lib
const componentDirs = fs.readdirSync(libDir).filter((file) => {
  return (
    fs.statSync(path.join(libDir, file)).isDirectory() && /^[A-Z]/.test(file)
  );
});

let importStatements = [];

componentDirs.forEach((dir) => {
  const componentDirPath = path.join(libDir, dir);

  // Find all .ts or .tsx files in the component directory, excluding index.ts
  const files = glob.sync(path.join(componentDirPath, "index.ts"));

  files.forEach((file) => {
    const content = fs.readFileSync(file, "utf8");
    importStatements.push(content.trim());
  });

  // Generate relative path
  //const relativePath = `./${dir}`;

  // Create import statement
  //importStatements.push(`export { ${dir} } from '${relativePath}';`);
});

// Remove duplicates (if any)

console.log(importStatements);

// Create the content for main.ts
const fileContent = `
${importStatements.join("\n")}
`.trim();

// Write to main.ts
fs.writeFileSync(outputFile, fileContent, "utf8");

console.log(`main.ts has been generated successfully at ${outputFile}`);
