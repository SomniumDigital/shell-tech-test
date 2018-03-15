# Shell tech test
### Created by Stefano Restaino

Once downloaded, in your CLI run `yarn` to install all dependancies.

You can run the application using `yarn start`.

You can run the Jest unit tests using `yarn test`.

This application has been build using [Create React App](https://github.com/facebook/create-react-app) from Facebook.

The application uses a combination of [Redux](https://redux.js.org/) and [Thunk](https://github.com/gaearon/redux-thunk) for state management.

If you'd like to take a look at a production build run `yarn build`, the production files will be found in `/build`.

#### Areas that could be further improved
- Make use of `{fetching}` and `{posting}` to perhaps display a loader or notification to the user that something is happening.
- Implement error handling around API requests within Redux to differentiate between a successful or unsuccessful request
- Connect to a real world API using a combination of `fetch`, `async/await`, `promise` and `try/catch`
- CSS could be improved by using CSS Modules/PostCSS, Styled Components or simply SASS
- Add Autoprefixer for vendor prefixes to ensure greater compatibility
