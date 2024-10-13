// generateBarrels.js

const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Configuration
const libDir = path.join(__dirname, "../../lib");

// Function to capitalize the first letter (if needed)
const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

// Get all component directories inside lib
const componentDirs = fs.readdirSync(libDir).filter((file) => {
  return (
    fs.statSync(path.join(libDir, file)).isDirectory() && /^[A-Z]/.test(file)
  );
});

componentDirs.forEach((dir) => {
  const componentDirPath = path.join(libDir, dir);

  // Find all .ts or .tsx files in the component directory, excluding index.ts
  const files = glob
    .sync(
      path.join(componentDirPath, "!(*.d|*.test|*.styles|*Context).{ts,tsx}")
    )
    .filter(
      (file) =>
        path.basename(file) !== "index.ts" &&
        path.basename(file) !== "index.tsx"
    );

  let exportStatements = [];

  files.forEach((file) => {
    const fileContent = fs.readFileSync(file, "utf8");

    // Regular expression to find all "export const ComponentName" patterns
    const matches = fileContent.match(/export\s+const\s+([A-Za-z0-9_]+)/g);

    if (matches) {
      const names = [];
      // Extract component names from matches
      matches.forEach((match) => {
        const componentName = match.split(" ")[2]; // "export const ComponentName" -> get ComponentName
        names.push(componentName);
      });
      exportStatements.push(
        `export { ${names.join(", ")} } from './${path.basename(
          file,
          path.extname(file)
        )}';`
      );
    }

    // Also check for default export
    const hasDefaultExport = /export\s+default\s+/m.test(fileContent);

    if (hasDefaultExport) {
      const fileName = path.basename(file, path.extname(file)); // use file name as fallback
      exportStatements.push(
        `export { default as ${capitalize(fileName)} } from './${fileName}';`
      );
    }
  });

  // Join all export statements
  const indexContent = exportStatements.join("\n") + "\n";

  // Write to index.ts
  fs.writeFileSync(
    path.join(componentDirPath, "index.ts"),
    indexContent,
    "utf8"
  );

  console.log(`Generated barrel file for ${dir}`);
});
