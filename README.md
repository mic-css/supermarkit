# Markpad

Markpad is an online note-taking application powered by markdown.

## Client

Markpad's client-side Angular application can be found in the `client/` directory. The app was generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.15.1.

Remember to run `npm install` and `bower install` to install or update any package dependencies.

### Build & development

Navigate to the `client/` directory and run `grunt` for building and `grunt serve` for preview.
This will open a browser window pointing to `localhost:9000`, and will keep compass running in the terminal to watch for changes to Sass stylesheets.

### Testing

Running `grunt test` will run the unit tests with karma.
For feature testing, in separate terminal panes, run `webdriver-manager start` and `npm run dev` from the `server/`, then run `npm run protractor` from the `client/` directory.

## Server

Markpad's Express.js server can be found in the `server/` folder.

Remember to run `npm install` to install or update any package dependencies. The server and client have different dependencies so make sure to do this for each of the directories.

### Build & Development

Navigate to the `server/` directory and run `npm run dev` for development. This will serve the development environment to `localhost:3000`.
To build and serve the production environment, run `grunt --force` from the `client/` directory for building and `npm start` from the `server/` directory.

#### Database

The database is run using MongoDB. Please ensure you have MongoDB installed before continuing.
Installation instructions may be found at docs.mongodb.org/manual/installation or running `brew install mongodb` if you use Brew Doctor.
The database files are gitignored to avoid adding stored data to the repo.  You will need to install your own database locally.
To do so run the following in your command line:
* `mkdir -p data/db && mkdir data/logs`.
* `mongod --dbpath data/db/ --logpath data/logs/mongodb.log --logappend`
This second command will need to be run everytime before connecting node to the database for this project, so you may wish to alias it.
It will ensure the project database is used by node and that `mongod` server logs are added to the log file in the logs directory.

If you encounter errno61, connection refused when connecting to Mongo, you should run: `brew services start mongodb`

### Testing

__Currently there is no testing suite for the server__
