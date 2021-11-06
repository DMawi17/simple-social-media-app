# simple-social-media-app

## Still in constuction..

To install dependencies and start the client side, run the following command from the project directory:

```zsh
$ cd client && yarn && yarn start
```

This will open a browser window in the http://localhost:3006.

And then on a separate terminal run the following command to start the server side code in development mode:

```zsh
yarn dev
```

You can open http://localhost:3001 to view it in the browser.

## Client-side Folder Structure

```zsh
client/
├── package.json
├── public/
│  └── index.html
├── src/
│  ├── App.js
│  ├── app.scss
│  ├── components/
│  │  ├── auth/
│  │  │  ├── auth-api.js
│  │  │  ├── auth-helper.js
│  │  │  └── SignIn.js
│  │  ├── Menu.js
│  │  └── users/
│  │     ├── DeleteUser.js
│  │     ├── EditProfile.js
│  │     ├── Home.js
│  │     ├── Profile.js
│  │     ├── SignUp.js
│  │     ├── user-api.js
│  │     └── Users.js
│  └── index.js
└── yarn.lock
```

## Backend components features

-   Any user have access to the user list.
-   Users can register using their email and password.
-   Users can login using their email and password.
-   Only authenticated users can access any user profile.
-   Authenticated users have authorization to edit and delete only their profile.

## Server-side Folder Structure

```zsh
server/
├── config
│  └── config.js
├── controllers/
│  ├── auth.controller.js
│  └── users.controller.js
├── helpers/
│  └── handleErrors.js
├── models/
│  └── user.model.js
├── routes/
│  ├── auth.route.js
│  └── users.route.js
└── server.js
```
