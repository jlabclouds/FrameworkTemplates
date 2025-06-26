# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Create a new template
```js
npm create vite@latest my-app -- --template react
```
## Launch the app for local dev
- dir/ls into working project directory
```js
npm install
npm run dev
```
or
```js
npm install --save-dev parcel
```
or
```js
npx create-rsbuild --template react
```
# Test using Azure Pipelines
# Deployment
# Code Pushify
```js
npm install -g appcenter-cli
```
- Apache Cordova
```js
cordova plugin add cordova-plugin-code-push@latest
https://learn.microsoft.com/en-us/appcenter/distribution/codepush/cordova#getting-started
```
- React Native
```js
https://learn.microsoft.com/en-us/appcenter/distribution/codepush/rn-get-started
```
