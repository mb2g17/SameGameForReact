[![Build Status](https://drone.matt-barnes.co.uk/api/badges/mb2g17/SameGameForReact/status.svg)](https://drone.matt-barnes.co.uk/mb2g17/SameGameForReact)
[![Available on GitHub](https://img.shields.io/badge/Available%20on-GitHub-white?style=flat-square&logo=github)](https://github.com/mb2g17/SameGameForReact)
[![License: AGPL v3](https://img.shields.io/badge/Licensed%20under-AGPLv3-blue?logo=gnu)](https://www.gnu.org/licenses/agpl-3.0)

# SameGame for React

This is an implementation of [SameGame](https://en.wikipedia.org/wiki/SameGame) built in React.

Play the game [here](https://demos.matt-barnes.co.uk/samegame-for-react).

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to build since 02/01/2022

This project has some serious software rot :P

Upon trying to install and build, you'll get build errors in node_modules related to imported types.

As a workaround, edit the file in node_modules (for me it was `Codegen.d.ts`) and replace the erroneous imported types with `any` types.

Then, the builds will work ok.

P.S. I recommend using `yarn`, not `npm`. Yes, I know CI uses `npm`. Yes, I know I'm an idiot for doing that. But I don't want to change it because it's working.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
