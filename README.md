# File uploading application

   React Native + Expo + Appwrite

   This guide is based on a YouTube tutorial
   https://www.youtube.com/watch?v=ZBCUegTZF7M

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

   ```bash
   npx create-expo-app@latest
   ```

2. Start the app

   ```bash
    npx expo start -c
   ```

   Scan the QR code displayed in the terminal with your phone (use your camera on iOS or the Expo Go app on Android).

3. Using Appwrite

   * Create an account at Appwrite and set up a project for either iOS or Android.
   * Create a database with two tables and the required attributes, as shown in the tutorial.
   * Connect the application to the database by creating an appwrite.js file in the lib directory and adding the necessary keys.


 4. Erros and fixes

   Unlike the video, your project may default to TypeScript files instead of JavaScript. Update the tsconfig.json to use .js and .jsx file types. Additionally, when using Android, ensure that video links end with .mp4 to render correctly, as other formats may not display.