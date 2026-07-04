// Run from project root:
// node tools/project-structure.js
//
// Or pass a custom path:
// node tools/project-structure.js "D:\theBalticSee\Baltic-Sea-News"

const fs = require("fs");
const path = require("path");

// -----------------------------
//   CONFIGURACIÓN
// -----------------------------

let rootPath = process.cwd();

if (process.argv.length > 2) {
  rootPath = path.resolve(process.argv[2]);
}

if (!fs.existsSync(rootPath) || !fs.statSync(rootPath).isDirectory()) {
  console.error(`❌ No se encontró el directorio raíz: ${rootPath}`);
  process.exit(1);
}

// Directorios a ignorar COMPLETAMENTE
const ignoreDirs = new Set([
  ".git",
  ".vs",
  ".idea",
  ".vscode",

  "node_modules",
  "dist",
  "build",
  "coverage",
  ".next",
  ".nuxt",
  ".turbo",
  ".cache",
  ".parcel-cache",

  "bin",
  "obj",
]);

// Extensiones para mostrar
const showExtensions = new Set([
  // JS / TS
  ".js",
  ".jsx",
  ".ts",
  ".tsx",

  // Styles
  ".css",
  ".scss",
  ".sass",
  ".less",

  // Config / project files
  ".json",
  ".jsonc",
  ".html",
  ".md",
  ".yml",
  ".yaml",

  // Optional backend / tooling
  ".cs",
  ".csproj",
  ".sln",
]);

// Archivos a excluir por nombre
const excludeFileNames = [
  /^\.DS_Store$/i,
  /^Thumbs\.db$/i,

  // Lock files
  /^package-lock\.json$/i,
  /^yarn\.lock$/i,
  /^pnpm-lock\.yaml$/i,

  // Environment files with possible secrets
  /^\.env$/i,
  /^\.env\..*$/i,

  // Optional noisy files
  /^tsconfig\.tsbuildinfo$/i,
];

// Dotfiles útiles
const usefulDotFiles = new Set([
  ".gitignore",
  ".npmrc",
  ".prettierrc",
  ".prettierignore",
  ".eslintrc",
  ".eslintignore",
  ".editorconfig",
]);

// -----------------------------
//   EJECUCIÓN
// -----------------------------

const outputLines = [];

outputLines.push(`Project structure (root: ${rootPath}):`);
outputLines.push("");

printTree(rootPath, "");

const outputPath = path.join(process.cwd(), "project_structure.txt");

fs.writeFileSync(outputPath, outputLines.join("\n"), "utf8");

console.log(`✅ project_structure.txt actualizado en: ${outputPath}`);

// -----------------------------
//   FUNCIONES
// -----------------------------

function printTree(dirPath, indent) {
  const dirName = path.basename(dirPath);

  if (ignoreDirs.has(dirName)) {
    return;
  }

  outputLines.push(`${indent}${dirName}/`);

  let entries;

  try {
    entries = fs.readdirSync(dirPath, { withFileTypes: true });
  } catch (error) {
    outputLines.push(`${indent}  ⚠️ No se pudo leer este directorio`);
    return;
  }

  const subDirs = [];
  const files = [];

  for (const entry of entries) {
    const entryPath = path.join(dirPath, entry.name);

    // Ignorar symlinks
    if (entry.isSymbolicLink()) {
      continue;
    }

    if (entry.isDirectory()) {
      if (!ignoreDirs.has(entry.name)) {
        subDirs.push(entry);
      }
      continue;
    }

    if (entry.isFile()) {
      const name = entry.name;

      if (isExcluded(name)) {
        continue;
      }

      const ext = path.extname(name);

      if (usefulDotFiles.has(name) || showExtensions.has(ext)) {
        files.push(entry);
      }
    }
  }

  subDirs.sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
  );

  files.sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: "base" })
  );

  for (const subDir of subDirs) {
    printTree(path.join(dirPath, subDir.name), indent + "  ");
  }

  for (const file of files) {
    outputLines.push(`${indent}  ${file.name}`);
  }
}

function isExcluded(name) {
  return excludeFileNames.some((rx) => rx.test(name));
}