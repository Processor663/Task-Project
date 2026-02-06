# Copilot Instructions for Testing Project

## Project Overview
This is a simple Node.js module containing utility functions. The main file is `index.js`, which exports functions for basic arithmetic and random number generation.

## Key Patterns
- **Function Export**: Functions are exported using `module.exports = { functionName };` (e.g., `module.exports = { add };`)
- **Example Usage**: Inline examples are demonstrated with `console.log()` calls (e.g., `console.log(getRandomInt(1, 100));`)
- **Simple Arithmetic**: Basic operations like addition are implemented directly (e.g., `let c = a + b; return c;`)

## Code Style
- Uses arrow functions for simple operations (e.g., `add = () => { ... }`)
- Traditional function declarations for utility functions (e.g., `function getRandomInt(min, max) { ... }`)
- Variables declared with `let` for mutability

## Development Workflow
- Run with `node index.js` to see example output
- No build system or tests present - direct execution only

## Integration Points
- No external dependencies or APIs
- Pure JavaScript with built-in Math functions

## Important Files
- [index.js](index.js): Main module with all functionality