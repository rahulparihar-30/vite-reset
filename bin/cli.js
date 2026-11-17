#!/usr/bin/env node

import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const backupDirectory = path.join(root, "default");
const sourceDirectory = path.join(root, "src");

const filesToBackup = [
    "public",
    "index.html",
    "src/App.jsx",
    "src/App.css",
    "src/index.css",
    "src/main.jsx",
    "src/assets"
];

function exists(filePath) {
    return fs.existsSync(filePath);
}

function backupFile(relativePath) {
    const source = path.join(root, relativePath);
    const destination = path.join(backupDirectory, relativePath);

    if (!exists(source)) return;

    if (exists(destination)) {
        throw new Error(`Backup already exists: ${relativePath}`);
    }

    fs.mkdirSync(path.dirname(destination), {
        recursive: true
    });

    fs.renameSync(source, destination);

    console.log(`Backed up: ${relativePath}`);
}

function createFile(relativePath, content) {
    const filePath = path.join(root, relativePath);

    fs.mkdirSync(path.dirname(filePath), {
        recursive: true
    });

    fs.writeFileSync(filePath, content.trimStart());

    console.log(`Created: ${relativePath}`);
}

function resetProject() {
    console.log("\nStarting React + Vite reset...\n");

    if (!exists(path.join(root, "package.json"))) {
        throw new Error("package.json not found. Run this inside a project directory.");
    }

    if (!exists(sourceDirectory)) {
        throw new Error("src directory not found. Is this a React + Vite project?");
    }

    if (!exists(path.join(root, "node_modules", "react")) &&
        !exists(path.join(root, "package.json"))) {
        throw new Error("React installation not found.");
    }

    // 1. Create backup directory
    fs.mkdirSync(backupDirectory, {
        recursive: true
    });

    // 2. Move original files
    for (const file of filesToBackup) {
        backupFile(file);
    }

    // 3. Create a fresh public directory
    fs.mkdirSync(path.join(root, "public"), {
        recursive: true
    });

    // 4. Create clean App.jsx
    createFile("src/App.jsx", `
import "./App.css";

function App() {
    return (
        <main>
            <h1>React + Vite</h1>
        </main>
    );
}

export default App;
`);

    // 5. Create clean App.css
    createFile("src/App.css", `
/* Application styles */
`);

    // 6. Create clean index.css
    createFile("src/index.css", `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body, #root {
    min-height: 100%;
}

body {
    font-family: Arial, sans-serif;
}
`);

    // 7. Create clean main.jsx
    createFile("src/main.jsx", `
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
`);

    // 8. Create clean index.html
    createFile("index.html", `
<!doctype html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ffffff" />
        <title>React Application</title>
    </head>
    <body>
        <div id="root"></div>
        <script type="module" src="/src/main.jsx"></script>
    </body>
</html>
`);

    console.log("\nReact + Vite project reset completed!");
    console.log("Original files are available in the default folder.\n");
}

try {
    resetProject();
} catch (error) {
    console.error("\nReset failed:", error.message);
    process.exitCode = 1;
}
