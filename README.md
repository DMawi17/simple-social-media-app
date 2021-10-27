# simple-social-media-app

## In the project directory, you can run:

To install dependencies run:

```zsh
$ yarn
```

And to run the app in the development mode:

```zsh
yarn start
```

Open http://localhost:3000 to view it in the browser.

## Folder Structure:

```zsh

```

## backend components features:

-   Users can register useing their email address.
-   Auth, register users can sign-in and sign-out.
-   after sign-in users can see, edit and delete their profile.

### User model

-   Name
-   Email
-   Password
-   CreatedAt
-   UpdatedAt

## Auth with JSON Web Tokens ..

## API endpoints for user CRUD

-   Create a user /api/users => POST
-   List all users => /api/users => GET
-   Fetch a user => /api/users/:userId => GET
-   Update a user => /api/users/:userId => PUT
-   Delete a user => /api/users/:userId => DELETE
-   User sign-in => /auth/signin => POST
-   User signout => /auth/signout => GET


## Folder Structure for Backend:
```zsh
├──  server
│	├──  controllers
│	│  ├──  auth.controller.js
│	│  └──  user.controller.js
│	├──  helpers
│	│  └── handleErrors.js
│	├──  models
│	│  └──  user.model.js
│	├──  routes
│	│  ├──  auth.routes.js
│	│  └──  user.routes.js
│	├──  express.js
│	└──  server.js
```

## Libraries:

- joi
- bcrypt
- jwt
