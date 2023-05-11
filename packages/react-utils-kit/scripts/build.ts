import * as fs from "fs";
import * as path from "path";
import tsConfig from "../tsconfig.base.json";
import ts from "typescript";

// Set the input and output directory paths
const dirname = path.dirname(import.meta.url).replace("file://", "");
const srcDir = dirname + "/../src";
const distDir = dirname + "/../dist";

// Create the output directory if it doesn't exist
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir);
}

/**
 * Returns a list of all files in the subdirectories of the given directory.
 */
const getFilesRecursive = (dir: string, baseDir = "", extensions = ["ts", "tsx"], where = "src"): string[] => {
  const files: string[] = [];

  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    const isExtensionMatched = extensions.reduce((acc, ext) => {
      return acc || file.endsWith(ext);
    }, false);

    if (stat.isDirectory()) {
      const newBaseDir = path.join(baseDir, file);
      files.push(...getFilesRecursive(filePath, newBaseDir, extensions, where));
    } else if (stat.isFile() && isExtensionMatched) {
      const relativeDir = baseDir ? path.join(baseDir, file) : file;
      files.push(`${dirname}/../${where}/${relativeDir}`);
    }
  });

  return files;
};

const standardizePath = (path: string | undefined) => {
  if (path === undefined) path = "";
  let str = [".", ""].includes(path) ? "./" : path;
  if (str.charAt(str.length - 1) !== "/") str += "/";
  return str;
};

/**
 * Replaces absolute paths with relative paths in the generated JavaScript files.
 */
const replaceAbsolutePaths = () => {
  const jsFiles = getFilesRecursive(distDir, "", ["js"], "dist").filter((file) => file.endsWith(".js"));

  jsFiles.forEach((jsFile) => {
    const filePath = path.join(jsFile);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const computedBaseUrl = standardizePath(compilerOptions.baseUrl);
    const relative = new Array(...(jsFile.replace(distDir, "").match(/(\/)/g)?.slice(0, -1) ?? [])).reduce((acc) => {
      return acc + "../";
    }, "");

    const updatedContent = Object.entries(compilerOptions.paths ?? {}).reduce((content, [key, values]) => {
      // TODO; implement fallback values
      const replacementPath = relative + (computedBaseUrl + values[0]).replace(/(.*)src\/(.*)/, "$2").replace("*", "");
      const pattern = new RegExp(`${key === "@/*" ? "@/" : key.replace("$/*", "")}/?(.*?)`, "g");
      return content.replace(pattern, `${replacementPath}$1`);
    }, fileContent);

    fs.writeFileSync(filePath, updatedContent, "utf8");
  });
};

// Get the list of files in the input directory
const files = getFilesRecursive(srcDir);

// TypeScript compilation options
const compilerOptions: ts.CompilerOptions = {
  target: ts.ScriptTarget.ES5,
  module: ts.ModuleKind.ESNext,
  outDir: distDir,
  declaration: true,
  declarationDir: distDir,
  baseUrl: tsConfig.compilerOptions.baseUrl,
  paths: tsConfig.compilerOptions.paths,

  // @/useless/todo
  // [root-path]/

  /* Bundler mode */
  moduleResolution: ts.ModuleResolutionKind.Bundler,
  resolveJsonModule: true,
  isolatedModules: true,
  jsx: ts.JsxEmit.ReactJSX,

  /* Linting */
  strict: true,
  noUnusedLocals: true,
  noUnusedParameters: true,
  noFallthroughCasesInSwitch: true,
};

// Configure the TypeScript program
const program = ts.createProgram(files, compilerOptions);

// Run the compilation
const emitResult = program.emit();

// Handle compilation errors
const allDiagnostics = ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics);
allDiagnostics.forEach((diagnostic) => {
  if (diagnostic.file) {
    const { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start!);
    const message = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
    console.log(`${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`);
  } else {
    console.log(ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n"));
  }
});

if (emitResult.emitSkipped) {
  console.log("The compilation was unsuccessful.");
} else {
  console.log("The compilation was successful.");
}

// Copy the package.json file to the output directory
const packageJsonSrcPath = dirname + "/../package.json";
const packageJsonDistPath = path.join(distDir, "package.json");
fs.cpSync(packageJsonSrcPath, packageJsonDistPath);

// Replace absolute paths to relative paths in the generated JavaScript files
replaceAbsolutePaths();
