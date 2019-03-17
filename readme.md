# Description

WebPress is a lightweight react-ready starter plugin. If you are starting to adventure in the React world inside of WordPress then this plugin is for you.

# Requirements

Before using that, you should at least know what is [webpack](https://webpack.js.org/concepts) and how it works because we choose webpack as the module bundler for this plugin.

- [Node](https://nodejs.org/en/download/)
- [webpack](https://webpack.js.org/guides/installation/)

# Installation

- Clone or download this repository inside of your plugins folder
- Using the terminal, enter inside of the webpress folder and run: `npm install && npm run prod`
- Activate the plugin
- Navigate on your home page to see the "Hello World" printed using React

# Commands

It uses the module bundler webpack with following scripts pre-built:

- `npm run prod`: Under the hood it runs `webpack --mode production` for transpiling files for production
- `npm run dev`: It runs `webpack --mode development` for transpiling file in development mode, so you can debug using your browser
- `npm run watch`: It runs `webpack --mode development --watch` for constantly watch your changes to then transpile in development mode

You can add new scripts in `package.json`.