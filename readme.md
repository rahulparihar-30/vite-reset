# vite-reset

**Reset your React + Vite project to a clean starter template without losing your original starter files.**

`vite-reset` is a lightweight CLI utility that removes the default Vite starter UI, backs up the original starter files into a `default` directory, and generates a clean React application structure.

## Features

- 📦 Backs up original Vite starter files.
- 🧹 Removes default Vite demo styling and components.
- ⚛️ Generates a clean React application.
- 📁 Creates a fresh `public` directory.
- 🔒 Preserves `package.json` and `vite.config.js`.
- ⚡ Uses Node.js built-in modules without external dependencies.

## Requirements

- Node.js >= 18
- npm
- An existing React + Vite project

## Installation

No global installation is required. You can execute the package directly using `npx`:

```bash
npx vite-reset
```

Alternatively, install it globally:

```bash
npm install -g vite-reset
```

Then execute:

```bash
vite-reset
```

## Usage

1. Navigate to your React + Vite project directory:

```bash
cd my-react-project
```

2. Execute the reset command:

```bash
npx vite-reset
```

3. The utility will back up the original starter files and generate a clean React application.

4. Start your development server:

```bash
npm run dev
```

## What does it change?

The utility backs up the following files and directories when present:

```text
public/
index.html
src/App.jsx
src/App.css
src/index.css
src/main.jsx
src/assets/
```

Original files are preserved inside the `default` directory.

## Project Structure

After executing the reset command, your project will look similar to this:

```text
my-react-project/
│
├── default/
│   ├── public/
│   ├── index.html
│   └── src/
│       ├── App.jsx
│       ├── App.css
│       ├── index.css
│       ├── main.jsx
│       └── assets/
│
├── public/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── node_modules/
```

*The exact structure depends on which starter files existed before the reset.*

## Generated React Application

The utility generates a minimal React application using:

- React
- React DOM
- React StrictMode
- Clean CSS files

Your existing dependencies and Vite configuration are preserved.

## Important Notes

- Run the command from the root of your React + Vite project.
- Currently supports the standard JavaScript React + Vite template.
- Existing application components are not automatically deleted.
- Existing backup files are not overwritten.
- Review your project before running the reset command.
- The utility does not automatically start or validate the development server.

**Always keep a backup of important project files before running filesystem modification utilities.**

## Contributing

Contributions, suggestions, and bug reports are welcome!

1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

**Built for developers who want to skip the Vite demo and start coding.**