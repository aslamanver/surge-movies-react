# Surge Movies - v1.0.0

Surge Movies is a mobile app that let you explore the best-rated movies in the world.

![](/android/app/src/main/res/drawable/icon.png)

[surge-movies-react](https://aslamanver.github.io/surge-movies-react/) | [Create Issue](https://github.com/aslamanver/surge-movies-react/issues/new)

[![Build Status](https://github.com/aslamanver/surge-movies-react/actions/workflows/node.js.yml/badge.svg)](https://github.com/aslamanver/surge-movies-react/actions)

<hr/>

## Features

- This app is totally free to use
- Offline functionality is enabled
- Up to 10,000 movies to explore

## Demo

- app-v1.0.0.apk [Download](demo/app-v1.0.0.apk)

- [Demo Video](https://drive.google.com/file/d/1V4zExAlXdKzPki4FWTjk8krVO9qGGde4/view?usp=share_link)

![](demo/screencast.gif)

## Developer Contributions

> [![Build Status](https://github.com/aslamanver/surge-movies-react/actions/workflows/node.js.yml/badge.svg)](https://github.com/aslamanver/surge-movies-react/actions)
<br/> If the build status is passing, there is no error with any build configurations and dependencies.

1. Clone the project `git clone git@github.com:aslamanver/surge-movies-react.git`

2. Run `cd surge-movies-react`

3. Replace API_KEY obtained from [https://www.themoviedb.org](https://www.themoviedb.org)

4. Run `echo "export const API_KEY = 'YOUR_API_KEY';" | cat > src/secrets/index.ts`

5. Run this for Android build  `npm run app`

6. If you want to install Android APK run `npm run android:install`

## CI/CD

1. GitHub Actions - [.github/workflows/node.js.yml](https://github.com/aslamanver/surge-movies-react/blob/master/.github/workflows/node.js.yml)

